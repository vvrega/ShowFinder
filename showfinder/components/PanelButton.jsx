import Link from 'next/link';

export default function PanelButton({ active, icon, label, href }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div className={`left-panel-button ${active ? 'active-button' : ''}`}>
        <div className={`left-panel-icon ${active ? 'active' : ''}`}>
          {icon}
        </div>
        <p className="left-panel-paragraph">{label}</p>
      </div>
    </Link>
  );
}
