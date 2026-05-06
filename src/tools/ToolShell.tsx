import React, { useState } from "react";
import { Copy, Check, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ToolShellProps {
  title: string;
  description: string;
  inputPlaceholder?: string;
  onGenerate: (input: string) => Promise<string | void> | string | void;
  output?: string;
  customOutput?: React.ReactNode;
  isLoading?: boolean;
  options?: React.ReactNode;
  buttonText?: string;
}

export default function ToolShell({ 
  title, 
  description, 
  inputPlaceholder = "Paste your text here...", 
  onGenerate, 
  output, 
  customOutput,
  isLoading,
  options,
  buttonText = "Generate"
}: ToolShellProps) {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Input Column */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-slate-700">Input Data</label>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{input.length} characters</span>
        </div>
        
        <div className="relative group">
          <textarea
            className="w-full min-h-[300px] p-6 rounded-xl border border-slate-300 bg-white focus:ring-4 focus:ring-blue-100 focus:border-brand outline-none transition-all resize-none text-sm leading-relaxed shadow-sm"
            placeholder={inputPlaceholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {options && (
            <div className="flex flex-wrap items-center gap-2">
              {options}
            </div>
          )}
          <button
            onClick={() => onGenerate(input)}
            disabled={isLoading || !input.trim()}
            className="w-full py-4 bg-brand text-white rounded-xl font-bold text-lg hover:bg-brand-hover shadow-lg shadow-blue-100 transition-all disabled:opacity-20 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Processing...
              </>
            ) : (
              <>
                {buttonText}
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  ✨
                </motion.span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Output Column */}
      <div className="space-y-4 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-slate-700">Improved Results</label>
          {output && (
            <button 
              onClick={handleCopy}
              className="text-[10px] font-bold text-brand uppercase hover:underline flex items-center gap-1"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? 'Copy All' : 'Copy All'}
            </button>
          )}
        </div>

        <div className="flex-1 min-h-[300px] p-6 bg-slate-900 rounded-xl border border-slate-800 shadow-inner overflow-hidden relative group">
          <AnimatePresence mode="wait">
            {!output && !customOutput ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                className="h-full flex items-center justify-center text-slate-100 text-sm italic text-center p-8"
              >
                Output will appear here after generation...
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full overflow-y-auto pr-2 custom-scrollbar"
              >
                {customOutput ? (
                  customOutput
                ) : (
                  <div className="text-slate-200 text-sm italic leading-relaxed whitespace-pre-wrap">
                    {output}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Small Ad Placeholder */}
        <div className="h-24 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center shrink-0">
          <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest px-4 text-center">
            Sponsored Link - Professional AI Writing Service
          </p>
        </div>
      </div>
    </div>
  );
}
