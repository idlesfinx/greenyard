import React from 'react';
import { Role, ChatMessage } from '../types';
import MarkdownRenderer from './MarkdownRenderer';
import { Bot } from 'lucide-react';

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.role === Role.USER;

  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[85%] md:max-w-[75%] gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        
        {/* Avatar - Only for bot */}
        {!isUser && (
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neon-500 text-black flex items-center justify-center font-bold">
            <Bot size={18} />
          </div>
        )}

        {/* Bubble */}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <div
            className={`px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed ${
              isUser
                ? 'bg-neon-500 text-black font-medium' // User: Neon Green Bubble, Black Text
                : 'bg-dark-800 text-gray-100 border border-dark-700' // Bot: Dark Bubble, White Text
            }`}
          >
             {isUser ? (
               <p className="whitespace-pre-wrap">{message.text}</p>
             ) : (
               <>
                 {message.text ? (
                   <MarkdownRenderer content={message.text} />
                 ) : (
                   <div className="flex space-x-1.5 h-6 items-center px-1">
                     <div className="w-1.5 h-1.5 bg-neon-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                     <div className="w-1.5 h-1.5 bg-neon-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                     <div className="w-1.5 h-1.5 bg-neon-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                   </div>
                 )}
               </>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;