import React from 'react';

const Subject = ({subject}) => {
    const {name} = subject
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default Subject;