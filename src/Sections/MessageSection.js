import React, { useEffect } from 'react'
import { useData } from '../dataprovider/DataProvider';

export default function MessageSection() {
  const { messages, fetchMessages, selectedChatId } = useData();

  useEffect(() => {
    if (selectedChatId) {
      fetchMessages(selectedChatId);
    }
  }, [selectedChatId, fetchMessages]);
  return (
    <div>
      <div>
        {messages.map(message => (
          <div key={message.id}>{message.message}</div>
        ))}
      </div>
    </div>
  )
}
