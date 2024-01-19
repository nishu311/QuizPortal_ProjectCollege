import React, { useState, useRef, useEffect } from 'react';

// Message component to render each message
const Message = ({ author, text }) => (
  <div>
    <strong>{author}:</strong> {text}
  </div>
);

// Chat component containing the messages and input form
const Chat = ({ currentUser, otherUser }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const sendMessage = (author, text) => {
    setMessages([...messages, { author, text }]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (inputText.trim() === '') return;
    sendMessage(currentUser, inputText);
    setInputText('');
  };

  return (
    <div>
      <div>
        <h2>Chat with {otherUser}</h2>
        {/* Display the list of messages */}
        <div>
          {messages.map((message, index) => (
            <Message key={index} author={message.author} text={message.text} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div>
        {/* Input form for sending messages */}
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

// App component to demonstrate the Chat component
const NishaPage = () => {
  return (
    <div>
      <Chat currentUser="User1" otherUser="User2" />
    </div>
  );
};

export default NishaPage;
