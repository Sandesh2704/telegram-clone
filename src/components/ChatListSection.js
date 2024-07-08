import React, { useState } from 'react';
import { Paper, Box, Fab, Avatar, CardHeader, Tab, Tabs, } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import { useData } from '../dataprovider/DataProvider';
import { Link } from 'react-router-dom';
import ChatHeader from './ChatHeader';

export default function ChatListSection() {

  const { chats, mode, setSelectedChatId } = useData()
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper sx={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <ChatHeader />
        <Tabs value={value} onChange={handleChange} aria-label="chat tabs">
          <Tab label="Mobile View" />
          <Tab label="Desktop View" />
        </Tabs>
        {/* for moblie */}
        <Box
          sx={{
            display: { xs: 'block', sm: 'none' },
            overflowY: 'auto',
            paddingX: 1,
          }}
        >
          {chats.map(chat => (
            <Link to={`/chat/${chat.id}`} key={chat.id} style={{ textDecoration: 'none' }} >
              <Box key={chat.id} sx={{
                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: '#039be5',
                  color: 'white'
                }
              }}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      {chat.creator.name ? chat.creator.name.charAt(0).toUpperCase() : 'U'}
                    </Avatar>
                  }
                  title={chat.creator.name || 'Unknown'}
                  titleTypographyProps={{
                    fontSize: "1rem",
                    color: `${mode === 'dark' ? 'white' : 'black'}`
                  }}
                />
              </Box>
            </Link>
          ))}
        </Box>

        {/* for dexstop */}
        <Box
          sx={{
            display: { xs: 'none', sm: 'block' },
            overflowY: 'auto',
            paddingX: 1
          }}
        >
          {chats.map(chat => (
            <Box key={chat.id}
              sx={{
                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: '#039be5',
                  color: 'white'
                }
              }}
              onClick={() => setSelectedChatId(chat.id)} >
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe">
                    {chat.creator.name ? chat.creator.name.charAt(0).toUpperCase() : 'U'}
                  </Avatar>
                }
                title={chat.creator.name || 'Unknown'}
                titleTypographyProps={{ fontSize: "1rem", color: `${mode === 'dark' ? 'white' : 'black'}` }}
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

    </>
  )
}

