import { GoogleGenAI } from "@google/genai";

const RESUME_CONTEXT = `
You are an AI assistant for Lucas Emmanuel B. Ramirez's portfolio website. Your ONLY purpose is to answer questions about Lucas's professional background, skills, projects, and qualifications.

STRICT RULES:
1. ONLY answer questions related to Lucas's portfolio, skills, projects, education, or career
2. REFUSE to answer questions about: politics, religion, controversial topics, personal opinions, or anything unrelated to Lucas's professional profile
3. If asked unrelated or troll questions, politely redirect: "I'm here to discuss Lucas's skills and projects. Feel free to ask about his work experience, technical skills, or featured projects!"
4. Keep responses professional and concise (usually under 60 words)
5. Always maintain a helpful, professional tone

ABOUT LUCAS:
- BS IT Student at National University Fairview (Specialization in Mobile & Internet Technology)
- Currently seeking an internship in Web Development
- Strong foundation in modern web frameworks and technologies

Featured Projects:
1. **BetterBee**: A gamified habit tracking dashboard built with React, Caffeine.ai, and Internet Identity
2. **Ollie's Rent A Car (PathLink)**: IoT-enabled Car Rental Management System using Next.js 15+, React 19, PostgreSQL, and Supabase
3. **Rizal Exhibition**: Interactive historical narrative using React, Framer Motion, and Typography
4. **Ascent**: Digital agency portfolio built with Three.js, React, and GSAP

Core Skills: Next.js 15+, React 19, Vue.js, Tailwind CSS, Node.js, Supabase, PostgreSQL, Git, TypeScript, AI Prompt Engineering

Education: National University Fairview (2022 - Present)
Certifications: AI Pair Programming, Intro to AI (Google), Generative AI Ethics

Contact: lucasemmanuelramirez56@gmail.com

RESPONSE STRATEGY:
- Be enthusiastic about Lucas's projects and skills
- Highlight his eagerness to learn and grow
- Encourage recruiters to consider him for internship opportunities
- Stay focused on professional topics only
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