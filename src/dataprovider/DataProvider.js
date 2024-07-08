import React, { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';

const DataContext = createContext();

const BASE_URL = 'https://devapi.beyondchats.com/api';

export const DataProvider = ({ children }) => {
    // Theme state and logic
    const [mode, setMode] = useState('light');
    const theme = useMemo(() => createTheme({
        palette: {
            mode,
        },
    }), [mode]);
    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        console.log('you hit one time')
    };

    // API state and logic
 

    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selectedChatId, setSelectedChatId] = useState(null);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/get_all_chats?page=1`);
                setChats(response.data.data.data);
            } catch (error) {
                console.error("Error fetching chats:", error);
            }
        };
        fetchChats();
    }, []);
   

    const fetchMessages = async (chatId) => {
        try {
            const response = await axios.get(`${BASE_URL}/get_chat_messages?chat_id=${chatId}`);
            setMessages(response.data.data);
        } catch (error) {
            console.error("Error fetching messages:", error);
        }

    };

    return (
        <DataContext.Provider value={{ mode, toggleTheme,  fetchMessages,  chats, selectedChatId, setSelectedChatId, messages }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);




