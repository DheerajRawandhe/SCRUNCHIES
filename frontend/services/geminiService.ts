import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { HeroContent } from '../types';

export const generateHeroCopy = async (
  currentContent: HeroContent,
  vibe: string
): Promise<HeroContent> => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.warn("API Key is missing. Returning original content.");
    return currentContent;
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    You are a creative copywriter for a cute, trendy, and high-quality hair accessory brand called "SCRUNCHIES VILLA".
    The brand sells silk scrunchies, claws, and ribbons that make you feel light and beautiful.
    
    Current Content:
    Headline: "${currentContent.headline}"
    Subheadline: "${currentContent.subheadline}"
    CTA: "${currentContent.ctaText}"

    Task: Rewrite the headline, subheadline, and CTA to match the following vibe: "${vibe}".
    The tone should be fun, girly, and inviting.
    
    Return the response as a valid JSON object with keys: headline, subheadline, ctaText.
    Do not include markdown formatting like \`\`\`json. Just the raw JSON string.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: 'application/json'
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text");

    return JSON.parse(text) as HeroContent;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return currentContent; // Fallback to original
  }
};