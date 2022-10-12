import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar';
import QuestionOption from '../QuestionOption/QuestionOption';

const Quiztopic = () => {
    const quiz = useLoaderData();
    const {questions, logo, name} = quiz.data
    return (
        <div>
            <h1>Welcome to {name} section</h1>
            <img src={logo} alt="" />
           
           <div>
                {
                    questions.map((question, index) => <QuestionOption key={question.question} index={index} qus={question}></QuestionOption>)
                }

           </div>

        </div>
    );
};

export default Quiztopic;