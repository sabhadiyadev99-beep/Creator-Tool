import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function improveCaption(caption: string, tone: 'casual' | 'professional' | 'funny'): Promise<string> {
    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        config: {
            systemInstruction: `You are an expert social media copywriter. Improve the following caption to be more engaging. Tone: ${tone}. Keep it punchy and add relevant emojis. Only return the improved caption.`
        },
        contents: caption,
    });
    return response.text || "Failed to improve caption. Please try again.";
}

export async function summarizeText(text: string, length: 'short' | 'medium' | 'long'): Promise<string> {
    const lengthInstructions = {
        short: "1-2 sentences",
        medium: "a paragraph (3-5 sentences)",
        long: "detailed bullet points"
    };

    const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        config: {
            systemInstruction: `You are a helpful academic assistant. Summarize the following text into a ${lengthInstructions[length]} summary. Only return the summary text.`
        },
        contents: text,
    });
    return response.text || "Failed to summarize text. Please try again.";
}
