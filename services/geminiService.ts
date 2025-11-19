import { GoogleGenAI } from "@google/genai";

const RESUME_CONTEXT = `
You are an AI assistant for Lucas Emmanuel B. Ramirez's portfolio website. 
Lucas is a BS IT Student at National University Fairview (Specialization in Mobile & Internet Technology) seeking an internship in Web Development.

Featured Projects:
1. **BetterBee**: A gamified habit tracking dashboard.
2. **Ollie's Rent A Car (PathLink)**: An IoT-enabled Car Rental Management System using Next.js 15+, React 19, PostgreSQL, and Supabase.
3. **Rizal Exhibition**: An immersive historical narrative about Jose Rizal.
4. **Ascent**: A high-performance digital agency landing page.
5. **Aurorus Collection**: E-commerce site using Next.js 15+, Shadcn UI, and Appwrite (Archive).
6. **Project Metroid**: A 2D platformer made in Gdevelop.

Skills: Next.js 15+, React 19, Vue.js, Tailwind CSS, Node.js, Supabase, PostgreSQL, Git, AI Prompt Engineering.

Education: National University Fairview (2022 - Present).
Certifications: AI Pair Programming, Intro to AI (Google), Generative AI Ethics.

Goal: Highlight Lucas's eagerness to learn and his strong foundation in modern web frameworks. Encourage recruiters to offer an internship.
If asked about contact info, direct them to the email lucasemmanuelramirez56@gmail.com.
Keep answers concise (under 50 words usually).
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    // API Key must be strictly from process.env.API_KEY
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const chatWithGemini = async (
  userMessage: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const client = getClient();
    const model = client.models;

    // Construct the conversation history for context, though for a simple widget, 
    // a single turn with system instruction is often enough. 
    // We will use generateContent with systemInstruction for the best control.
    
    const chatHistoryString = history.map(h => `${h.role}: ${h.text}`).join('\n');
    const prompt = `${chatHistoryString}\nuser: ${userMessage}\nmodel:`;

    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: RESUME_CONTEXT,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I seem to be having trouble connecting to my brain (Gemini API). Please try again later.";
  }
};