import Link from "next/link";
import Image from "next/image";

interface PolicyLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function PolicyLayout({ title, lastUpdated, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#0B0C10] flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-[#2F6B45]/10 bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Image 
              src="/newlogo.png" 
              alt="Kayal Meal Box" 
              width={140} 
              height={40} 
              className="object-contain h-10 w-auto" 
              priority
            />
          </Link>
          
          <Link 
            href="/" 
            className="flex items-center gap-1.5 text-sm text-[#2F6B45] hover:text-[#2F6B45]/80 font-medium transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-[#2F6B45]/5">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2F6B45] mb-2">{title}</h1>
          {lastUpdated && (
            <p className="text-sm text-[#0B0C10]/50 mb-8">Last Updated: {lastUpdated}</p>
          )}
          
          <div className="prose prose-emerald max-w-none text-[#0B0C10]/80 space-y-6 leading-relaxed">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2F6B45]/10 py-6 text-center text-xs text-[#0B0C10]/40">
        &copy; {new Date().getFullYear()} Kayal Meal Box. All rights reserved.
      </footer>
    </div>
  );
}
