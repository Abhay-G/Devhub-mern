const otpService = require('../services/otp-service');
const hashService = require('../services/hash-service');
const userService = require('../services/user-service');
const tokenService = require('../services/token-service');
const UserDto = require('../dtos/user-dto');
class AuthController {
    async sendOtp(req, res) {
        const { phone } = req.body;
        console.log(phone);
        if (!phone) {
            res.status(404).json({ message: 'Phone field is required' });
        }
        //create otp
        const otp = await otpService.generateOtp();
        //2mins time to expire
        const ttl = 1000 * 60 * 2;
        const expires = Date.now() + ttl;
        const data = `${phone}.${otp}.${expires}`;
        const hash = await hashService.hashOtp(data);

        //send OTP
        try {
            //! await otpService.sendBySms(phone, otp);
            res.status(200).json({
                hash: `${hash}.${expires}`,
                phone,
                otp,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'message sending failed' });
        }
    }

    async verifyOTP(req, res) {
        const { otp, hash, phone } = req.body;
        if (!otp || !hash || !phone) {
            res.status(400).json({ message: 'All fields are required' });
        }
        //splitting the hash into hashedOTP and expiring time
        const [hashedOtp, expires] = hash.split('.');
        if (Date.now() > +expires) {
            res.status(400).json({ message: 'OTP expired' });
        }

        const data = `${phone}.${otp}.${expires}`;
        const isValid = otpService.verifyOtp(hashedOtp, data);
        if (!isValid) {
            res.status(400).json({ message: 'Invalid OTP' });
        }
        //creating the user
        let user;
        try {
            user = await userService.findUser({ phone });
            if (!user) {
                user = await userService.createUser({ phone });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Db error' });
        }
        // generate JWT token
        const { accessToken, refreshToken } = tokenService.generateTokens({
            _id: user._id,
            activated: false,
        });
        //store refreshToken in database
        await tokenService.storeRefreshToken(refreshToken, user._id);
        //store refreshToken in cookie
        res.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });
        res.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });
        const userDto = new UserDto(user);
        res.status(200).json({ user: userDto, auth: true });
    }
    async refresh(req, res) {
        //get refresh token from cookie
        const { refreshToken: refreshTokenFromCookie } = req.cookies;

        //check if refresh token is valid
        let userData;
        try {
            userData = await tokenService.verifyRefreshToken(
                refreshTokenFromCookie
            );
        } catch (err) {
            return res.status(401).json({ message: 'Invalid Token' });
        }
        //check if token is in database
        try {
            const token = tokenService.findRefreshToken(
                userData._id,
                refreshTokenFromCookie
            );
            if (!token) {
                return res.status(401).json({ message: 'Invalid Token' });
            }
        } catch (err) {
            return res.status(500).json({ message: 'Internal Error' });
        }
        //check if valid user
        const user = await userService.findUser({ _id: userData._id });
        if (!user) {
            return res.status(404).json({ message: 'No user' });
        }
        //generate new tokens
        const { refreshToken, accessToken } = tokenService.generateTokens({
            _id: userData._id,
        });
        //update refeshToken
        try {
            tokenService.updateRefreshToken(userData._id, refreshToken);
        } catch (err) {
            return res.status(500).json({ message: 'Internal Error' });
        }
        //put in cookie
        res.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });
        res.cookie('accessToken', accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });
        //response
        res.status(200).json({ user: new UserDto(user), auth: true });
    }
    async logout(req, res) {
        const { refreshToken } = req.cookies;
        //delete refresh token from db
        await tokenService.removeToken(refreshToken);
        //delete cookies
        res.clearCookie('refreshToken');
        res.clearCookie('accessToken');
        res.status(200).json({ user: null, auth: false });
    }
}
module.exports = new AuthController();
