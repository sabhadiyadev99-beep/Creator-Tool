import { useState } from "react";
import ToolShell from "./ToolShell";
import { ToolMetadata } from "../types";

export default function TextFormatter({ tool }: { tool: ToolMetadata }) {
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<'upper' | 'lower' | 'bold' | 'clean'>('upper');

  const formatText = (input: string) => {
    if (!input) return;
    
    let result = input;
    
    switch (mode) {
      case 'upper':
        result = input.toUpperCase();
        break;
      case 'lower':
        result = input.toLowerCase();
        break;
      case 'bold':
        result = toUnicodeBold(input);
        break;
      case 'clean':
        result = input.replace(/\s+/g, ' ').trim();
        break;
    }

    // Add random relevant emojis if it looks like social content
    const emojis = ["🔥", "✨", "🚀", "💡", "🎯", "📝"];
    if (input.length > 10) {
      result += " " + emojis[Math.floor(Math.random() * emojis.length)];
    }

    setOutput(result);
  };

  return (
    <ToolShell
      title={tool.name}
      description={tool.description}
      onGenerate={formatText}
      output={output}
      buttonText="Format Text"
      options={
        <div className="flex flex-wrap gap-2">
          {(['upper', 'lower', 'bold', 'clean'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                mode === m ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-black border-[#E5E5E5] hover:border-black'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      }
    />
  );
}

function toUnicodeBold(text: string) {
  const charMap: Record<string, string> = {
    'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
    'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙'
  };
  return text.split('').map(c => charMap[c] || c).join('');
}
