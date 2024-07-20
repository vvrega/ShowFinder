'use client';

import { usePathname } from 'next/navigation';
import NavbarButton from '../navbarButton/NavbarButton';
import style from './navbar.module.css';

import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import EventIcon from '@mui/icons-material/Event';
import MovieIcon from '@mui/icons-material/Movie';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {
  const pathname = usePathname('');
  const userName = 'Guest';
  const balance = '50.00';

  return (
    <nav className={style.navbar}>
      <div className={style.accInfo}>
        <div className={style.userInfo}>
          <AccountCircleIcon style={{ fontSize: '60px', color: 'white' }} />
          <div className={style.userInfo2}>
            <p className={style.username}>{userName}</p>
          </div>
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
      <div className={style.navbarButtons}>
        <NavbarButton
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
        <NavbarButton
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
        <NavbarButton
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
        <NavbarButton
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
        <NavbarButton
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
        <NavbarButton
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
        <NavbarButton
          icon={<LogoutIcon style={{ fontSize: '32px' }} />}
          label="Logout"
          href="/"
          active={pathname === '/'}
        />
      </div>
    </nav>
  );
}
