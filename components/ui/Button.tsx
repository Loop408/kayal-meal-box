import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, href, onClick, variant = 'primary', className = '' }) => {
  const baseClasses = `px-6 py-2.5 rounded text-sm font-semibold transition-colors shadow-sm focus:outline-none`;
  const variantClasses = variant === 'primary'
    ? 'bg-primary text-secondary hover:bg-primary/90'
    : 'bg-secondary text-white hover:bg-secondary/90';

  const content = (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );

  if (href) {
    return (
      <Link href={href} legacyBehavior>
        <a className="inline-block">{content}</a>
      </Link>
    );
  }
  return content;
};
