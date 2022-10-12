import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const QuestionOption = ({qus, index}) => {
    const {options, id, correctAnswer, question} = qus;
    const clicked = (event) =>{event.currentTarget.textContent === correctAnswer ? toast('you got the correct one! ') : toast('try again') };
    const notify = () => toast('correctAnswer');

    return (
        <div className='m-6 bg-orange-400 p-6 flex flex-col mx-auto justify-center'>
            <div>
                <div className='flex gap-5 m-5'>
                    <p className='text-3xl text-white '>{index+1}.{question.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                    
                </div>
            </div>
            <ul >
                {
                  
                         options.map(option => <div key={option} className="m-6 w-64 text-sm font-medium text-gray-700 bg-slate-100">
                            <li onClick={clicked} className="w-full border-b border-gray-300">
                            <div className='flex items-center pl-3'>
                                <input className='w-4 h-4 text-sky-500 bg-slate-500' id="list-radio-license"  type="radio" value="" name={id}/>
                                <label className='py-3 ml-2 w-full text-sm font-medium text-gray-600' htmlFor="list-radio-license">{option}</label>
                            </div>
                            
                            </li>
                            </div>)
                
                   
                }
                   
            </ul>
        </div>
    );
};

export default QuestionOption;