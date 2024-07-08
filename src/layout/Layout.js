import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ChatListSection from '../components/ChatListSection';
import MessageSection from '../components/MessageSection';


export default function Layout() {
  return (
    <>
         <Box >
         <Grid container spacing={0}  >
          <Grid item xs={12} sm={4} md={3}  >
            <div> <ChatListSection/>  </div>
          </Grid>
          <Grid item xs={12} sm={8} md={9} sx={{
          display : {xs:'none', sm:'block'},
        }}>
            <div><MessageSection/></div>
          </Grid>
        </Grid> 
      </Box>
    </>
  )
}
