import React from 'react';

const StepName = ({ changeStep }) => {
    return (
        <div>
            <div>
                <h2>Step-3 : Name</h2>
                <button onClick={changeStep}> Next </button>
            </div>
        </div>
    );
};

export default StepName;
