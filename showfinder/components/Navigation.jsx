'use client';
import { useState } from 'react';
import Link from 'next/link';
import { fetchData, dataReady } from '../api/api';
import '@/styles/shows.css';

import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';

export default function Navigation() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    const showsContainer = document.querySelector('.tv-series-panel');

    try {
      const data = await fetchData(searchTerm);
      showsContainer.innerHTML = dataReady(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="navigation">
      <div className="logo-area">ShowFinder</div>
      <input
        type="text"
        id="search-input"
        placeholder="Type to Search..."
        style={{ fontFamily: 'Arial, FontAwesome' }}
        value={searchTerm}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <div className="notifications">
        <div className="icons">
          <div className="nav-icon">
            <EmailIcon
              style={{
                fontSize: '50px',
                color: '#8a8a8a',
                border: '2px solid white',
                borderRadius: '100%',
                padding: '6px',
                marginTop: '5px',
              }}
            />
          </div>
          <div className="nav-icon">
            <Link href={'notifications'} style={{ textDecoration: 'none' }}>
              <NotificationsIcon
                style={{
                  fontSize: '50px',
                  color: '#8a8a8a',
                  border: '2px solid white',
                  borderRadius: '100%',
                  padding: '5px',
                  marginTop: '5px',
                }}
              />
            </Link>
            <div className="num-notifications">5</div>
          </div>
        </div>
      </div>
    </div>
  );
}
