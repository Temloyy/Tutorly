import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'default' | 'large';
  isLoading?: boolean;
}

export function Button({
  className = '',
  variant = 'primary',
  size = 'default',
  isLoading,
  children,
  ...props
}: ButtonProps) {
  const baseClass = 'btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-text';
  const sizeClass = size === 'large' ? 'btn-large' : '';
  const loadingClass = isLoading ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button 
      className={`${baseClass} ${variantClass} ${sizeClass} ${loadingClass} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
