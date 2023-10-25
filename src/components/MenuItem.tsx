import React from 'react';
import { MenuItem as MuiMenuItem } from '@material-ui/core';

interface MenuItemProps {
  value: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ value }) => {
  return <MuiMenuItem value={value}>{value}</MuiMenuItem>;
};

export default MenuItem;