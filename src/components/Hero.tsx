
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Code2,
  Terminal,
  Database,
  Server,
  Braces,
  Layers3,
  Sparkles,
  MapPin,
} from "lucide-react";

const technologies = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Braces },
  { name: "Laravel", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "Tailwind CSS", icon: Layers3 },
  { name: "REST APIs", icon: Terminal },
];

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-gray-100 px-4 pb-16 pt-28 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 sm:px-6 lg:px-8"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-portfolio-primary/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-portfolio-accent/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(#64748b 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10 xl:gap-16">

          {/* Left: Introduction */}
          <div className="animate-fade-in text-center lg:text-left">


            {/* Greeting */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-portfolio-primary sm:text-base">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="mb-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-portfolio-secondary dark:text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Adelowo
              <span className="block bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent">
                Opeoluwa Ezekiel.
              </span>
            </h1>

            {/* Professional title */}
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-base font-medium text-gray-600 dark:text-gray-300 sm:text-lg lg:justify-start lg:text-xl">
              <span>Software Developer</span>
              <span className="h-1 w-1 rounded-full bg-portfolio-primary" />
              <span>IT Professional</span>
            </div>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-xl text-sm leading-8 text-gray-600 dark:text-gray-400 sm:text-base lg:mx-0 lg:text-lg">
              I build modern web applications and practical digital solutions
              using technologies like React, TypeScript, Laravel and
              PostgreSQL. I also bring hands-on experience in IT operations,
              infrastructure and technical support.
            </p>

            {/* Location */}
            <div className="mb-9 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 lg:justify-start">
              <MapPin size={16} className="text-portfolio-primary" />
              <span>Ibadan, Nigeria</span>
            </div>

            {/* CTA buttons */}
            <div className="mb-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="h-12 w-full bg-portfolio-primary px-7 font-semibold text-white shadow-lg shadow-portfolio-primary/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl sm:w-auto"
              >
                Explore My Projects
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>

              <a
                href="/Adelowo_Opeoluwa_Resume.pdf"
                download="Adelowo_Opeoluwa_Resume.pdf"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 w-full border-gray-300 bg-white/70 px-7 font-semibold text-portfolio-secondary transition-all duration-300 hover:-translate-y-1 hover:border-portfolio-primary hover:bg-portfolio-primary hover:text-white dark:border-gray-700 dark:bg-gray-800/70 dark:text-white dark:hover:border-portfolio-primary sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Connect
              </span>

              <a
                href="https://github.com/Ezekiel249"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-portfolio-primary hover:text-portfolio-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                <Github size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/adelowopeoluwa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-portfolio-primary hover:text-portfolio-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </div>

          {/* Right: Developer visual */}
          <div className="relative mx-auto w-full max-w-[520px]">

            {/* Decorative circles */}
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-portfolio-primary/20" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full border border-portfolio-accent/20" />

            {/* Main visual card */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/80 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur-xl dark:border-gray-700 dark:bg-gray-800/80 sm:p-7">

              {/* Card top bar */}
              <div className="mb-7 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="font-mono text-xs text-gray-400">
                  developer.profile
                </span>

                <Code2 size={18} className="text-portfolio-primary" />
              </div>

              {/* Code introduction */}
              <div className="mb-8 space-y-3 font-mono text-xs sm:text-sm">
                <p className="text-gray-400">
                  <span className="text-purple-500">const</span>{" "}
                  <span className="text-portfolio-primary">developer</span> = {"{"}
                </p>

                <div className="space-y-2 pl-5">
                  <p className="break-all text-gray-600 dark:text-gray-300">
                    name:{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "Adelowo Opeoluwa"
                    </span>,
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    role:{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "Software Developer"
                    </span>,
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    focus:{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "Web Applications"
                    </span>,
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    location:{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "Nigeria"
                    </span>,
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    mindset:{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "Always Learning"
                    </span>
                  </p>
                </div>

                <p className="text-gray-400">{"};"}</p>
              </div>

              {/* Divider */}
              <div className="mb-6 h-px bg-gray-200 dark:bg-gray-700" />

              {/* Technologies */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold text-portfolio-secondary dark:text-white">
                  Technologies I Work With
                </h3>

                <Sparkles size={16} className="text-portfolio-primary" />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {technologies.map((technology) => {
                  const Icon = technology.icon;

                  return (
                    <div
                      key={technology.name}
                      className="group flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-3 py-3 transition-all duration-300 hover:border-portfolio-primary/40 hover:bg-portfolio-primary/5 dark:border-gray-700 dark:bg-gray-700/50"
                    >
                      <Icon
                        size={17}
                        className="shrink-0 text-portfolio-primary transition-transform group-hover:scale-110"
                      />

                      <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                        {technology.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom card information */}
              <div className="mt-7 flex items-center justify-between border-t border-gray-200 pt-5 dark:border-gray-700">
                <div>
                  <p className="text-xs text-gray-400">
                    Current focus
                  </p>
                  <p className="mt-1 text-sm font-semibold text-portfolio-secondary dark:text-white">
                    Building Digital Solutions
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-portfolio-primary/10 text-portfolio-primary">
                  <Terminal size={22} />
                </div>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-7 right-4 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl dark:border-gray-700 dark:bg-gray-800 sm:-right-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <Code2 size={20} />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  What I do
                </p>
                <p className="text-sm font-bold text-portfolio-secondary dark:text-white">
                  Develop. Build. Improve.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 hidden justify-center lg:flex">
          <button
            onClick={() => scrollToSection("about")}
            className="group flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-portfolio-primary"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Scroll to explore
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 transition-all group-hover:border-portfolio-primary group-hover:translate-y-1 dark:border-gray-700">
              <ArrowDown size={16} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
