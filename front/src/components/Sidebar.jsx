import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, UsersIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <nav className="bg-gray-100 w-64 h-screen p-4">
      <ul className="space-y-2">
        <li>
          <Link to="/" className="flex items-center space-x-2 font-medium text-gray-700 hover:text-purple-600">
            <HomeIcon className="h-5 w-5 text-gray-500" />
            <span>Overview</span>
          </Link>
        </li>
        <li>
          <Link to="/people" className="flex items-center space-x-2 font-medium text-gray-700 hover:text-purple-600">
            <UsersIcon className="h-5 w-5 text-gray-500" />
            <span>People Directory</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
