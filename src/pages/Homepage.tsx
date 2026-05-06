import { motion } from "motion/react";
import { ToolMetadata } from "../types";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import Layout from "../components/Layout";
import { TOOLS } from "../toolsRegistry";

export default function Homepage() {
  return (
    <Layout>
      <section className="text-center mb-20 max-w-3xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-block px-3 py-1 rounded-full bg-blue-50 text-brand text-[10px] font-bold uppercase tracking-widest mb-6 border border-blue-100"
        >
          All-in-one utility suite
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900"
        >
          Work Smarter, <br /><span className="text-brand">Not Harder.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg opacity-60 text-slate-500 leading-relaxed"
        >
          A high-performance collection of tools designed to optimize the workflow of modern students and content creators. Free, fast, and secure.
        </motion.p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TOOLS.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ToolCard tool={tool} index={index} />
          </motion.div>
        ))}
      </div>

      <section id="about" className="mt-32 pt-24 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Built for the Modern Workflow</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Professional Grade</h3>
              <p className="text-sm text-slate-500 leading-relaxed">No fluff, no bloat. Each tool is built with a focus on ease of use and professional results. We leverage advanced AI where it matters and pure speed everywhere else.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Privacy First</h3>
              <p className="text-sm text-slate-500 leading-relaxed">We don't store your input data. All text processing happens securely, ensuring your content remains yours. Our business model is supported by minimal, non-intrusive advertising.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ToolCard({ tool, index }: { tool: ToolMetadata; index: number }) {
  const Icon = (Icons as any)[tool.icon] || Icons.Wrench;

  return (
    <Link 
      to={tool.path}
      className="group block h-full p-8 bg-white border border-border rounded-xl transition-all hover:border-brand hover:shadow-xl hover:shadow-blue-50 hover:-translate-y-1 relative"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-blue-50 group-hover:text-brand border border-slate-100">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{tool.name}</h3>
      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{tool.description}</p>
      
      <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand group-hover:gap-3 transition-all">
        Launch Tool
        <Icons.ArrowRight size={14} />
      </div>

      {index === 0 && (
        <span className="absolute top-4 right-4 px-2 py-1 bg-green-100 text-green-700 text-[9px] font-bold uppercase tracking-wider rounded">Popular</span>
      )}
    </Link>
  );
}
