
import './App.css';
import { useTheme } from './themprovider/ThemeContext';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ChatListSection from './Sections/ChatListSection';
import MessageSection from './Sections/MessageSection';

function App() {
  const { toggleTheme, mode } = useTheme()
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <button onClick={toggleTheme}>change color to {mode === 'light' ? 'Dark' : 'Light'} Mode</button>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item> <ChatListSection/>  </Item>
          </Grid>
          <Grid item xs={8}>
            <Item><MessageSection/></Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
