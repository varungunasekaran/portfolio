import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import ExperienceSection from '@/components/Experience';
import SkillsSection from '@/components/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faProjectDiagram, faRocket, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: 'Dynamic Form Builder (ValGenesis NextGen)',
    description: 'A highly flexible, schema-driven form builder powering dynamic business processes for ValGenesis NextGen. Enables business users to create, manage, and deploy complex forms without code. Supports conditional logic, validation, and real-time collaboration.',
    tags: ['React', 'TypeScript', 'Micro-Frontend', 'ValGenesis', 'Dynamic UI'],
    icon: faCogs,
    highlight: true,
  },
  {
    title: 'Workflow Automation (ValGenesis NextGen)',
    description: 'Designed and implemented a robust workflow engine for ValGenesis NextGen, enabling multi-stage approvals, real-time feedback, and seamless integration with cloud-native services. Critical for regulated industries.',
    tags: ['.NET Core', 'SignalR', 'Azure', 'Workflow', 'ValGenesis'],
    icon: faProjectDiagram,
    highlight: true,
  },
  {
    title: 'Micro-Frontend Platform',
    description: 'Led architecture and implementation of a scalable micro-frontend platform, enabling independent deployment and integration of UI modules across teams.',
    tags: ['Micro-Frontend', 'Module Federation', 'React', 'Angular'],
    icon: faRocket,
    highlight: true,
  },
  {
    title: 'Healthcare SaaS Portal',
    description: 'Developed a cloud-based healthcare management portal with secure patient data, appointment scheduling, and third-party integrations.',
    tags: ['Azure', 'React', 'C#', 'Healthcare'],
    icon: faCheckCircle,
    highlight: true,
  },
  {
    title: 'CI/CD Automation',
    description: 'Automated build, test, and deployment pipelines using Azure DevOps and GitHub Actions, reducing release times and improving reliability.',
    tags: ['Azure DevOps', 'GitHub Actions', 'CI/CD'],
    icon: faRocket,
    highlight: true,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      <div className="relative z-10">
        <NavBar />
        <section id="home"><Hero /></section>
        <section id="about" className="py-24 flex items-center justify-center">
          <div className="max-w-3xl mx-auto p-8 rounded-3xl shadow-xl bg-white/90 dark:bg-gray-900/90 border border-slate-100 dark:border-gray-800 backdrop-blur-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-blue-300">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">
              I am Varun Gunasekaran, a passionate Senior Software Engineer specializing in cloud-native web applications and digital transformation for regulated industries.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">
              I love building scalable, maintainable, and beautiful products using modern technologies like React, Angular, .NET Core, and Azure. My focus is on delivering business value through clean code, great UX, and robust architecture.
            </p>
          </div>
        </section>
        <section id="skills"><SkillsSection /></section>
        <section id="experience"><ExperienceSection /></section>
        <section id="projects" className="py-24 flex flex-col items-center justify-center">
          <div className="max-w-5xl w-full px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-800 dark:text-blue-300">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, idx) => (
                <div
                  key={project.title}
                  className={`rounded-2xl shadow-xl border-2 p-6 flex flex-col items-start bg-white/90 dark:bg-gray-900/90 border-slate-100 dark:border-gray-800 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${project.highlight ? 'ring-2 ring-blue-400 dark:ring-blue-600' : ''}`}
                >
                  <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={project.icon} className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
                    <span className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="py-24 flex items-center justify-center">
          <div className="max-w-2xl mx-auto p-8 rounded-3xl shadow-xl bg-white/90 dark:bg-gray-900/90 border border-slate-100 dark:border-gray-800 backdrop-blur-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-pink-700 dark:text-pink-300">Contact</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">
              Feel free to reach out to me via email at <a href="mailto:harivarun05@gmail.com" className="text-blue-600 dark:text-blue-400 underline">harivarun05@gmail.com</a> or connect with me on LinkedIn.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
