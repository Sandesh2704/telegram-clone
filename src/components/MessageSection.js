import React, { useState, useEffect, useRef } from 'react';
import { useData } from '../dataprovider/DataProvider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import { Box, TextField, IconButton, Paper, List, ListItem, Avatar, CardHeader,  } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { InputAdornment } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic'
import { Typography } from '@mui/material';

export default function MessageSection() {
  const { messages, fetchMessages, selectedChatId, mode } = useData();
  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (selectedChatId) {
      fetchMessages(selectedChatId);
    }
  }, [selectedChatId, fetchMessages]);

  const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const isNewDay = (currentMessage, previousMessage) => {
    const currentDate = new Date(currentMessage.created_at);
    const previousDate = new Date(previousMessage.created_at);
    return currentDate.toDateString() !== previousDate.toDateString();
  };

  return (
    <>
      <Paper sx={{ height: '100vh', display: 'flex', flexDirection: 'column', }}>
        {/* Top Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{
          borderBottom: `${mode === 'dark' ? '' : '1px solid #ddd'}`,
          paddingY: 1,
          paddingX: 1,
          backgroundColor: `${mode === 'dark' ? '#1C1C1C ' : 'white'}`,
        }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                {messages[0]?.sender.name ? messages[0].sender.name.charAt(0).toUpperCase() : 'U'}
              </Avatar>
            }
            title={messages[0]?.sender.name || 'Unknown'}
            titleTypographyProps={{
              fontSize : 20
            }}
            // subheader={new Date(messages[0]?.created_at).toLocaleDateString()}
            sx={{
              paddingY: 0,
              paddingX: 1
            }}
          />
          <Box>
            <IconButton>
              <CallIcon />
            </IconButton>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Middle Section */}

        <Box
          ref={chatContainerRef}
          sx={{
            flex: 1,
            overflowY: 'auto',
            overflowX: "hidden",
            backgroundColor: `${mode === 'dark' ? 'black' : '#F7FFD8'}`,
            paddingX: { md: 1, lg: 20 },
            display: 'flex',
            flexDirection: 'column-reverse',
            position: 'relative',
          }}
        >
          <List>
            {messages.slice().reverse().map((message, index) => (
              <React.Fragment key={message.id}>
                {(index === 0 || isNewDay(message, messages[messages.length - index])) && (
                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      padding: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        backgroundColor:`${mode === 'dark' ? '#0A0158 ' :'#E3E0FF '}`,
                        padding: '2px 10px',
                        borderRadius: '10px',
                        fontSize: '0.75rem',
                        marginBottom: '10px',
                      }}
                    >
                      {formatDate(message.created_at)}
                    </Typography>
                  </ListItem>
                )}
                <ListItem
                  sx={{
                    display: 'flex',
                    justifyContent: message.sender_id === 1 ? 'flex-end' : 'flex-start',
                    paddingX: { xs: 1, md: 1, lg: 2 },
                    paddingY: { xs: 0.5 },
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: '70%',
                      padding: 1,
                      borderRadius: 2,
                      backgroundColor: message.sender_id === 1 ? `${mode === 'dark' ? '#0277bd' : '#B9FFF1'}` : `${mode === 'dark' ? '#1C1C1C' : 'white'}`,
                      boxShadow: 1,
                      display: 'flex',
                      alignItems: 'end',
                    }}
                  >
                    <Typography sx={{ marginRight: 3 }}>{message.message}</Typography>
                    <Typography sx={{ fontSize: '0.70rem' }}>
                      {new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Typography>
                  </Box>
                </ListItem>
              </React.Fragment>
            ))}
            <div ref={chatEndRef} />

          </List>

        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginY: 1, paddingX: { md: 1, lg: 20 }, }}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            InputProps={{
              style: { borderRadius: '12px' },
              sx: {
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent',
                  },
                },
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <AttachFileIcon sx={{ color: '#a4a4a4' }} />
                  </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <EmojiEmotionsIcon sx={{ color: '#a4a4a4' }} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            sx={{ mx: 1, borderRadius: '12px' }}
          />
          <IconButton >
            <MicIcon sx={{ color: '#a4a4a4' }} />
          </IconButton>
          <IconButton color="primary" >
            <SendIcon />
          </IconButton>
        </Box>

      </Paper>
    </>
  )
}
