'use client';

import { useState } from 'react';
import '../styles/shows.css';

export default function SettingsForm() {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = e.target;

    if (name === 'changeUsername') {
      // Handle username change
      console.log('Change Username to:', newUsername);
    } else if (name === 'changePassword') {
      if (newPassword === confirmPassword) {
        // Handle password change
        console.log('Change Password to:', newPassword);
      } else {
        console.error('Passwords do not match');
      }
    } else if (name === 'deleteAccount') {
      // Handle account deletion
      console.log('Delete Account');
    }
  };

  return (
    <div className="content-panel">
      <div className="tv-series-panel">
        <div className="settings-panel">
          <form className="form-container" onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="newUsername">
              New Username:
            </label>
            <input
              className="form-input"
              type="text"
              id="newUsername"
              name="newUsername"
              placeholder="Enter new username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />

            <label className="form-label" htmlFor="newPassword">
              New Password:
            </label>
            <input
              className="form-input"
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              className="form-input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <hr className="form-hr" />

            <label className="form-label" htmlFor="currentPassword">
              Current Password (required for changes):
            </label>
            <input
              className="form-input"
              type="password"
              id="currentPassword"
              name="currentPassword"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />

            <hr className="form-hr" />
            <div className="input-buttons">
              <button
                className="form-submit"
                type="submit"
                name="changeUsername"
              >
                Change Username
              </button>
              <button
                className="form-submit"
                type="submit"
                name="changePassword"
              >
                Change Password
              </button>
              <button
                className="form-submit"
                type="submit"
                name="deleteAccount"
              >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
