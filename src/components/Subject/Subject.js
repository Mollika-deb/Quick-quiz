import React from 'react';

const Subject = ({subject}) => {
    const { logo, name, total} = subject
    return (
        <div >
            <img src={logo} alt="" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <h3>{name}</h3>
                    <h3>{total}</h3>
                </div>
                <div>
                    <button>Start practice</button>
                </div>
            </div>
        </div>
    );
};

export default Subject;