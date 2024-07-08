
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ChatListSection from './Sections/ChatListSection';
import MessageSection from './Sections/MessageSection';

function App() {


  return (
    <>
      <Box >
        <Grid container spacing={0}  >
          <Grid item xs={12} sm={3} >
            <div> <ChatListSection/>  </div>
          </Grid>
          <Grid item xs={12} sm={9} sx={{backgroundColor:"pink"}}>
            <div><MessageSection/></div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
