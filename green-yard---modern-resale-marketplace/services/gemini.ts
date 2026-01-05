
import { GoogleGenAI } from "@google/genai";
import { MOCK_PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getShoppingAdvice = async (userMessage: string, chatHistory: {role: string, content: string}[]) => {
  try {
    const productsContext = JSON.stringify(MOCK_PRODUCTS);
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        {
          role: 'user',
          parts: [{ text: `System context: You are "Green Assistant" for Green Yard, a premium used goods marketplace. Here are our currently featured products: ${productsContext}. Your goal is to help users find the perfect item while highlighting the environmental benefit (CO2 savings). Keep responses concise, modern, and enthusiastic. User says: ${userMessage}` }]
        }
      ],
      config: {
        systemInstruction: "You are a savvy, eco-conscious personal shopper for a high-end resale store. Use emojis occasionally. Be ultra-modern and professional.",
        temperature: 0.7,
      },
    });

    return response.text || "I'm having a small glitch in my circuits. Could you try asking again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm currently unable to process your request. Please try again later.";
  }
};
