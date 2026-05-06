import { useState } from "react";
import ToolShell from "./ToolShell";
import { ToolMetadata } from "../types";
import { summarizeText } from "../services/gemini";

export default function TextSummarizer({ tool }: { tool: ToolMetadata }) {
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [length, setLength] = useState<'short' | 'medium' | 'long'>('medium');

  const handleGenerate = async (input: string) => {
    setIsLoading(true);
    try {
      const result = await summarizeText(input, length);
      setOutput(result);
    } catch (e) {
      console.error(e);
      setOutput("An error occurred while generating the summary.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ToolShell
      title={tool.name}
      description={tool.description}
      onGenerate={handleGenerate}
      output={output}
      isLoading={isLoading}
      buttonText="Summarize Text"
      options={
        <div className="flex gap-2">
          {(['short', 'medium', 'long'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLength(l)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                length === l ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-black border-[#E5E5E5] hover:border-black'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      }
    />
  );
}
