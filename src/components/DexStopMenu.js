import React  from 'react';
import { IconButton, Popover, List, ListItemIcon, Switch, ListItem, ListItemText,   } from '@mui/material';
import { styled } from '@mui/material/styles';
import SavedMessagesIcon from '@mui/icons-material/Bookmark';
import ContactsIcon from '@mui/icons-material/Contacts';
import StoriesIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import NightModeIcon from '@mui/icons-material/Brightness2';
import AnimationsIcon from '@mui/icons-material/Animation';
import FeaturesIcon from '@mui/icons-material/Info';
import ReportBugIcon from '@mui/icons-material/ReportProblem';
import SwitchVersionIcon from '@mui/icons-material/SwapHorizontalCircle';
import { useData } from '../dataprovider/DataProvider';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';



export default function DexStopMenu({id, open, anchorEl, handleClose}) {

    const { toggleTheme,  mode } = useData()
   
    
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
      backgroundColor: `${mode === 'dark' ?  'black' :'#C9FDFF ' }`
      },
      }));
  return (
    <div>
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
            display: { xs: 'none', sm: 'block' },
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
            <StyleListItem onClick={handleClose}>
              <StyledListItemIcon >
                <SavedMessagesIcon  fontSize='small' color="primary" />
              </StyledListItemIcon>
              <ListItemText id="switch-list-label-wifi" primary="Saved Messages"  />
            </StyleListItem>
            <StyleListItem onClick={handleClose}>
              <StyledListItemIcon >
                <ContactsIcon fontSize="small" color="primary" />
              </StyledListItemIcon>
              <ListItemText id="switch-list-label-wifi"  primary="Contacts"  />
            </StyleListItem>
            <StyleListItem onClick={handleClose}>
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
              <ListItemText id="switch-list-label-bluetooth" primary={mode === 'dark' ?  "Day Mode" : "Night Mode"} />
              <IconButton onClick={toggleTheme}>
                                    {mode === 'dark' ? <LightModeIcon color='#ffff' /> :<DarkModeIcon color='#ffff' />}
                                </IconButton>
              {/* <Switch
                size="small"
                edge="end"
                onChange={toggleTheme}
              /> */}
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
    </div>
  )
}
