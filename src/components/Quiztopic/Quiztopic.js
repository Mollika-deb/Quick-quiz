import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar';

const Quiztopic = () => {
    const quiz = useLoaderData();
    const {questions , logo, name} = quiz.data;
    console.log(quiz);
    return (
        <div>
        
           <h1>Details about quiz</h1>
           {

           }

        </div>
    );
};

export default Quiztopic;