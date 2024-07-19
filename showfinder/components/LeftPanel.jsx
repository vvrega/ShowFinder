'use client';

import { usePathname } from 'next/navigation';
import PanelButton from './PanelButton';
import '@/styles/shows.css';

import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import EventIcon from '@mui/icons-material/Event';
import MovieIcon from '@mui/icons-material/Movie';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function LeftPanel() {
  const pathname = usePathname();
  const userName = 'Guest';
  const balance = '50.00';

  return (
    <div className="left-panel">
      <div className="logged">
        <div className="acc-info-bg">
          <div className="acc-info">
            <div className="user-info">
              <AccountCircleIcon style={{ fontSize: '60px', color: 'white' }} />
              <div className="user-info2">
                <p className="user-name">{userName}</p>
                {/* <p className="phone-number">+48 123 456 789</p> */}
              </div>
            </div>
            <div className="balance">
              <div className="balance-value">
                <div className="balance-p">
                  <p className="balance-paragraph">Balance</p>
                </div>
                <div className="balance-icon">
                  <AccountBalanceWalletIcon
                    style={{ marginRight: '6px', fontSize: '30px' }}
                  />
                  <p>${balance}</p>
                </div>
              </div>
              <div className="balance-add-button">
                <button className="add-balance">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="left-panel-buttons">
          <PanelButton
            icon={<HomeIcon style={{ fontSize: '32px' }} />}
            label="Home"
            href="/dashboard"
            active={pathname === '/dashboard'}
          />
          <PanelButton
            icon={<FavoriteIcon style={{ fontSize: '32px' }} />}
            label="Favorite"
            href="/favorite"
            active={pathname === '/favorite'}
          />
          <PanelButton
            icon={<WatchLaterIcon style={{ fontSize: '32px' }} />}
            label="Saved for later"
            href=""
            active={pathname === '/saved-for-later'}
          />
          <PanelButton
            icon={<MovieIcon style={{ fontSize: '32px' }} />}
            label="Bonuses"
            href=""
            active={pathname === '/bonuses'}
          />
          <PanelButton
            icon={<EventIcon style={{ fontSize: '32px' }} />}
            label="Reminder"
            href=""
            active={pathname === '/reminder'}
          />
        </div>

        <div className="left-panel-bottom-buttons">
          <PanelButton
            icon={<SettingsIcon style={{ fontSize: '32px' }} />}
            label="Settings"
            href="/settings"
            active={pathname === '/settings'}
          />
          <PanelButton
            icon={<LogoutIcon style={{ fontSize: '32px' }} />}
            label="Logout"
            href="/login"
            active={pathname === '/logout'}
          />
        </div>
      </div>
    </div>
  );
}
