import React from 'react';

function PersonalDetails({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="personal-details-modal">
      <div className="personal-details-content">
        <button onClick={onClose} className="close-button">&times;</button>
        <div className="personal-details-header">
          <img src={member.photo} alt={`${member.name}`} className="member-photo-large" />
          <div className="member-info">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>@{member.name.toLowerCase().replace(' ', '')}</p>
          </div>
        </div>
        <div className="personal-details-body">
          <h3>Personal Information</h3>
          <ul className="personal-details-list">
            <li>
              <strong>Date of Birth:</strong> {member.dob}
            </li>
            <li>
              <strong>Gender:</strong> {member.gender}
            </li>
            <li>
              <strong>Nationality:</strong> {member.nationality}
            </li>
            <li>
              <strong>Contact no.:</strong> {member.contactNo}
            </li>
            <li>
              <strong>Email:</strong> {member.email}
            </li>
            <li>
              <strong>Work email Address:</strong> {member.email}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;

// Update CSS styles for .personal-details-modal and related classes as mentioned above.