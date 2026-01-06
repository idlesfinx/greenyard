
import { GoogleGenAI } from "@google/genai";
import { MOCK_PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getShoppingAdvice = async (userMessage: string, chatHistory: { role: string, content: string }[]) => {
  try {
    const productsContext = JSON.stringify(MOCK_PRODUCTS);

    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash-latest',
      contents: [
        {
          role: 'user',
          parts: [{
            text: `System context: You are "Green Assistant", the friendly and knowledgeable AI guide for Green Yard (greenyard.lk), a premium used goods marketplace. 
          
          About Green Yard:
          - Website: https://greenyard.lk
          - We sell verified, high-quality second-hand items.
          - Verified by "The Yard Verification™" (48-point check).
          - Focus on sustainability and reducing e-waste.

          Your Role:
          - Be friendly, enthusiastic, and helpful. Use emojis 🌿 ✨.
          - Help users find items from the provided list: ${productsContext}.
          - Always highlight the eco-impact (CO2 savings).
          - If asked about the website, direct them to greenyard.lk.
          
          User says: ${userMessage}`
          }]
        }
      ],
      config: {
        systemInstruction: "You are Green Assistant, the warm, supportive, and friendly shopping guide for Green Yard. Be extremely helpful and kind. Use emojis significantly (🌿, ✨, 💚) to create a welcoming vibe. Your goal is to support the user in their eco-journey.",
        temperature: 0.7,
      },
    });

    // Handle different response formats (property or method)
    const text = typeof response.text === 'function' ? response.text() : response.text;
    return text || "I'm having a small glitch in my circuits. Could you try asking again?";
  } catch (error: any) {
    console.error("Gemini API Error:", error);

    // Check if API key is missing (often empty string from process.env)
    if (!process.env.API_KEY && !process.env.GEMINI_API_KEY) {
      return "⚠️ System Error: API Key is missing. Please check your .env file.";
    }

    if (error.message?.includes('API key') || error.toString().includes('403')) {
      return "I'm currently offline (API Key Missing or Invalid). Please check your configuration.";
    }

    // Return specific error for debugging
    return `I'm sorry, I'm currently unable to process your request. (Error: ${error.message || 'Unknown'})`;
  }
};
