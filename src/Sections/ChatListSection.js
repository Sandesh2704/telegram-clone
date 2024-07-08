import React, { useState } from 'react';
import { Paper, Box, IconButton, Popover, List, ListItemIcon, Switch, ListItem, ListItemText, Fab, Avatar, CardHeader, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import { styled } from '@mui/material/styles';
import { useData } from '../dataprovider/DataProvider';
import SavedMessagesIcon from '@mui/icons-material/Bookmark';
import ContactsIcon from '@mui/icons-material/Contacts';
import StoriesIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import NightModeIcon from '@mui/icons-material/Brightness2';
import AnimationsIcon from '@mui/icons-material/Animation';
import FeaturesIcon from '@mui/icons-material/Info';
import ReportBugIcon from '@mui/icons-material/ReportProblem';
import SwitchVersionIcon from '@mui/icons-material/SwapHorizontalCircle';




export default function ChatListSection() {

  const { chats, toggleTheme,   setSelectedChatId } = useData()

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

  const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
    marginRight: 20, // Example style, adjust as needed
    color: theme.palette.text.primary,
    minWidth: 0
  }));
  


  const StyleListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.primary,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 6,
    paddingRight: 10,
    borderRadius: 5,
'&:hover': {
    backgroundColor: '#f5f5f5',
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
     <Paper sx={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          paddingY: 1,
          paddingX :1.4 ,
          borderBottom: '1px solid #ddd',
          display: 'flex',
          alignItems: 'center',
          gap:0.7
        }}
      >
        <IconButton edge="start" sx={{
      marginX: 0.5
        }} onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Search>
            <SearchIconWrapper>
              <SearchIcon color='inherit'/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </Box>


        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          sx={{
            
            marginTop: 2,
            boxShadow: 0,
            paddingY: 0,
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <List
          sx={{
            minWidth: 300,
            paddingX: 0.3,

          }}
          >
            <StyleListItem >
              <StyledListItemIcon >
                <SavedMessagesIcon fontSize="small" color="primary" />
              </StyledListItemIcon>
              <ListItemText id="switch-list-label-wifi" primary="Saved Messages"  />
            </StyleListItem>
            <StyleListItem >
              <StyledListItemIcon >
                <ContactsIcon fontSize="small" color="primary" />
              </StyledListItemIcon>
              <ListItemText id="switch-list-label-wifi"  primary="Contacts"  />
            </StyleListItem>
            <StyleListItem >
              <StyledListItemIcon >
                <StoriesIcon fontSize="small" color="primary" />
              </StyledListItemIcon>
              <ListItemText id="switch-list-label-wifi" primary="My Stories"  />
            </StyleListItem>
            <StyleListItem >
              <StyledListItemIcon >
                <SettingsIcon fontSize="small" color="primary" />
              </StyledListItemIcon>
              <ListItemText id="switch-list-label-wifi"  primary="Settings"  />
            </StyleListItem>
            <StyleListItem >
              <StyledListItemIcon >
                <NightModeIcon fontSize="small" color="primary" />
              </StyledListItemIcon>
              <ListItemText id="switch-list-label-bluetooth" primary="Night Mode" />
              <Switch
                size="small"
                edge="end"
                onChange={toggleTheme}
              />
            </StyleListItem>
            <StyleListItem >
              <StyledListItemIcon >
                <AnimationsIcon  fontSize="small" color="primary" />
              </StyledListItemIcon>
              <ListItemText id="switch-list-label-bluetooth" primary="Animations" />
              <Switch
                size="small"
                edge="end"
              />
            </StyleListItem>
            <StyleListItem >
              <StyledListItemIcon >
                <FeaturesIcon fontSize="small" color="primary" />
              </StyledListItemIcon>
              <ListItemText id="switch-list-label-wifi" primary="Telegram Features" />
            </StyleListItem>
            <StyleListItem >
            <StyledListItemIcon>
              <ReportBugIcon ontSize="small"color="primary"  />
            </StyledListItemIcon>
            <ListItemText primary="Report a Bug" />
          </StyleListItem>
          <StyleListItem >
            <StyledListItemIcon>
              <SwitchVersionIcon ontSize="small" color="primary"  />
            </StyledListItemIcon>
            <ListItemText primary="Switch to K Version" />
          </StyleListItem>
          </List>
        </Popover>

  
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
        }}
      >
        {chats.map(chat => (
          <Box key={chat.id} onClick={() => setSelectedChatId(chat.id)}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                  {chat.creator.name ? chat.creator.name.charAt(0).toUpperCase() : 'U'}
                </Avatar>
              }
              title={chat.creator.name || 'Unknown'}
              subheader={new Date(chat.created_at).toLocaleDateString()}
            />
          </Box>
        ))}
      </Box>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
      >
        <ChatIcon />
      </Fab>
    </Paper>
      {/* <div>
        {chats.map(chat => (
          <div key={chat.id} onClick={() => setSelectedChatId(chat.id)}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={chat.creator.name || 'Unknown'}
              subheader="September 14, 2016"
            />
          </div>
        ))}
      </div> */}
    </>
  )
}
