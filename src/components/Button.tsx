import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

interface ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  fullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  onClick,
  children,
}) => {
  return (
    <MuiButton variant={variant} color={color} fullWidth={fullWidth} onClick={onClick}>
      {children}
    </MuiButton>
  );
};

export default Button;