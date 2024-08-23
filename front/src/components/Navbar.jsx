import React from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import img from '../assets/images/mypic.jpg'

const Header = ({ adminName }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex items-center">
      <div className="container mx-auto w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">PEOPLE.CO</h1>
          <div className="flex items-center space-x-4">
            <BellIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
            <img src={img} className="w-8 h-8 bg-gray-300 rounded-full"/>
            <span className="text-gray-700 font-medium">{adminName}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
