import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rolesExpanded, setRolesExpanded] = useState(false);
  const [teamsExpanded, setTeamsExpanded] = useState(false);
  const [roles, setRoles] = useState({
    productDesigner: false,
    productManager: false,
    frontendDeveloper: false,
    backendDeveloper: false,
  });
  const [teams, setTeams] = useState({
    design: false,
    product: false,
    marketing: false,
    technology: false,
  });

  const toggleFilter = () => setIsOpen(!isOpen);
  const toggleRoles = () => setRolesExpanded(!rolesExpanded);
  const toggleTeams = () => setTeamsExpanded(!teamsExpanded);

  const handleRoleChange = (e) => {
    setRoles({ ...roles, [e.target.name]: e.target.checked });
  };

  const handleTeamChange = (e) => {
    setTeams({ ...teams, [e.target.name]: e.target.checked });
  };

  const applyFilters = () => {
    console.log("Roles:", roles);
    console.log("Teams:", teams);
    // Add your filtering logic here
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleFilter}
        className="p-2 bg-gray-100 rounded-md hover:bg-gray-200"
      >
        <span className="font-semibold">Filters</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 border border-gray-200">
          <div className="p-4">
            <h4 className="font-bold mb-2">Filters</h4>

            <div className="mb-4">
              <button
                onClick={toggleRoles}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="font-semibold">Roles</span>
                <ChevronDownIcon className="h-5 w-5" />
              </button>
              {rolesExpanded && (
                <div className="mt-2 space-y-2">
                  {Object.entries(roles).map(([key, value]) => (
                    <label key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        name={key}
                        checked={value}
                        onChange={handleRoleChange}
                        className="form-checkbox text-indigo-600"
                      />
                      <span className="ml-2 text-sm">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="mb-4">
              <button
                onClick={toggleTeams}
                className="flex justify-between items-center w-full text-left"
              >
                <span className="font-semibold">Teams</span>
                <ChevronDownIcon className="h-5 w-5" />
              </button>
              {teamsExpanded && (
                <div className="mt-2 space-y-2">
                  {Object.entries(teams).map(([key, value]) => (
                    <label key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        name={key}
                        checked={value}
                        onChange={handleTeamChange}
                        className="form-checkbox text-indigo-600"
                      />
                      <span className="ml-2 text-sm capitalize">{key}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={applyFilters}
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
            >
              SELECT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
