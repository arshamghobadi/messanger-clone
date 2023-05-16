'use client';
import clsx from 'clsx';
import Link from 'next/link';

interface DesktopItemsProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}
const DesktopItems: React.FC<DesktopItemsProps> = ({
  label,
  icon,
  href,
  onClick,
  active,
}) => {
  if (onClick) {
    return onClick();
  }

  return (
    <li onClick={onClick}>
      <Link href={href}>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItems;
