"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

export default function ProjectClientView({ children, project }: { children: ReactNode, project: any }) {
  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-16 text-sm uppercase tracking-widest font-semibold">
            <span className="mr-2">←</span> Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wide uppercase">
            {project.label}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            {project.overview}
          </p>
        </motion.header>

        {/* Content Sections */}
        <motion.div 
          className="space-y-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>

      </div>
    </main>
  );
}
