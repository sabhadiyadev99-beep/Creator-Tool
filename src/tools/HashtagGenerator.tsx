import { useState } from "react";
import ToolShell from "./ToolShell";
import { ToolMetadata } from "../types";

const HASHTAG_MAP: Record<string, string[]> = {
  'tech': ['#technology', '#tech', '#innovation', '#ai', '#developer', '#coding', '#future', '#it', '#programming'],
  'student': ['#students', '#education', '#study', '#school', '#university', '#learning', '#collegelife', '#onlinelearning'],
  'creator': ['#creators', '#contentcreator', '#youtube', '#instagram', '#tiktok', '#creative', '#influence', '#marketing'],
  'fitness': ['#fitness', '#gym', '#workout', '#health', '#motivation', '#bodybuilding', '#training', '#fitlife'],
  'travel': ['#travel', '#adventure', '#wanderlust', '#nature', '#explore', '#photography', '#vacation', '#travelgram'],
  'default': ['#viral', '#trending', '#explorepage', '#follow', '#like', '#reels', '#content']
};

export default function HashtagGenerator({ tool }: { tool: ToolMetadata }) {
  const [output, setOutput] = useState("");

  const generateHashtags = (input: string) => {
    if (!input) return;
    
    const keywords = input.toLowerCase().split(/\s+/);
    let tags: string[] = [];
    
    keywords.forEach(word => {
      if (HASHTAG_MAP[word]) {
        tags = [...tags, ...HASHTAG_MAP[word]];
      }
    });

    if (tags.length === 0) {
      tags = HASHTAG_MAP['default'];
    }

    // Add unique and random selection
    const finalTags = Array.from(new Set(tags)).sort(() => 0.5 - Math.random()).slice(0, 30);
    setOutput(finalTags.join(' '));
  };

  return (
    <ToolShell
      title={tool.name}
      description={tool.description}
      inputPlaceholder="Enter keyword (e.g., tech, student, travel)..."
      onGenerate={generateHashtags}
      output={output}
      buttonText="Generate Hashtags"
    />
  );
}
