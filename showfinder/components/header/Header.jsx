'use client';
import { useSearch } from '../../context/SearchProvider';
import Link from 'next/link';
import style from './header.module.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';

export default function Header() {
  const { searchTerm, setSearchTerm, handleSearch } = useSearch();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchTerm.length !== 0) {
      handleSearch(searchTerm);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={style.header}>
      <Link href="dashboard" className={style.logo}>
        showFINDER
      </Link>
      <input
        className={style.searchInput}
        type="text"
        placeholder="Type to Search..."
        style={{ fontFamily: 'Arial, FontAwesome' }}
        value={searchTerm}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <div className={style.notifications}>
        <div className={style.icons}>
          <div className={style.headerIcon}>
            <EmailIcon
              style={{
                fontSize: '50px',
                color: '#8a8a8a',
                padding: '6px',
                marginTop: '5px',
              }}
            />
          </div>
          <div className={style.headerIcon}>
            <Link href={'notifications'} style={{ textDecoration: 'none' }}>
              <NotificationsIcon
                style={{
                  fontSize: '50px',
                  color: '#8a8a8a',
                  padding: '5px',
                  marginTop: '5px',
                }}
              />
            </Link>
            <div className={style.numNotifications}>5</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import style from './header.module.css';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import EmailIcon from '@mui/icons-material/Email';

// export default function Header({ searchTerm, setSearchTerm, handleSearch }) {
//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch(searchTerm);
//     }
//   };

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div className={style.header}>
//       <Link href="dashboard" className={style.logo}>
//         ShowFinder
//       </Link>
//       <input
//         className={style.searchInput}
//         type="text"
//         placeholder="Type to Search..."
//         style={{ fontFamily: 'Arial, FontAwesome' }}
//         value={searchTerm}
//         onKeyDown={handleKeyDown}
//         onChange={handleChange}
//       />
//       <div className={style.notifications}>
//         <div className={style.icons}>
//           <div className={style.navIcon}>
//             <EmailIcon
//               style={{
//                 fontSize: '50px',
//                 color: '#8a8a8a',
//                 padding: '6px',
//                 marginTop: '5px',
//               }}
//             />
//           </div>
//           <div className={style.navIcon}>
//             <Link href={'notifications'} style={{ textDecoration: 'none' }}>
//               <NotificationsIcon
//                 style={{
//                   fontSize: '50px',
//                   color: '#8a8a8a',
//                   padding: '5px',
//                   marginTop: '5px',
//                 }}
//               />
//             </Link>
//             <div className={style.numNotifications}>5</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
