import { openai } from "./openaiClient";

export async function runAgent(task: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a senior software engineer acting as a code agent."
      },
      {
        role: "user",
        content: task
      }
    ]
  });

  return response.choices[0].message.content;
}