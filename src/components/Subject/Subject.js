import React from 'react';
import { useNavigate } from 'react-router-dom';

const Subject = ({subject}) => {
    const {id, logo, name, total} = subject;
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/subject/${id}`)
    }
    return (
        <div className='border-2 border-slate-400 rounded-lg '>
            <img className='img-fluid p-5' src={logo} alt="" />
            <div className='flex justify-between items-center p-5 font-bold'>
                <div className='flex '>
                    <h3>{name} : </h3>
                    <h3 className='ml-3'>{total}</h3>
                </div>
                <div>
                    <button onClick={handleNavigate} className='bg-sky-500 px-8 py-2 rounded-lg text-white font-bold'>Start practice</button>
                </div>
            </div>
        </div>
    );
};

export default Subject;