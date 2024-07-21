import Link from 'next/link';
import style from './menuButton.module.css';

export default function MenuButton({ active, icon, label, href }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
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
