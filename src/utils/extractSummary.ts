import { GoogleGenerativeAI, type InputContent } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY!);

export default async function extractSummary(history : InputContent[], memory: Array<string>) : Promise<string> {
  
  const model = genAI.getGenerativeModel({ model: "gemini-pro"})


  const latestHistory: InputContent[] = history.slice(-2);

  const chat = model.startChat({
    history: latestHistory,
    generationConfig: {
      maxOutputTokens: 20,
    },
  });

  let memoryPrev = ""
  
  memory.forEach((memory) => memoryPrev += (`\n - ` + memory))

  console.log(memoryPrev)

  const message = `extract a short 1 sentence summary something new you know about me. If there is no new information just reply "none" (dont be strict)

  The following is what you know already:
  ${memoryPrev}
  
  Be direct and straight, no explaination. just straighforward anc concise. And say nothing else`

  const result = await chat.sendMessage(message);
  const response = result.response;
  const text = response.text();
  return text
}