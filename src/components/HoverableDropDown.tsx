'use client'

import React, { useState, ReactNode } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';

interface HoverableDropdownProps {
  buttonLabel: string | ReactNode; 
  menuItems: ReactNode; 
}

const HoverableDropdown: React.FC<HoverableDropdownProps> = ({ buttonLabel, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      {/* Trigger Button */}
      <Button
        onMouseEnter={handleMouseEnter}
        aria-controls={open ? 'hover-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        {buttonLabel}
      </Button>

      {/* Dropdown Menu */}
      <Menu
        id="hover-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMouseLeave}
        MenuListProps={{
          onMouseLeave: handleMouseLeave,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {menuItems}
      </Menu>
    </div>
  );
};

export default HoverableDropdown;

