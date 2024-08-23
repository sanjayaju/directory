import React, { useMemo, useState, useCallback } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import { PencilSquareIcon, TrashIcon, FunnelIcon } from '@heroicons/react/24/outline';
import PersonalDetails from './PersonalDetails'; // Import the PersonalDetails component
import EditModal from './EditModal'; // Import the EditModal component
import Filter from './Filter'; // Import the Filter component
import '../styles.css';
import img from '../assets/images/mypic.jpg';

const placeholderImage = 'https://example.com/placeholder.jpg';

const defaultData = [
  { id: 1, name: 'John Doe', age: 28, role: 'Frontend Developer', team: 'Design', photo: placeholderImage, email: 'johndoe@example.com' },
  { id: 2, name: 'Jane Smith', age: 34, role: 'Backend Developer', team: 'Product', photo: placeholderImage, email: 'janesmith@example.com' },
  // Add more sample data as needed
];

function PeopleDirectory() {
  const [data, setData] = useState(defaultData);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // State to control EditModal visibility
  const [filterVisible, setFilterVisible] = useState(false); // State to control Filter visibility

  const handleDelete = useCallback((id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }, []);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleCloseDetails = () => {
    setSelectedMember(null);
  };

  const handleEdit = (member) => {
    setSelectedMember(member);
    setIsEditing(true); // Show the EditModal
  };

  const handleCloseEditModal = () => {
    setIsEditing(false); // Hide the EditModal
  };

  const handleSaveEdit = (editedMember) => {
    setData((prevData) =>
      prevData.map((member) =>
        member.id === editedMember.id ? editedMember : member
      )
    );
    setIsEditing(false); // Close the modal after saving
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'photo',
        header: 'Photo',
        cell: ({ row }) => <img src={img} className="member-photo" alt="Member" />,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => (
          <span className="member-name" onClick={() => handleMemberClick(row.original)}>
            {row.original.name}
          </span>
        ),
      },
      {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ row }) => <span className="member-info member-email">{row.original.email}</span>,
      },
      {
        accessorKey: 'role',
        header: 'Role',
        cell: ({ row }) => <span className="member-info member-role">{row.original.role}</span>,
      },
      {
        accessorKey: 'team',
        header: 'Team',
        cell: ({ row }) => <span className="member-info member-team">{row.original.team}</span>,
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <div className="member-actions">
            <button className="member-action-button" onClick={() => handleEdit(row.original)}>
              <PencilSquareIcon className="icon-edit" />
            </button>
            <button
              className="member-action-button text-red-500 hover:bg-red-600 hover:text-white"
              onClick={() => handleDelete(row.original.id)}
            >
              <TrashIcon className="icon-delete" />
            </button>
          </div>
        ),
      },
    ],
    [handleDelete]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleAddPerson = () => {
    // Navigate to the add person page
  };

  const toggleFilterVisibility = () => {
    setFilterVisible((prev) => !prev);
  };

  return (
    <div className="people-directory">
      <div className="header">
        <div className="team-members-count">
          Team members <span className="user-count">{data.length} users</span>
        </div>
        <div className="header-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar search-input"
              onChange={(e) => table.setGlobalFilter(e.target.value)}
            />
            <button className="filter-button" onClick={toggleFilterVisibility}>
              <FunnelIcon className="icon-filter" />
            </button>
          </div>
          <button onClick={handleAddPerson} className="add-person-button">
            Add Member
          </button>
        </div>
      </div>
      {filterVisible && <Filter />} {/* Conditionally render Filter component */}
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">PHOTO</th>
            <th className="table-header">NAME</th>
            <th className="table-header">EMAIL</th>
            <th className="table-header">ROLE</th>
            <th className="table-header">TEAM</th>
            <th className="table-header">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="table-row">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="table-cell">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {selectedMember && !isEditing && (
        <PersonalDetails member={selectedMember} onClose={handleCloseDetails} />
      )}

      {selectedMember && isEditing && (
        <EditModal member={selectedMember} onClose={handleCloseEditModal} onSave={handleSaveEdit} />
      )}
    </div>
  );
}

export default PeopleDirectory;
