import React from 'react';

// Define the types for the component's props
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive, onClick }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className={`relative py-2 text-white/80 hover:text-white transition-colors duration-300
                  ${isActive ? 'font-semibold text-white' : ''}`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-brand-orange rounded-full" />
      )}
    </a>
  </li>
);

export default NavLink;