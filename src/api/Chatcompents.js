import React, { useEffect, useState } from 'react';
import { getChats, getMessages } from './api'

export default function Chatcompents() {

    const [messages, setMessages] = useState([]);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const data = await getChats();
                setChats(data);
            } catch (error) {
                console.error("Error fetching chats:", error);
            }
        };

        fetchChats();
    }, []);


    const handleChatClick = async (chatId) => {
        try {
            const data = await getMessages(chatId);
            setMessages(data);
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };


    // useEffect(() => {
    //     const fetchChats = async () => {
    //       try {
    //         const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
    //         console.log('API', response);
    //         console.log('API Response:', response.data);
    //         console.log('Chats Data:', response.data.data); 
    //         console.log('Chats Data inside', response.data.data.data); 
    //         setChats(response.data.data.data); 
    //       } catch (error) {
    //         console.error('Error fetching chats:', error);
    //       }
    //     };

    //     fetchChats();
    //   }, []); 

    //   useEffect(() => {
    //     const fetchMessages = async () => {
    //       try {
    //         const response = await axios.get('https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888');
    //         setMessages(response.data.data); // Assuming 'data' is your array of messages
    //       } catch (error) {
    //         console.error('Error fetching messages:', error);
    //       }
    //     };

    //     fetchMessages();
    //   }, []);




    return (
        <>
            <div>
                <h2>Messages:</h2>
                <ul>
                    {messages.map(message => (
                        <li key={message.id}>
                            <strong>{message.sender.name}:</strong> {message.message}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Chat List:</h2>
                <ul>
                    {chats.map(chat => (
                        <li key={chat.id} onClick={() => handleChatClick(chat.id)}>
                            <strong>Chat ID:</strong> {chat.id} <br />
                            <strong>Created By:</strong> {chat.creator.name || 'Unknown'} <br />
                            <strong>Email:</strong> {chat.creator.email} <br />
                            <strong>Message Count:</strong> {chat.creator.msg_count}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}
