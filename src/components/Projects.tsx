
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Code2,
  ShoppingBag,
  Monitor,
  Workflow,
  Vote,
  Mic2,
  Database,
  Layers3,
} from 'lucide-react';

// Project Data
const projects = [
  {
    title: 'Maintenance Management System',
    category: 'Enterprise Application',
    description:
      'An enterprise platform for managing maintenance requests, organizational assets and operational activities. Includes dynamic forms, role-based access, reporting and automated document generation.',
    image: null,
    icon: Monitor,
    color: 'from-blue-600 to-indigo-700',
    tech: ['Laravel', 'React', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '',
    githubUrl: '',
    featured: true,
  },
  {
    title: 'Enterprise Approval Platform',
    category: 'Workflow Management',
    description:
      'A workflow management platform designed to streamline organizational approval processes through secure authentication, role-based permissions, approval dashboards and reporting.',
    image: null,
    icon: Workflow,
    color: 'from-violet-600 to-purple-800',
    tech: ['React', 'TypeScript', 'Laravel', 'PostgreSQL'],
    liveUrl: '',
    githubUrl: '',
    featured: true,
  },
  {
    title: 'Online Voting Platform',
    category: 'Election Management',
    description:
      'A secure election management platform featuring voter verification, election administration, real-time monitoring and live dashboard updates using Server-Sent Events.',
    image: null,
    icon: Vote,
    color: 'from-emerald-600 to-teal-800',
    tech: ['React', 'Laravel', 'PostgreSQL', 'SSE'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'AI Voice Receptionist',
    category: 'Artificial Intelligence',
    description:
      'An AI-powered voice receptionist integrating speech recognition, language models and employee directory lookup to support intelligent call handling and routing.',
    image: null,
    icon: Mic2,
    color: 'from-orange-500 to-rose-700',
    tech: ['Python', 'AI', 'REST APIs', 'Speech Recognition'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'Cowpea Genetic Resource Portal',
    category: 'Research & Data Management',
    description:
      'A research portal supporting genetic resource management through user registration, consent workflows, research forms, dashboards and secure profile management.',
    image: null,
    icon: Database,
    color: 'from-green-600 to-lime-800',
    tech: ['Laravel', 'PHP', 'Tailwind CSS'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'E-Commerce Web Application',
    category: 'E-Commerce',
    description:
      'An online shopping platform that enables customers to explore products and place orders through a responsive interface, with product management and administrative features.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&h=650&fit=crop',
    icon: ShoppingBag,
    color: 'from-cyan-600 to-blue-800',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    liveUrl: 'https://sowerventures.onrender.com/',
    githubUrl: 'https://github.com/Ezekiel249/Sower-Ventures',
    featured: false,
  },
  {
    title: 'IITA Asset Management System',
    category: 'Asset Management',
    description:
      'An internal asset management solution designed to support organizational asset tracking, data management and administrative monitoring through a secure backend and user-friendly interface.',
    image:
      'https://20597294.fs1.hubspotusercontent-na1.net/hub/20597294/hubfs/1.%20Exploring%20IT%20asset%20management.png?width=1062',
    icon: Layers3,
    color: 'from-slate-600 to-blue-900',
    tech: ['React', 'Node.js', 'MySQL', 'Chart.js'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'WIDS Ibadan Website',
    category: 'Website Development',
    description:
      'A website project for Women in Data Science (WiDS) Ibadan, contributing to its online presence and providing a platform for visitors to learn about the organization and its activities.',
    image: null,
    icon: Layers3,
    color: 'from-fuchsia-600 to-purple-800',
    tech: ['Web Development', 'Responsive Design'],
    liveUrl: 'https://widsibadan.org/',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'Laravel Authors & Books API',
    category: 'Backend Development',
    description:
      'A RESTful backend application for managing authors and books, demonstrating API development, resource management and backend application structure.',
    image: null,
    icon: Code2,
    color: 'from-red-600 to-orange-800',
    tech: ['Laravel', 'PHP', 'REST API', 'API Security'],
    liveUrl: '',
    githubUrl: 'https://github.com/Ezekiel249/restful-api',
    featured: false,
  },
];

// Project Image / Preview
const ProjectVisual = ({ project }) => {
  const Icon = project.icon;

  return (
    <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <div
          className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute -top-16 -right-12 w-64 h-64 rounded-full border border-white/10" />

          <div className="absolute -bottom-24 -left-12 w-64 h-64 rounded-full border border-white/10" />

          <div className="relative z-10 w-24 h-24 rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Icon
              className="w-12 h-12 text-white"
              strokeWidth={1.5}
            />
          </div>

          <span className="absolute bottom-5 right-6 text-white/40 text-xs font-bold tracking-[0.3em] uppercase">
            Project Preview
          </span>
        </div>
      )}

      <div className="absolute top-4 left-4">
        <span className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-gray-900/90 text-portfolio-secondary dark:text-white text-xs font-semibold shadow-sm">
          {project.category}
        </span>
      </div>

      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

// Individual Project Card
const ProjectCard = ({ project }) => (
  <Card className="group h-full flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-portfolio-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

    <ProjectVisual project={project} />

    <CardContent className="p-5 sm:p-6 flex flex-col flex-1 min-h-[330px]">

      {/* Project Title */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg sm:text-xl font-bold text-portfolio-secondary dark:text-white group-hover:text-portfolio-primary transition-colors">
          {project.title}
        </h3>

        <ArrowUpRight className="w-5 h-5 shrink-0 text-gray-400 group-hover:text-portfolio-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-7 mb-6 flex-grow">
        {project.description}
      </p>

      {/* Technology Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1.5 rounded-md bg-portfolio-primary/10 text-portfolio-primary text-xs font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Buttons */}
      {(project.liveUrl || project.githubUrl) && (
        <div className="mt-auto pt-5 border-t border-gray-100 dark:border-gray-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {project.liveUrl && (
              <Button
                size="sm"
                className="w-full min-w-0 bg-portfolio-primary hover:bg-portfolio-primary/90 text-white rounded-lg"
                asChild
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>Live Demo</span>
                </a>
              </Button>
            )}

            {project.githubUrl && (
              <Button
                size="sm"
                variant="outline"
                className="w-full min-w-0 border-gray-300 dark:border-gray-700 rounded-lg"
                asChild
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  <span>Source Code</span>
                </a>
              </Button>
            )}

          </div>
        </div>
      )}

    </CardContent>
  </Card>
);

// Main Projects Section
const Projects = () => {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-white dark:bg-gray-950"
    >

      {/* Background Decorations */}
      <div className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-portfolio-primary/5 blur-3xl pointer-events-none" />

      <div className="absolute bottom-20 -left-40 w-96 h-96 rounded-full bg-portfolio-accent/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="mb-14 lg:mb-20">

            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-portfolio-primary" />

              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-portfolio-primary">
                My Portfolio
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 items-end">

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-portfolio-secondary dark:text-white">
                Things I've
                <span className="block text-portfolio-primary">
                  Built & Created.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed lg:max-w-lg lg:ml-auto">
                A selection of software applications and technical
                projects showcasing my experience in frontend
                development, enterprise systems, backend engineering
                and automation.
              </p>

            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">

            <div className="flex items-center gap-3 mb-7">
              <span className="w-2 h-2 rounded-full bg-portfolio-primary" />

              <h3 className="text-lg font-bold text-portfolio-secondary dark:text-white">
                Featured Projects
              </h3>

              <span className="text-xs text-gray-400">
                Selected enterprise applications
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
            </div>

          </div>

          {/* Other Projects */}
          <div>

            <div className="flex items-center gap-3 mb-7">
              <span className="w-2 h-2 rounded-full bg-portfolio-primary" />

              <h3 className="text-lg font-bold text-portfolio-secondary dark:text-white">
                More Projects
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
            </div>

          </div>

          {/* GitHub CTA */}
          <div className="mt-16 lg:mt-20">

            <div className="relative overflow-hidden rounded-3xl bg-portfolio-secondary dark:bg-gray-900 px-6 py-10 sm:px-10 sm:py-12 text-center">

              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl" />

              <div className="relative z-10">

                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Github className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Explore More of My Work
                </h3>

                <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-7 leading-relaxed">
                  Discover more projects, source code and development
                  experiments on my GitHub profile.
                </p>

                <Button
                  size="lg"
                  className="bg-white text-portfolio-secondary hover:bg-gray-100 rounded-xl px-7"
                  asChild
                >
                  <a
                    href="https://github.com/Ezekiel249"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit My GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
