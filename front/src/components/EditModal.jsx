import React, { useState } from 'react';

function EditModal({ member, onClose, onSave }) {
  const [editedMember, setEditedMember] = useState({ ...member });

  const handleChange = (e) => {
    setEditedMember({ ...editedMember, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(editedMember);
    onClose();
  };

  return (
    <div className="edit-modal">
      <div className="edit-modal-content">
        <button onClick={onClose} className="close-button">&times;</button>
        <h2>Edit Member</h2>
        <form onSubmit={handleSubmit}>
          <div className="edit-modal-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={editedMember.name} onChange={handleChange} />
          </div>
          <div className="edit-modal-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={editedMember.email} onChange={handleChange} />
          </div>
          <div className="edit-modal-field">
            <label htmlFor="role">Role:</label>
            <input type="text" id="role" name="role" value={editedMember.role} onChange={handleChange} />
          </div>
          <div className="edit-modal-field">
            <label htmlFor="team">Team:</label>
            <select id="team" name="team" value={editedMember.team} onChange={handleChange}>
              {/* Add options for available teams */}
              <option value="Design">Design</option>
              <option value="Product">Product</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          <div className="edit-modal-field">
            <label htmlFor="status">Status:</label>
            <select id="status" name="status" value={editedMember.status} onChange={handleChange}>
              {/* Add options for available statuses */}
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="edit-modal-buttons">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;