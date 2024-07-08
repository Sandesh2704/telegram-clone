import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useData } from '../dataprovider/DataProvider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import { Box, TextField, IconButton, Paper, List, ListItem, ListItemText, Avatar, CardHeader } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  InputAdornment} from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';



const MoblieChatSection = () => {
  const { chatId } = useParams();
  const { messages, fetchMessages, setSelectedChatId } = useData();

  useEffect(() => {
    if (chatId) {
      setSelectedChatId(chatId);
      fetchMessages(chatId);
    }
  }, [chatId, fetchMessages, setSelectedChatId]);

  const [inputValue, setInputValue] = useState('');
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Paper sx={{ height: '100vh', display: 'flex', flexDirection: 'column', 
      }}>
      {/* Top Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{
          borderBottom: '1px solid #ddd',
          paddingY: 1,
          paddingX: { xs: 0.3, md: 1 },
        }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Link to="/">
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
            </Link>
           
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {messages[0]?.sender.name ? messages[0].sender.name.charAt(0).toUpperCase() : 'U'}
                </Avatar>
              }
              title={messages[0]?.sender.name || 'Unknown'}
              subheader={new Date(messages[0]?.created_at).toLocaleDateString()}
              sx={{
                paddingY: 0,
                paddingX: { xs: 0.3, md:1  },
              }}
            />
          </Box>
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
        sx={{
          flex: 1,
          overflowY: 'auto',
          backgroundColor: '#f5f5f5',
        }}
      >
        <List>
          {messages.map((message) => (
            <ListItem
              key={message.id}
              sx={{
                display: 'flex',
                justifyContent: message.sender_id === 1 ? 'flex-end' : 'flex-start',
                paddingX:   { xs: 1, md: 1, lg:2 },
                paddingY:   { xs: 0.5  },
              }}
            >
              <Box
                sx={{
                  maxWidth: '70%',
                  padding: 1,
                  borderRadius: 2,
                  backgroundColor: message.sender_id === 1 ? '#dcf8c6' : '#fff',
                  boxShadow: 1,
                }}
              >
                <ListItemText
                  primary={message.message}
                  secondary={new Date(message.created_at).toLocaleTimeString()}
                  sx={{ textAlign: message.sender_id === 1 ? 'right' : 'left' }}
                />
                <strong>{message.sender.name}</strong>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginY: 1,  paddingX:{md: 1, lg: 20} }}>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Message"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        InputProps={{
          style: {  borderRadius: '12px' },
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
          startAdornment :(
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
      <IconButton color="primary"  backgroundColor='blue'>
            <SendIcon />
          </IconButton>
    </Box>
    </Paper>
  );
};

export default MoblieChatSection;