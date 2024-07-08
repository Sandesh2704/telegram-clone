import React, { useState } from 'react';
import {  Box, IconButton, InputBase, } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MobileMenu from './MobileMenu';
import DexStopMenu from './DexStopMenu';

export default function ChatHeader() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 30,
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f5f5',
    marginLeft: 0,
    width: '100%',
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(5)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }));



  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'menu-popover' : undefined;

  return (
    <>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          paddingY: 1,
          paddingX: 1.4,
          display: 'flex',
          alignItems: 'center',
          gap: 0.7
        }}
      >
        <IconButton edge="start" sx={{
          marginX: 0.5
        }} onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon color='inherit' />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Box>

      <Box  >
        <DexStopMenu  id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose} />
      </Box>
      <Box >
        <MobileMenu  id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose} />
      </Box>

    </>
  )
}
