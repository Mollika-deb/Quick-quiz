import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/quiztopic'>QuickTopic</Link>
            <Link to='/chart'>Chart</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    );
};

export default Navbar;