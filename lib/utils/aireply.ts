import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";

// **SECURITY WARNING:** For production, do NOT hardcode your API key here.
// Implement a backend to handle the API calls.
const API_KEY: string = "YOUR_API_KEY";

const genAI = new GoogleGenerativeAI(API_KEY);
const model: GenerativeModel = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
}); // Or "gemini-pro-vision"

async function generateChatbotResponse(userMessage: string): Promise<string> {
  try {
    const result = await model.generateContent(userMessage);
    const response =
      result.response?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (response) {
      return response;
    } else {
      console.warn("No response received from the model.");
      return "Sorry, I didn't get a response.";
    }
  } catch (error) {
    console.error("Error generating response:", error);
    return "Sorry, there was an error processing your request.";
  }
}

export default generateChatbotResponse;
