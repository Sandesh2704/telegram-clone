import React, { useState } from 'react';
import { Paper, Box, IconButton, Popover, Drawer, List, ListItemIcon,Typography, Switch, ListItem, ListItemText, Fab, Avatar, CardHeader, InputBase,  SwipeableDrawer  } from '@mui/material';
import { styled } from '@mui/material/styles';
import SettingsIcon from '@mui/icons-material/Settings';
import { useData } from '../dataprovider/DataProvider';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InfoIcon from '@mui/icons-material/Info';
import chat from './chat.png'


export default function MobileMenu({id, open, anchorEl,handleClose}) {
    const { toggleTheme,  mode } = useData()
    
      const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
        marginRight: 24, // Example style, adjust as needed
        minWidth: 0
      }));
      

      const StyleListItem = styled(ListItem)(({ theme }) => ({
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 15,
        borderRadius: 5,
    '&:hover': {
        backgroundColor: '#f5f5f5',
      },
      }));
  return (
    <div>
         <Drawer anchor="left"  id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          transitionDuration={{ enter: 500, exit: 500 }}>
                <List  sx={{minWidth: 270,
                paddingTop:0
            }}>
                <Box sx={{ backgroundColor: '#039be5'}}>
                <CardHeader
        avatar={
            <Avatar alt="Remy Sharp" src={chat} sx={{ width: 56, height: 56 }} />
        }
        action={
            <IconButton  onClick={toggleTheme}>
            {mode ==='dark' ? <DarkModeIcon color='#ffff'/> : <LightModeIcon color='#ffff'/>}
        </IconButton>
        }
      />
          <Typography variant="body1" sx={{ paddingY: 1, marginTop:1,
        paddingX: 2,}}>
        Beyond Chat
      </Typography>
                </Box>
        
      <Box sx={{ borderBottom: "1px solid black", marginY: 0.4, paddingBottom:0.2}}>
      <StyleListItem onClick={handleClose}>
                        <StyledListItemIcon >
                            <AccountCircleIcon fontSize="small"/>
                        </StyledListItemIcon>
                        <ListItemText primary="My Profile" />
                    </StyleListItem>
                
      </Box>
      <Box sx={{ borderBottom: "1px solid black", marginY: 1, paddingBottom:1}}>
                    <StyleListItem>
                        <StyledListItemIcon onClick={handleClose}>
                            <GroupIcon fontSize="small"/>
                        </StyledListItemIcon>
                        <ListItemText primary="New Group" />
                    </StyleListItem>
                    <StyleListItem onClick={handleClose}>
                        <StyledListItemIcon >
                            <ContactPhoneIcon fontSize="small"/>
                        </StyledListItemIcon>
                        <ListItemText primary="Contacts" />
                    </StyleListItem>
                    < StyleListItem onClick={handleClose}>
                        <StyledListItemIcon>
                            <CallIcon fontSize="small"/>
                        </StyledListItemIcon>
                        <ListItemText primary="Calls" />
                    </ StyleListItem>
                    <StyleListItem onClick={handleClose}>
                        <StyledListItemIcon>
                            <LocationOnIcon fontSize="small"/>
                        </StyledListItemIcon>
                        <ListItemText primary="People Nearby" />
                    </StyleListItem>
                    <StyleListItem onClick={handleClose}>
                        <StyledListItemIcon>
                            <BookmarkIcon fontSize="small"/>
                        </StyledListItemIcon>
                        <ListItemText primary="Saved Messages" />
                    </ StyleListItem>
                    <StyleListItem onClick={handleClose}>
                        <StyledListItemIcon>
                            <SettingsIcon fontSize="small"/>
                        </StyledListItemIcon>
                        <ListItemText primary="Settings" />
                    </StyleListItem>
                    </Box>
                    <StyleListItem onClick={handleClose}>
                        <StyledListItemIcon>
                            <PersonAddIcon fontSize="small"/>
                        </StyledListItemIcon>
                        <ListItemText primary="Invite Friends" />
                    </ StyleListItem>
                    <StyleListItem  onClick={handleClose}>
                        <StyledListItemIcon >
                            <InfoIcon fontSize="small"/>
                        </StyledListItemIcon>
                        <ListItemText primary="Telegram Features" />
                    </StyleListItem>
                </List>
            </Drawer>
    </div>
  )
}
