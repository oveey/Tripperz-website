'use client';

import React, { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { Bot, X, Send } from 'lucide-react';
import '../styles/chat.css';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleSubmit, handleInputChange, status } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="chat-wrapper">
      {/* Floating Icon */}
      {!isOpen && (
        <button className="chat-toggle-btn" onClick={() => setIsOpen(true)}>
          <Bot size={24} />
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="chat-panel">
          <div className="chat-header">
            <span>Chat</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`chat-message ${message.role}`}>
                <div className="avatar">
                  <Bot size={16} />
                </div>
                <div className="text">
                  {message.parts.map((part, index) =>
                    part.type === 'text' ? <span key={index}>{part.text}</span> : null
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="chat-form">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              disabled={status !== 'ready'}
            />
            <button type="submit" disabled={status !== 'ready'}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
