import Layout from "../components/Layout";
import { ToolMetadata } from "../types";
import { TOOLS } from "../toolsRegistry";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import TextFormatter from "../tools/TextFormatter";
import FancyFonts from "../tools/FancyFonts";
import HashtagGenerator from "../tools/HashtagGenerator";
import CaptionImprover from "../tools/CaptionImprover";
import TextSummarizer from "../tools/TextSummarizer";

interface ToolPageProps {
  tool: ToolMetadata;
}

const TOOL_COMPONENTS: Record<string, any> = {
  'text-formatter': TextFormatter,
  'fancy-fonts': FancyFonts,
  'hashtag-gen': HashtagGenerator,
  'caption-improver': CaptionImprover,
  'text-summarizer': TextSummarizer,
};

export default function ToolPage({ tool }: ToolPageProps) {
  const Component = TOOL_COMPONENTS[tool.id];
  const relatedTools = TOOLS.filter(t => t.id !== tool.id).slice(0, 5);
  
  return (
    <Layout seoTitle={tool.seoTitle} seoDescription={tool.seoDescription}>
      <div className="mb-6 shrink-0">
        <nav className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 flex items-center gap-2">
          <Link to="/" className="hover:text-brand transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-600 truncate">{tool.name}</span>
        </nav>
      </div>

      <div className="grid lg:grid-cols-4 gap-12">
        {/* Sidebar Nav */}
        <aside className="hidden lg:block space-y-8 h-fit sticky top-24">
          <div>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Tools</h2>
            <ul className="space-y-1">
              {TOOLS.map((t) => {
                const Icon = (Icons as any)[t.icon] || Icons.Wrench;
                return (
                  <li key={t.id}>
                    <Link 
                      to={t.path} 
                      className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                        tool.id === t.id 
                          ? 'bg-blue-50 text-brand font-bold border border-blue-100' 
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <Icon size={14} />
                      {t.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-border bg-white shadow-sm space-y-4">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Sponsored Content</h3>
            <div className="h-40 bg-slate-50 border border-dashed border-slate-200 rounded-lg flex items-center justify-center p-4 text-center">
              <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed">No Hidden Fees. 100% Free Forever.</p>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3 space-y-16 overflow-hidden">
          {/* Tool Actual Logic */}
          <section className="tool-canvas min-h-[400px]">
             <div className="mb-8">
               <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{tool.name}</h2>
               <p className="text-slate-500 mt-2">{tool.description}</p>
             </div>
            {Component ? <Component tool={tool} /> : <div className="text-center py-20 opacity-40 italic">Tool logic is loading...</div>}
          </section>

          {/* Long SEO Content */}
          <section className="pt-16 border-t border-border mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 prose prose-slate">
                <article dangerouslySetInnerHTML={{ __html: tool.longContent }} />
              </div>
              <div className="space-y-8">
                 <div className="p-6 bg-slate-900 rounded-xl text-white">
                   <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-blue-400">Why use this?</h3>
                   <p className="text-xs text-slate-400 leading-relaxed italic">"CreatorTools has saved me hours of manual formatting. The Unicode features are especially great for my Instagram bios!" - Sarah J., Content Creator</p>
                 </div>
                 {/* Sidebar Ad */}
                 <div className="h-[250px] bg-white border border-border rounded-xl flex items-center justify-center p-6 text-center">
                    <span className="text-[10px] text-slate-300 font-bold uppercase">Advertisement - Sidebar Banner</span>
                 </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 border-t border-border">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
              <div className="grid gap-4">
                {tool.faqs.map((faq, i) => (
                  <div key={i} className="p-6 bg-white border border-border rounded-xl hover:border-slate-300 transition-colors group">
                    <h3 className="font-bold mb-3 flex items-center gap-3 text-slate-800">
                      <Icons.HelpCircle size={18} className="text-brand" />
                      {faq.question}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
