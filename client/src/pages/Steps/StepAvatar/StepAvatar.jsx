import React from 'react';

const StepAvatar = ({ changeStep }) => {
    return (
        <div>
            <div>
                <h2>Step-4 : Avatar</h2>
                <button onClick={changeStep}> Next </button>
            </div>
        </div>
    );
};

export default StepAvatar;
