import React, { useState } from 'react';
import { Paper, Box, IconButton, Popover, List, ListItemIcon, Switch, ListItem, ListItemText, Fab, Avatar, CardHeader, InputBase } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import { useData } from '../dataprovider/DataProvider';

import { Link } from 'react-router-dom';
import ChatHeader from './ChatHeader';




export default function ChatListSection() {

  const { chats, setSelectedChatId  } = useData()

  return (
    <>
     <Paper sx={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <ChatHeader/>


      <Box
        sx={{
          display : {xs:'block', sm:'none'},
          overflowY: 'auto',
        }}
      >
        {chats.map(chat => (
          <Box key={chat.id}  >
            <Link to={`/chat/${chat.id}`}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                  {chat.creator.name ? chat.creator.name.charAt(0).toUpperCase() : 'U'}
                </Avatar>
              }
              title={chat.creator.name || 'Unknown'}
              subheader={new Date(chat.created_at).toLocaleDateString()}
            />
            </Link>
          </Box>
        ))}
      </Box>


      <Box
        sx={{
          display : {xs:'none', sm:'block'},
          overflowY: 'auto',
        }}
      >
        {chats.map(chat => (
          <Box key={chat.id} onClick={() => setSelectedChatId(chat.id)} >
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
