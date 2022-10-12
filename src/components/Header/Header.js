import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/icons-quiz.png';

const Header = () => {
    return (
        <div className='flex h-16 pl-32 pr-32 bg-sky-600 items-center justify-between'>
            <div className='flex items-center '>
            <img className='h-10 bg-white rounded-lg' src={logo} alt="" />
            <h3 className='text-white pl-3 font-bold'>QuickQuiz</h3>
            </div>
            <div className='font-semibold text-gray-300'>

                <Link className='ml-6 ' to='/home'>Home</Link>
                
                <Link className='ml-6' to='/chart'>Chart</Link>
                <Link className='ml-6' to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;