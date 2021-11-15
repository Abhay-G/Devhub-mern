import React from 'react';
import { useState } from 'react';
import StepOTP from '../Steps/StepOTP/StepOTP';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
const steps = {
    1: StepPhoneEmail,
    2: StepOTP,
};
const Authenticate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];
    return (
        <>
            <Step changeStep={() => setStep(step + 1)} />
        </>
    );
};

export default Authenticate;
