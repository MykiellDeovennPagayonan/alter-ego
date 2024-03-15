import { GoogleGenerativeAI, type InputContent } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY!);

export default async function getChatResponse(history : InputContent[], message : string, memory: Array<string>) : Promise<string> {
  
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const chat = model.startChat({
    history,
    generationConfig: {
      maxOutputTokens: 500,
    },
  });

  if (memory.length > 0) {
    let memoryPrev = ""
  
    memory.forEach((memory) => memoryPrev += (`\n - ` + memory))

    message += `\n\n take note about the following information that, the second person refers to me: \n ${memoryPrev}`
  }

  const result = await chat.sendMessage(message);
  const response = result.response;
  const text = response.text();
  return text
}