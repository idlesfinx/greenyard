import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getGenAI = (): GoogleGenAI => {
  if (!genAI) {
    genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return genAI;
};

export const initializeChat = (): Chat => {
  const ai = getGenAI();
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
    },
  });
  return chatSession;
};

export const getChatSession = (): Chat => {
  if (!chatSession) {
    return initializeChat();
  }
  return chatSession;
};

export const sendMessageStream = async function* (message: string) {
  const chat = getChatSession();
  
  try {
    const result = await chat.sendMessageStream({ message });
    
    for await (const chunk of result) {
      // The chunk is of type GenerateContentResponse, directly access text property
      const text = chunk.text;
      if (text) {
        yield text;
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};
