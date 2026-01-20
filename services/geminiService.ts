
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are "Hori", the official AI Admissions Counselor for Horizon Academy. 
Your goal is to help prospective parents and students learn about the school.

Key Facts about Horizon Academy:
- Mission: Excellence in academic, athletic, and artistic pursuits.
- Programs: Primary (1-5), Middle (6-8), and High School (9-12).
- Curriculum: Global standards with AP and IB options.
- Campus: State-of-the-art labs, olympic swimming pool, 500-seat theater.
- Admissions: Open for Fall 2025. Financial aid is available.
- Location: 123 Education Way, Silicon Valley.

Guidelines:
- Be professional, warm, and encouraging.
- If you don't know an answer, suggest contacting the admissions office at admissions@horizonacademy.edu.
- Keep responses concise and formatted for a chat bubble.
`;

export async function askSchoolAssistant(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having a bit of trouble connecting to the school servers right now. Please try again in a moment!";
  }
}
