import React from 'react';

const StepOTP = ({ changeStep }) => {
    return (
        <div>
            <div>
                <h2>Step-2 : OTP</h2>
                <button onClick={changeStep}> Next </button>
            </div>
        </div>
    );
};

export default StepOTP;
