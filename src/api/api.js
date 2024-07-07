import axios from 'axios';

const BASE_URL = 'https://devapi.beyondchats.com/api';

export const getChats = async (page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/get_all_chats?page=${page}`);
        return response.data.data.data;
    } catch (error) {
        console.error("Error fetching chats:", error);
        throw error;
    }
};

export const getMessages = async (chatId) => {
    try {
        const response = await axios.get(`${BASE_URL}/get_chat_messages?chat_id=${chatId}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching messages:", error);
        throw error;
    }
};

// export const getChats = async () => {
//     try {
//         const response = await fetch('https://devapi.beyondchats.com/api/get_all_chats?page=1');
//         const result = await response.json();
//         return result.data;
        
//     } catch (error) {
//         console.error("Error fetching chats:", error);
//         return [];
//     }
// };

// export const getMessages = async (chatId) => {
//     try {
//         const response = await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
//         const result = await response.json();
//         return result.data;
//     } catch (error) {
//         console.error("Error fetching messages:", error);
//         return [];
//     }
// };