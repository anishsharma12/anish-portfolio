import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import ProjectClientView from "@/components/ProjectClientView";

// Generate static params for all projects
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectClientView project={project}>
      {/* Objective & Role */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl">
        <div>
          <h2 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4">Objective</h2>
          <p className="text-gray-300 leading-relaxed">{project.objective}</p>
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-4">My Role</h2>
          <p className="text-gray-300 leading-relaxed font-medium">{project.myRole}</p>
          
          <h2 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mt-8 mb-4">Tools Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.toolsUsed.map((tool: string) => (
              <span key={tool} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Workflow</h2>
        <div className="space-y-4">
          {project.workflow.map((step: string, index: number) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-sm font-medium mr-4">
                {index + 1}
              </div>
              <p className="text-gray-300 leading-relaxed pt-1">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Output */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Sample Output</h2>
        <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 overflow-x-auto">
          <pre className="text-gray-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">
            {project.sampleOutput}
          </pre>
        </div>
      </div>

      {/* Quality Checklist */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Quality Checklist</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.qualityChecklist.map((item: string, index: number) => (
            <li key={index} className="flex items-center text-gray-300 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
              <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Final Outcome */}
      <div className="bg-gradient-to-r from-blue-900/20 to-transparent border-l-4 border-blue-500 p-8 rounded-r-2xl">
        <h2 className="text-xl font-bold mb-3 text-white">Final Outcome</h2>
        <p className="text-blue-100/80 leading-relaxed text-lg">
          {project.finalOutcome}
        </p>
      </div>

      {/* Footer CTA */}
      <div className="mt-24 pt-12 border-t border-white/10 text-center">
        <h2 className="text-2xl font-bold mb-6">Need similar results for your project?</h2>
        <Link href="/" className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
          Let's discuss your data needs
        </Link>
      </div>
    </ProjectClientView>
  );
}
