import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const QuestionOption = ({qus, index}) => {
    const {options, id, correctAnswer, question} = qus;
    const clicked = (event) =>{event.currentTarget.textContent === correctAnswer ? toast('you got the correct one! ') : toast('try again') };
    const notify = () => toast('correctAnswer');

    return (
        <div>
            <div>
                <div>
                    <p className='text-3xl text-white '>{index+1}.{question.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                </div>
            </div>
            <ul >
                {
                  
                         options.map(option => <div key={option}>
                            <li onClick={clicked}>
                            <div>
                                <input id="list-radio-license"  type="radio" value="" name={id}/>
                                <label htmlFor="list-radio-license">{option}</label>
                            </div>
                            
                            </li>
                            </div>)
                
                   
                }
                   
            </ul>
        </div>
    );
};

export default QuestionOption;