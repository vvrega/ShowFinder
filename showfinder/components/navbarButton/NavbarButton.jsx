import Link from 'next/link';
import style from './navbarButton.module.css';

export default function NavbarButton({ active, icon, label, href }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div
        className={`${style.navbarButton} ${active ? style.activeButton : ''}`}
      >
        <div className={`${style.navbarIcon} ${active ? 'active' : ''}`}>
          {icon}
        </div>
        <p className={style.navbarParagraph}>{label}</p>
      </div>
    </Link>
  );
}
