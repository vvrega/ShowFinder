import Link from 'next/link';
import style from './menuButton.module.css';
import { CollapseContext } from '@/context/CollapseProvider';
import { useContext } from 'react';

export default function MenuButton({ active, icon, label, href }) {
  const { collapse } = useContext(CollapseContext);

  return (
    <Link
      href={href}
      style={{ textDecoration: 'none' }}
      className={collapse ? style.collapsed : ''}
    >
      <div
        className={`${style.menuButton} ${active ? style.activeButton : ''}`}
      >
        <div className={`${style.menuIcon} ${active ? 'active' : ''}`}>
          {icon}
        </div>
        <p className={style.menuParagraph}>{label}</p>
      </div>
    </Link>
  );
}
