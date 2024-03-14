import { GoogleGenerativeAI, type InputContent } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY!);

export default async function getChatResponse(history : InputContent[], message : string) : Promise<string> {
  
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const chat = model.startChat({
    history,
    generationConfig: {
      maxOutputTokens: 500,
    },
  });

  const result = await chat.sendMessage(message);
  const response = result.response;
  const text = response.text();
  return text
}