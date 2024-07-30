'use client';

import { useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { CollapseContext } from '@/context/CollapseProvider';
import { UserContext } from '@/context/UserProvider';
import MenuButton from '../menuButton/MenuButton';
import style from './menu.module.css';

import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import EventIcon from '@mui/icons-material/Event';
import MovieIcon from '@mui/icons-material/Movie';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

export default function Menu() {
  const { userName } = useContext(UserContext);
  const { collapse, setCollapse } = useContext(CollapseContext);

  const pathname = usePathname('');
  const balance = '50.00';

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Check if window is defined
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className={style.menuContainer}>
      <div className={`${style.menu} ${collapse ? style.collapsed : ''}`}>
        <div className={style.topGroup}>
          <button onClick={toggleCollapse} className={style.collapseButton}>
            {collapse ? (
              <OpenInFullIcon
                style={{
                  fontSize: '30px',
                  color: '#cecece',
                }}
              />
            ) : (
              <CloseFullscreenIcon
                style={{
                  fontSize: '30px',
                  color: '#cecece',
                }}
              />
            )}
          </button>
          <div className={style.accInfo}>
            <div className={style.userInfo}>
              <AccountCircleIcon
                style={{ fontSize: '60px', color: 'white', marginLeft: '10px' }}
              />
              <p className={style.username}>{userName}</p>
            </div>
            <div className={style.balance}>
              <div>
                <p className={style.balanceParagraph}>Balance</p>
                <div className={style.balanceIcon}>
                  <AccountBalanceWalletIcon
                    style={{ marginRight: '6px', fontSize: '30px' }}
                  />
                  <p>${balance}</p>
                </div>
              </div>
              <div className={style.balanceAddButton}>
                <button className={style.addBalance}>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.MenuButtons}>
          <MenuButton
            icon={
              <HomeIcon
                style={{ fontSize: '32px' }}
                className={pathname === '/dashboard' ? style.active : ''}
              />
            }
            label="Home"
            href="/dashboard"
            active={pathname === '/dashboard'}
          />
          <MenuButton
            icon={
              <FavoriteIcon
                style={{ fontSize: '32px' }}
                className={pathname === '/favorite' ? style.active : ''}
              />
            }
            label="Favorite"
            href="/favorite"
            active={pathname === '/favorite'}
          />
          <MenuButton
            icon={
              <WatchLaterIcon
                style={{ fontSize: '32px' }}
                className={pathname === '/saved-for-later' ? style.active : ''}
              />
            }
            label="Saved for later"
            href=""
            active={pathname === '/saved-for-later'}
          />
          <MenuButton
            icon={
              <MovieIcon
                style={{ fontSize: '32px' }}
                className={pathname === '/bonuses' ? style.active : ''}
              />
            }
            label="Bonuses"
            href=""
            active={pathname === '/bonuses'}
          />
          <MenuButton
            icon={
              <EventIcon
                style={{ fontSize: '32px' }}
                className={pathname === '/reminder' ? style.active : ''}
              />
            }
            label="Reminder"
            href=""
            active={pathname === '/reminder'}
          />
        </div>

        <div className={style.bottomButtons}>
          <MenuButton
            icon={
              <SettingsIcon
                style={{ fontSize: '32px' }}
                className={pathname === '/settings' ? style.active : ''}
              />
            }
            label="Settings"
            href="/settings"
            active={pathname === '/settings'}
          />
          <MenuButton
            icon={<LogoutIcon style={{ fontSize: '32px' }} />}
            label="Logout"
            href="/"
            active={pathname === '/'}
          />
        </div>
      </div>

      <div
        className={!collapse && windowWidth <= 530 ? style.backdrop : ''}
      ></div>
    </div>
  );
}
