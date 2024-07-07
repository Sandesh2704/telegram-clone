import React from 'react'
import { useData } from '../dataprovider/DataProvider'

export default function ChatListSection() {

  const { chats, setSelectedChatId } = useData()

  return (
    <>
      <div>
        its chst
        {chats.map(chat => (
          <li key={chat.id} onClick={() => setSelectedChatId(chat.id)}>
            <strong>Chat ID:</strong> {chat.id} <br />
            <strong>Created By:</strong> {chat.creator.name || 'Unknown'} <br />
            <strong>Email:</strong> {chat.creator.email} <br />
            <strong>Message Count:</strong> {chat.creator.msg_count}
          </li>
        ))}
      </div>
    </>
  )
}
