'use client';

import { useContext, useState } from 'react';
import style from './settings.module.css';
import { UserContext } from '@/context/UserProvider';
import { CollapseContext } from '@/context/CollapseProvider';

export default function Settings() {
  const { setUserName } = useContext(UserContext);
  const { collapse } = useContext(CollapseContext);
  const [newUsername, setNewUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(newUsername);
  };

  return (
    <div
      className={`${style.settingsPanel} ${collapse ? style.collapsed : ''}`}
    >
      <div className={style.settingsContainer}>
        <form className={style.formContainer} onSubmit={handleSubmit}>
          <label className={style.formLabel} htmlFor="newUsername">
            New Username: (max 8 characters)
          </label>
          <input
            className={style.formInput}
            type="text"
            id="newUsername"
            name="newUsername"
            placeholder="Enter new username"
            maxLength="8"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />

          <label className={style.formLabel} htmlFor="newPassword">
            New Password:
          </label>
          <input
            className={style.formInput}
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Temporarily disabled"
            disabled
          />

          <label className={style.formLabel} htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            className={style.formInput}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Temporarily disabled"
            disabled
          />

          <hr className={style.formHr} />

          <label className={style.formLabel} htmlFor="currentPassword">
            Current Password (required for changes):
          </label>
          <input
            className={style.formInput}
            type="password"
            id="currentPassword"
            name="currentPassword"
            placeholder="Temporarily disabled"
            disabled
          />

          <hr className={style.formHr} />
          <div className={style.inputButtons}>
            <button className={style.formSubmit} type="submit">
              Change Username
            </button>
            <button className={style.formSubmit} type="submit" disabled>
              Change Password
            </button>
            <button className={style.formSubmit} type="submit" disabled>
              Delete Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
