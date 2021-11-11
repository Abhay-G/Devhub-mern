import React from 'react';

const StepUsername = ({ changeStep }) => {
    return (
        <div>
            <div>
                <h2>Step-5 : Username</h2>
                <button onClick={changeStep}> Next </button>
            </div>
        </div>
    );
};

export default StepUsername;
