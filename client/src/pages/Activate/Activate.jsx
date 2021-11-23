import React from 'react';
import { useState } from 'react';
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
const steps = {
    1: StepName,
    2: StepAvatar,
};
const Activate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];
    return (
        <>
            <Step changeStep={() => setStep(step + 1)} />
        </>
    );
};

export default Activate;
