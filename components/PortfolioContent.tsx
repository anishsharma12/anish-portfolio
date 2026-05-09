"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projectsData as projects } from "@/lib/data";

const services = [
  {
    id: 1,
    title: "AI Data Annotation",
    description: "I label, classify, and review text/audio data to support AI model training and evaluation.",
  },
  {
    id: 2,
    title: "Transcription & Audio Segmentation",
    description: "I transcribe spoken audio, identify speakers, mark unclear speech, and format transcripts according to project guidelines.",
  },
  {
    id: 3,
    title: "Hindi-English Localization",
    description: "I provide natural Hindi-to-English and English-to-Hindi translation support for general, business, marketing, and digital content.",
  },
  {
    id: 4,
    title: "AI Response Evaluation",
    description: "I review AI-generated answers for accuracy, helpfulness, tone, clarity, safety, and instruction-following.",
  },
  {
    id: 5,
    title: "Content Quality Review",
    description: "I check written content for grammar, meaning, readability, formatting, and overall quality.",
  },
];



const skills = [
  "AI data annotation", "Audio transcription", "Speaker labeling", "Content evaluation", 
  "AI response rating", "Hindi-English translation", "Localization review", 
  "Search result evaluation", "Text classification", "Data labeling", 
  "Quality assurance", "Grammar and readability checks", "Attention to detail", 
  "Guideline-based task completion", "Remote freelance communication"
];

const tools = [
  "Google Docs", "Google Sheets", "Microsoft Excel", "Transcription tools", 
  "AI evaluation platforms", "Freelance platforms", "Web research tools", 
  "ChatGPT-assisted productivity"
];

export default function PortfolioContent() {
  return (
    <section className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 lg:px-24 text-white font-light">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* About Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Me</h2>
          <div className="text-gray-300 text-lg md:text-xl space-y-6 max-w-4xl leading-relaxed">
            <p>
              I am a detail-oriented freelancer specializing in AI data annotation, transcription, content evaluation, and Hindi-English language support. I enjoy working on projects that require careful listening, accurate judgment, clean formatting, and strong quality control. My goal is to help AI systems understand language better by providing reliable human-reviewed data.
            </p>
            <p>
              I can work on audio transcription, speaker labeling, AI response rating, search result evaluation, text classification, data labeling, translation review, and content quality checks. I am comfortable following detailed project guidelines and delivering consistent, well-structured work.
            </p>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={service.id} className="bg-white/[0.03] border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:bg-white/[0.05] transition-colors">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">Portfolio Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={project.id}>
                <div
                  className="group relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 p-8 backdrop-blur-md transition-all hover:bg-white/[0.05] hover:border-white/20 h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-400 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      View Case Study <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Skills & Tools Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-8">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-8">Tools & Platforms</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Work Style Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Work Style</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl leading-relaxed">
            I follow instructions carefully, review my work before submission, and focus on accuracy over speed. I am reliable, adaptable, and comfortable working with detailed guidelines for AI training and freelance projects.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center py-24 border-t border-white/10"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Looking for a reliable freelancer for AI data annotation, transcription, translation, or content evaluation projects? Let’s create clean, accurate, and high-quality data.
          </p>
          <a href="mailto:anishsharma4469@gmail.com?subject=Project%20Inquiry%20-%20AI%20Data%20Annotation%20%2F%20Transcription" className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 mb-6">
            Get In Touch
          </a>
          <div>
            <a href="mailto:anishsharma4469@gmail.com?subject=Project%20Inquiry%20-%20AI%20Data%20Annotation%20%2F%20Transcription" className="text-gray-400 hover:text-white transition-colors text-lg tracking-wide">
              anishsharma4469@gmail.com
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
