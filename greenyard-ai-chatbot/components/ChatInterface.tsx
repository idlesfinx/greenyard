import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowUp, RefreshCcw, Headset } from 'lucide-react';
import { ChatMessage, Role } from '../types';
import { sendMessageStream, initializeChat } from '../services/geminiService';
import MessageBubble from './MessageBubble';
import { SUGGESTED_QUESTIONS, SUPPORT_PHONE_NUMBER } from '../constants';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Initialize chat on mount
  useEffect(() => {
    initializeChat();
    // Compact welcome message for widget
    setMessages([
        {
            id: 'welcome',
            role: Role.MODEL,
            text: "Hi! Green Yard AI here. Ask me about refurbished tech, eco-impact, or sell your gear! 🌿",
            timestamp: new Date(),
            isStreaming: false
        }
    ]);
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSendMessage = async (textOverride?: string) => {
    const textToSend = textOverride || input.trim();
    if (!textToSend || isLoading) return;

    // Reset input and error
    setInput('');
    setError(null);
    if (inputRef.current) {
        inputRef.current.style.height = 'auto';
    }

    // Add User Message
    const userMsgId = Date.now().toString();
    const userMessage: ChatMessage = {
      id: userMsgId,
      role: Role.USER,
      text: textToSend,
      timestamp: new Date(),
    };

    // Add Placeholder Bot Message
    const botMsgId = (Date.now() + 1).toString();
    const botMessage: ChatMessage = {
      id: botMsgId,
      role: Role.MODEL,
      text: '', // Empty initially
      timestamp: new Date(),
      isStreaming: true,
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setIsLoading(true);

    try {
      const stream = sendMessageStream(textToSend);
      let accumulatedText = '';

      for await (const chunk of stream) {
        accumulatedText += chunk;
        setMessages(prev => 
          prev.map(msg => 
            msg.id === botMsgId 
              ? { ...msg, text: accumulatedText } 
              : msg
          )
        );
      }

      // Finalize bot message
      setMessages(prev => 
        prev.map(msg => 
          msg.id === botMsgId 
            ? { ...msg, isStreaming: false } 
            : msg
        )
      );

    } catch (err) {
      console.error(err);
      setError("Connection failed.");
      // Remove the empty bot message if it failed completely
      setMessages(prev => prev.filter(msg => msg.id !== botMsgId));
    } finally {
      setIsLoading(false);
      // Focus logic slightly different for widget to prevent aggressive scrolling on mobile
      if (window.matchMedia('(min-width: 768px)').matches) {
         inputRef.current?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTextareaResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(e.target.value);
      e.target.style.height = 'auto';
      e.target.style.height = `${Math.min(e.target.scrollHeight, 100)}px`;
  };

  const handleReset = () => {
      setMessages([]);
      initializeChat();
      setMessages([
        {
            id: 'welcome-reset',
            role: Role.MODEL,
            text: "Chat cleared. What's next?",
            timestamp: new Date(),
            isStreaming: false
        }
    ]);
  };

  const handleConnectAgent = () => {
    // Find the last user message
    const lastUserMessage = [...messages].reverse().find(m => m.role === Role.USER);

    let message = "Hello GreenYard Support! I need help.";
    
    if (lastUserMessage) {
        message += `\n\nCustomer: ${lastUserMessage.text}`;
    }
    
    // Open WhatsApp
    const url = `https://wa.me/${SUPPORT_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col h-full bg-dark-950 relative">
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-0 scroll-smooth">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        
        {/* Suggested Questions */}
        {messages.length < 3 && !isLoading && (
          <div className="mt-4 mb-2">
            <div className="grid grid-cols-1 gap-2">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="text-left text-xs p-3 border border-dark-700 rounded-xl bg-dark-800 hover:bg-dark-700 hover:border-neon-500/30 transition-all text-gray-300 group"
                >
                  <span className="group-hover:text-neon-500 transition-colors">{q}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {error && (
            <div className="flex justify-center my-2">
                <span className="text-red-400 text-xs bg-red-900/10 px-2 py-1 rounded">
                    {error}
                </span>
            </div>
        )}

        <div ref={messagesEndRef} className="h-2" />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-dark-950 border-t border-white/5 relative z-10">
        <div className="flex items-end gap-2 bg-dark-800 p-1.5 rounded-2xl border border-dark-700 focus-within:border-neon-500/50 transition-colors">
            
            <button 
                onClick={handleReset}
                className="p-2 text-gray-500 hover:text-white transition-colors"
                title="Reset Chat"
            >
                <RefreshCcw size={16} />
            </button>

            <button 
                onClick={handleConnectAgent}
                className="p-2 text-neon-500 hover:text-neon-400 hover:bg-neon-500/10 rounded-lg transition-colors"
                title="Speak to Human Agent"
            >
                <Headset size={16} />
            </button>

            <textarea
                ref={inputRef}
                value={input}
                onChange={handleTextareaResize}
                onKeyDown={handleKeyDown}
                placeholder="Ask about items..."
                className="flex-1 max-h-[100px] bg-transparent border-none focus:ring-0 resize-none py-2 px-1 text-sm text-white placeholder-gray-500 leading-relaxed font-medium"
                rows={1}
            />

            <button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                className={`p-2 rounded-xl flex-shrink-0 transition-all duration-200 transform ${
                    input.trim() && !isLoading
                        ? 'bg-neon-500 text-black hover:bg-neon-400'
                        : 'bg-dark-700 text-gray-500 cursor-not-allowed'
                }`}
            >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                ) : (
                  <ArrowUp size={18} strokeWidth={3} />
                )}
            </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;