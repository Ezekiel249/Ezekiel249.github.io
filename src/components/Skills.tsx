
import {
  Code2,
  Palette,
  Server,
  Database,
  Wrench,
  GitBranch,
  Workflow,
  Network,
  ShieldCheck,
  Terminal,
  BrainCircuit,
  Globe,
  MonitorCog,
  Layers3,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible and interactive user interfaces.",
    icon: Code2,
    accent: "from-blue-500 to-cyan-500",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing application logic, APIs and secure server-side systems.",
    icon: Server,
    accent: "from-violet-500 to-purple-500",
    skills: [
      "Laravel",
      "PHP",
      "Node.js",
      "REST APIs",
      "Authentication",
      "Role-Based Access Control",
      "API Integration",
    ],
  },
  {
    title: "Database Management",
    description: "Structuring, managing and working with application data.",
    icon: Database,
    accent: "from-emerald-500 to-teal-500",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "SQL",
      "Database Design",
      "Query Management",
    ],
  },
  {
    title: "Tools & Technologies",
    description: "Using modern tools to improve development and collaboration.",
    icon: Wrench,
    accent: "from-orange-500 to-amber-500",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "Figma",
      "Power Automate",
      "OpenAI API",
      "Whisper",
    ],
  },
  {
    title: "IT Operations & Infrastructure",
    description: "Supporting enterprise systems, computer equipment and networks.",
    icon: Network,
    accent: "from-sky-500 to-indigo-500",
    skills: [
      "Computer Maintenance",
      "Hardware Troubleshooting",
      "Software Support",
      "LAN Networking",
      "Active Directory",
      "LDAP",
      "Linux",
      "Apache",
      "cPanel",
    ],
  },
  {
    title: "Automation & AI Integration",
    description: "Connecting intelligent services and automating business processes.",
    icon: BrainCircuit,
    accent: "from-pink-500 to-rose-500",
    skills: [
      "AI API Integration",
      "LLM Integration",
      "Voice Automation",
      "Workflow Automation",
      "Document Generation",
      "Report Automation",
    ],
  },
];

const SkillCategory = ({
  category,
}: {
  category: (typeof skillCategories)[number];
}) => {
  const Icon = category.icon;

  return (
    <Card className="group h-full overflow-hidden border border-gray-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-portfolio-primary/40 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/80">
      <CardContent className="p-6 sm:p-7">
        <div className="mb-5 flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon size={23} />
          </div>

          <ArrowUpRight
            size={19}
            className="text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-portfolio-primary"
          />
        </div>

        <h3 className="mb-2 text-lg font-bold text-portfolio-secondary dark:text-white">
          {category.title}
        </h3>

        <p className="mb-6 min-h-[48px] text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {category.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 transition-colors duration-200 hover:border-portfolio-primary/40 hover:bg-portfolio-primary/5 hover:text-portfolio-primary dark:border-gray-600 dark:bg-gray-700/60 dark:text-gray-200 dark:hover:border-portfolio-primary/50 dark:hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gray-50 py-16 dark:bg-gray-900 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-portfolio-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-portfolio-accent/5 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-portfolio-primary/20 bg-portfolio-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-primary">
              <Sparkles size={14} />
              Technical Expertise
            </span>

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-portfolio-secondary dark:text-white sm:text-4xl lg:text-5xl">
              Skills &{" "}
              <span className="text-portfolio-primary">Technologies</span>
            </h2>

            <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-portfolio-primary to-portfolio-accent" />

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base lg:text-lg">
              A combination of software development, database management,
              automation and IT infrastructure skills that I use to build
              practical solutions and support technology-driven operations.
            </p>
          </div>

          {/* Skills categories */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {skillCategories.map((category) => (
              <SkillCategory
                key={category.title}
                category={category}
              />
            ))}
          </div>

          {/* Learning and growth section */}
          <div className="mt-14 sm:mt-16">
            <Card className="relative mx-auto max-w-5xl overflow-hidden border-0 bg-gradient-to-br from-portfolio-secondary to-gray-900 text-white shadow-xl">
              <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-5 -top-10 h-44 w-44 rounded-full border border-white/10" />

              <CardContent className="relative flex flex-col gap-8 p-7 sm:p-9 md:flex-row md:items-center md:justify-between md:p-12">
                <div className="max-w-2xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-100">
                    <Sparkles size={14} />
                    Continuous Learning
                  </div>

                  <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                    Always Learning. Always Building.
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                    Technology keeps evolving, and so does my approach to
                    development. I continuously explore new tools, improve my
                    technical skills and work on practical projects that help
                    me build better, more reliable software solutions.
                  </p>
                </div>

                <div className="grid shrink-0 grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { name: "Next.js", icon: Globe },
                    { name: "GraphQL", icon: Layers3 },
                    { name: "Cloud Technologies", icon: Server },
                    { name: "Advanced AI", icon: BrainCircuit },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.name}
                        className="flex min-h-[76px] min-w-[125px] flex-col justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                      >
                        <Icon size={19} className="text-blue-300" />
                        <span className="text-xs font-medium text-gray-200">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
