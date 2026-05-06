import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { StickyNote, LayoutGrid, Info as InfoIcon, ExternalLink } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
  seoTitle?: string;
  seoDescription?: string;
}

export default function Layout({ children, seoTitle = "Creator & Student Utility Tools", seoDescription = "Free, high-performance tools for content creators and students." }: LayoutProps) {
  return (
    <div className="min-h-screen bg-surface font-sans text-slate-900 flex flex-col">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
      </Helmet>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white font-bold text-xl italic transition-transform group-hover:scale-105">
              C
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-800">CreatorTools<span className="text-brand">.io</span></h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Free Utility Suite</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <Link to="/" className="text-brand">Tools</Link>
            <a href="#about" className="hover:text-brand transition-colors">About</a>
            <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
          </nav>

          <div className="flex gap-3 items-center">
            <div className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider border border-green-100">
              Free Access
            </div>
          </div>
        </div>
      </header>

      {/* Top Ad Banner Placeholder */}
      <div className="w-full h-12 bg-slate-100 border-b border-slate-200 flex items-center justify-center shrink-0">
        <span className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">Advertisement - Responsive Banner Area</span>
      </div>

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-12 sm:px-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="h-14 bg-white border-t border-border flex items-center justify-between px-8 text-[10px] text-slate-400 font-medium shrink-0">
        <p>© 2024 CreatorTools.io - Made for Creators & Students</p>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-brand transition-colors">Terms</Link>
          <Link to="/" className="hover:text-brand transition-colors">Privacy</Link>
          <Link to="/" className="hover:text-brand transition-colors">Sitemap</Link>
          <span className="text-green-500 hidden sm:inline">● Systems Operational</span>
        </div>
      </footer>
    </div>
  );
}
