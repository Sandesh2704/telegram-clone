import React, { useState, useEffect } from 'react';
import { useData } from '../dataprovider/DataProvider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import CallIcon from '@mui/icons-material/Call';
import { Box,  TextField, IconButton, Paper, List, ListItem, ListItemText, Avatar, CardHeader } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useMediaQuery } from '@mui/material';


export default function MessageSection() {
  const { messages, fetchMessages, selectedChatId } = useData();

  useEffect(() => {
    if (selectedChatId) {
      fetchMessages(selectedChatId);
    }
  }, [selectedChatId, fetchMessages]);


  const [inputValue, setInputValue] = useState('');
  const isMobile = useMediaQuery('(max-width:600px)');
  

  return(
    <>
    <Paper sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ borderBottom: '1px solid #ddd' }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              {messages[0]?.sender.name ? messages[0].sender.name.charAt(0).toUpperCase() : 'U'} 
            </Avatar>
          }
         
          //  title=  {messages.sender.name || 'tgbg'}
         subheader={new Date(messages[0]?.created_at).toLocaleDateString()}
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
        sx={{
          flex: 1,
          overflowY: 'auto',
          padding: isMobile ? 1 : 2,
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
                 <strong>
              {message.sender.name}
            </strong>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Section */}
      <Box sx={{ padding: 2, borderTop: '1px solid #ddd', display: 'flex' }}>
        <TextField
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message"
         
        />
        <IconButton color="primary" >
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
    </>
  )
}
