// import React, { createContext, useState, useMemo, useContext, useEffect } from 'react';
// import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import axios from 'axios';

// const DataContext = createContext();

// const BASE_URL = 'https://devapi.beyondchats.com/api';

// export const DataProvider = ({ children }) => {
//     // Theme state and logic
//     const [mode, setMode] = useState('light');
//     const theme = useMemo(() => createTheme({
//         palette: {
//             mode,
//         },
//     }), [mode]);
//     const toggleTheme = () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//         console.log('you hit one time')
//     };

//     // API state and logic
 

//     const [chats, setChats] = useState([]);
//     const [messages, setMessages] = useState([]);
//     const [selectedChatId, setSelectedChatId] = useState(null);

//     useEffect(() => {
//         const fetchChats = async () => {
//             try {
//                 const response = await axios.get(`${BASE_URL}/get_all_chats?page=1`);
//                 setChats(response.data.data.data);
//             } catch (error) {
//                 console.error("Error fetching chats:", error);
//             }
//         };
//         fetchChats();
//     }, []);
   

//     const fetchMessages = async (chatId) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/get_chat_messages?chat_id=${chatId}`);
//             setMessages(response.data.data);
//             console.log('chatid', chatId)
//             console.log('respose', response)
//             console.log('response.data', response.data)
//             console.log('response.data.data', response.data.data)
//             console.log('messges', messages)
//         } catch (error) {
//             console.error("Error fetching messages:", error);
//         }

//     };

//     return (
//         <DataContext.Provider value={{ mode, toggleTheme,  fetchMessages,  chats, selectedChatId, setSelectedChatId, messages }}>
//             <MuiThemeProvider theme={theme}>
//                 <CssBaseline />
//                 {children}
//             </MuiThemeProvider>
//         </DataContext.Provider>
//     );
// };

// export const useData = () => useContext(DataContext);




import React, { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';

const DataContext = createContext();

const BASE_URL = 'https://devapi.beyondchats.com/api';

const axiosInstance = axios.create();
const MAX_RETRIES = 3;

const fetchWithRetry = async (url, retries = MAX_RETRIES, delay = 1000) => {
    try {
        const response = await axiosInstance.get(url);
        return response;
    } catch (error) {
        if (error.response && error.response.status === 429 && retries > 0) {
            console.error(`Rate limit exceeded. Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return fetchWithRetry(url, retries - 1, delay * 2);
        }
        throw error;
    }
};

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
                const response = await fetchWithRetry(`${BASE_URL}/get_all_chats?page=1`);
                setChats(response.data.data.data);
            } catch (error) {
                console.error("Error fetching chats:", error);
            }
        };
        fetchChats();
    }, []);

    const fetchMessages = async (chatId) => {
        try {
            const response = await fetchWithRetry(`${BASE_URL}/get_chat_messages?chat_id=${chatId}`);
            setMessages(response.data.data);
            console.log(chatId, 'chatid')
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };

    return (
        <DataContext.Provider value={{ mode, toggleTheme, fetchMessages, chats, selectedChatId, setSelectedChatId, messages }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);