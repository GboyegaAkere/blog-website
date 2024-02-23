import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [activeButton, setActiveButton] = useState('home');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <header className="bg-gray-900 text-white py-4 md:py-6">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                <div className="flex items-center">
                    <Link to="/">
                     <a href="#" onClick={() => handleButtonClick('home')} className={`mr-4 font-bold text-xl md:text-2xl ${activeButton === 'home' ? 'text-blue-500' : ''}`}>Home</a>
                    </Link>
                    <Link to="/about">
                     <a href="#" onClick={() => handleButtonClick('about')} className={`mr-4 ${activeButton === 'about' ? 'text-blue-500' : ''}`}>About</a>
                    </Link>
                   
                   <Link to="/signup">
                     <a href="#" onClick={() => handleButtonClick('signup')} className={`mr-4 ${activeButton === 'signup' ? 'text-blue-500' : ''}`}>Signup</a>
                    </Link>
                    <Link to="/signin">
                     <a href="#" onClick={() => handleButtonClick('signin')} className={`mr-4 ${activeButton === 'signin' ? 'text-blue-500' : ''}`}>Signin</a>
                    </Link>
                    <Link to="/projects">
                     <a href="#" onClick={() => handleButtonClick('projects')} className={`mr-4 ${activeButton === 'projects' ? 'text-blue-500' : ''}`}>Projects</a>
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="mr-4">
                        <input type="text" placeholder="Search" className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none" />
                    </div>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-md mr-4 focus:outline-none">Dark Theme</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
