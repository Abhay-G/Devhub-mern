import React, { useState } from 'react';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepOTP from '../Steps/StepOTP/StepOTP';
import StepUsername from '../Steps/StepUsername/StepUsername';
import StepName from '../Steps/StepName/StepName';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
const steps = {
    1: StepPhoneEmail,
    2: StepOTP,
    3: StepName,
    4: StepAvatar,
    5: StepUsername,
};
const Register = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    return (
        <div>
            <Step changeStep={() => setStep(step + 1)} />
        </div>
    );
};

export default Register;
