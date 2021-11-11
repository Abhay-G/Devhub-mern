import { useState } from 'react';
import StepOTP from '../Steps/StepOTP/StepOTP';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
const steps = {
    1: StepPhoneEmail,
    2: StepOTP,
};
const Login = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];
    return (
        <div>
            <Step changeStep={() => setStep(step + 1)} />
        </div>
    );
};

export default Login;
