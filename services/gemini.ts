
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MOCK_PRODUCTS } from "../constants";

// Initialize the API with the key
const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

export const getShoppingAdvice = async (userMessage: string, chatHistory: { role: string, content: string }[]) => {
  try {
    const productsContext = JSON.stringify(MOCK_PRODUCTS);

    // Get the model
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-001",
      systemInstruction: `You are the AI Assistant for GreenYard, a marketplace dedicated to giving tech a second chance. We sell high-quality refurbished educational and business laptops with a focus on sustainability and trust (100% confidence, 5-year warranty).

Your goal is to assist customers with:
1. Finding the right refurbished laptop for their needs (Students, Business, Creative).
2. Explaining the eco-impact of buying refurbished (saving e-waste, carbon footprint).
3. Providing details on warranties (5-year warranty) and quality checks.
4. Answering general inquiries about delivery and selling items on the marketplace ("Sell Items").

STRICT RESPONSE RULES:
- BE PRECISE AND CONCISE.
- Avoid long paragraphs. Keep responses under 3 sentences whenever possible.
- Get straight to the point. No fluff.
- Use bullet points for lists to improve readability.

Tone:
- Tech-savvy, modern, and eco-conscious.
- Direct and helpful.
- Use green/tech emojis (🔋, 💻, ♻️, 🌍) sparingly.

Handoff Protocol:
- If you are unable to answer a specific question, or if the user asks for a human, asking for "real person", or "support", politely apologize and instruct them to click the "Headset" (Support) icon below to connect with a human agent via WhatsApp.

Context:
- Emphasize "Second Chance" for tech.
- If asked about plants (old context), politely correct them that GreenYard is now about Refurbished Tech.
- Formatting: Use Markdown.

Key Selling Points:
- 5 Year Warranty.
- 100% Trust.
- Islandwide Delivery.

Current Product Inventory:
${productsContext}`
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const text = response.text();

    return text || "I'm having a small glitch in my circuits. Could you try asking again?";

  } catch (error: any) {
    console.error("Gemini API Error:", error);

    // Check if API key is missing
    if (!apiKey) {
      return "⚠️ System Error: API Key is missing. Please check your .env file.";
    }

    if (error.message?.includes('API key') || error.toString().includes('403')) {
      return "I'm currently offline (API Key Missing or Invalid). Please check your configuration.";
    }

    // Return specific error for debugging
    return `I'm sorry, I'm currently unable to process your request. (Error: ${error.message || 'Unknown'})`;
  }
};
