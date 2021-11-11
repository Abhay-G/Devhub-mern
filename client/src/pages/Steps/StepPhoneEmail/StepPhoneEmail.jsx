import React from 'react';

const StepPhoneEmail = ({ changeStep }) => {
    return (
        <div>
            <h2>Step-1 : Phone or Email</h2>
            <button onClick={changeStep}> Next </button>
        </div>
    );
};

export default StepPhoneEmail;
