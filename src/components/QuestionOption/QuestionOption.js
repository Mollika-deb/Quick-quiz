import React from 'react';

const QuestionOption = ({qus, index}) => {
    const {options, id, correctAnswer, question} = qus;
    const clicked = (event) =>{event.currentTarget.textContent === correctAnswer ? toast('you got the correct one! ') : toast ('try again') };
    const notify = () => toast('correctAnswer');

    return (
        <div>
            
        </div>
    );
};

export default QuestionOption;