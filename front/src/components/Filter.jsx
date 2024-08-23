import React, { useState } from "react";

const Filter = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    setIsDropdownOpen(false);  // Close the dropdown after applying filters
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button 
        className="bg-indigo-600 text-white py-2 px-4 rounded-lg"
        onClick={toggleDropdown}
      >
        Filters
      </button>
      {isDropdownOpen && (
        <div className="filter-dropdown">
          <h4 className="font-bold mb-2">Filters</h4>

          <div className="filter-category">
            <h5 className="font-semibold">Roles</h5>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="productDesigner"
                  className="form-checkbox text-indigo-600"
                  checked={roles.productDesigner}
                  onChange={handleRoleChange}
                />
                <span className="ml-2">Product Designer</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="productManager"
                  className="form-checkbox text-indigo-600"
                  checked={roles.productManager}
                  onChange={handleRoleChange}
                />
                <span className="ml-2">Product Manager</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="frontendDeveloper"
                  className="form-checkbox text-indigo-600"
                  checked={roles.frontendDeveloper}
                  onChange={handleRoleChange}
                />
                <span className="ml-2">Frontend Developer</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="backendDeveloper"
                  className="form-checkbox text-indigo-600"
                  checked={roles.backendDeveloper}
                  onChange={handleRoleChange}
                />
                <span className="ml-2">Backend Developer</span>
              </label>
            </div>
          </div>

          <div className="filter-category">
            <h5 className="font-semibold">Teams</h5>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="design"
                  className="form-checkbox text-indigo-600"
                  checked={teams.design}
                  onChange={handleTeamChange}
                />
                <span className="ml-2">Design</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="product"
                  className="form-checkbox text-indigo-600"
                  checked={teams.product}
                  onChange={handleTeamChange}
                />
                <span className="ml-2">Product</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="marketing"
                  className="form-checkbox text-indigo-600"
                  checked={teams.marketing}
                  onChange={handleTeamChange}
                />
                <span className="ml-2">Marketing</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="technology"
                  className="form-checkbox text-indigo-600"
                  checked={teams.technology}
                  onChange={handleTeamChange}
                />
                <span className="ml-2">Technology</span>
              </label>
            </div>
          </div>

          <button
            className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4"
            onClick={applyFilters}
          >
            SELECT
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;