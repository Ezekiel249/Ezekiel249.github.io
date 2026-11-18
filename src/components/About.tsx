
import { Card } from '@/components/ui/card';
import {
  Code2,
  ServerCog,
  Workflow,
  ArrowUpRight,
  MapPin,
  BriefcaseBusiness,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      number: '01',
      title: 'Software Development',
      description:
        'Building responsive, scalable web applications with React, TypeScript, JavaScript, Laravel and modern development tools.',
      tags: ['React', 'TypeScript', 'Laravel'],
    },
    {
      icon: ServerCog,
      number: '02',
      title: 'IT Operations & Infrastructure',
      description:
        'Supporting enterprise IT environments through computer maintenance, troubleshooting, networking and system administration.',
      tags: ['Networking', 'Linux', 'Active Directory'],
    },
    {
      icon: Workflow,
      number: '03',
      title: 'Automation & Integration',
      description:
        'Developing workflow solutions, integrating REST APIs and implementing systems that simplify business processes.',
      tags: ['REST APIs', 'Power Automate', 'AI Integration'],
    },
  ];

  const technologies = [
    'React',
    'TypeScript',
    'JavaScript',
    'Laravel',
    'PHP',
    'Tailwind CSS',
    'PostgreSQL',
    'MySQL',
    'Git',
    'REST APIs',
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section Heading */}
          <div className="mb-14 lg:mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-portfolio-primary" />
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-portfolio-primary">
                Get to know me
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 items-end">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-portfolio-secondary dark:text-white leading-tight">
                More Than Just
                <span className="block text-portfolio-primary">
                  Writing Code.
                </span>
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed lg:max-w-lg lg:ml-auto">
                I combine software development, problem-solving and
                IT infrastructure knowledge to build meaningful
                digital solutions.
              </p>
            </div>
          </div>

          {/* Main About Content */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Profile Image */}
            <div className="lg:col-span-5 order-1">
              <div className="relative max-w-md mx-auto lg:mx-0">

                {/* Decorative Frame */}
                <div className="absolute -top-5 -left-5 w-full h-full border-2 border-portfolio-primary/30 rounded-3xl" />

                <div className="relative overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-800 shadow-2xl aspect-[4/5]">
                  <img
                    src="/Profile.png"
                    alt="Adelowo Opeoluwa"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />

                  {/* Image Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

                  {/* Image Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/80 mb-3">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      Professional Profile
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Adelowo Opeoluwa
                    </h3>

                    <p className="text-white/80 mt-2 text-sm sm:text-base">
                      Software Developer & IT Operations Assistant
                    </p>
                  </div>
                </div>

                {/* Floating Location Card */}
                <div className="absolute -bottom-6 -right-3 sm:-right-8 bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-4 sm:p-5 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-portfolio-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-portfolio-primary" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Based in
                      </p>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        Ibadan, Nigeria
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* About Text */}
            <div className="lg:col-span-7 order-2 space-y-7">

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-portfolio-primary/10 text-portfolio-primary text-xs font-semibold mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  A little about me
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-portfolio-secondary dark:text-white mb-5 leading-snug">
                  Turning Ideas Into
                  <span className="text-portfolio-primary">
                    {' '}Practical Digital Solutions.
                  </span>
                </h3>

                <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-8">
                  <p>
                    I'm <strong className="text-gray-900 dark:text-white">Adelowo Opeoluwa</strong>,
                    a software developer and IT professional based in
                    Ibadan, Nigeria. I currently work as an
                    <strong className="text-gray-900 dark:text-white">
                      {' '}IT Operations Assistant (Contract) at the
                      International Institute of Tropical Agriculture (IITA).
                    </strong>
                  </p>

                  <p>
                    My primary focus is software development, particularly
                    building modern enterprise web applications using
                    React, TypeScript, JavaScript, Laravel, PostgreSQL
                    and other modern technologies. I enjoy developing
                    responsive interfaces, reusable components, secure
                    authentication systems, API integrations and workflow
                    management solutions that solve real organizational
                    problems.
                  </p>

                  <p>
                    Beyond development, my IT operations experience has
                    given me practical exposure to computer hardware and
                    software maintenance, troubleshooting, networking,
                    system administration and enterprise infrastructure.
                    My earlier technical internship at Datacomm also
                    provided hands-on exposure to inverter systems,
                    CCTV installation and technical equipment maintenance.
                  </p>

                  <p>
                    I am passionate about continuous learning, exploring
                    emerging technologies and creating software that
                    combines functionality, performance and a great
                    user experience.
                  </p>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="pt-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-portfolio-secondary dark:text-white mb-4">
                  Technologies I Work With
                </h4>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-portfolio-primary hover:text-portfolio-primary transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Professional Information */}
              <div className="flex flex-wrap gap-4 pt-2">

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-portfolio-primary/10 flex items-center justify-center">
                    <BriefcaseBusiness className="w-5 h-5 text-portfolio-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Current Position
                    </p>
                    <p className="text-sm font-semibold text-portfolio-secondary dark:text-white">
                      IT Operations Assistant
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-portfolio-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-portfolio-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Primary Focus
                    </p>
                    <p className="text-sm font-semibold text-portfolio-secondary dark:text-white">
                      Software Development
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="mt-24 lg:mt-32">

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-sm font-semibold text-portfolio-primary uppercase tracking-widest">
                  What I bring to the table
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-portfolio-secondary dark:text-white mt-3">
                  My Areas of Expertise
                </h3>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
                Combining development skills and technical knowledge
                to deliver reliable solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {highlights.map((item) => (
                <Card
                  key={item.number}
                  className="group relative overflow-hidden p-6 sm:p-7 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl hover:-translate-y-2 hover:shadow-xl hover:border-portfolio-primary/40 transition-all duration-300"
                >
                  {/* Card Number */}
                  <div className="absolute top-5 right-6 text-5xl font-bold text-gray-100 dark:text-gray-800 group-hover:text-portfolio-primary/10 transition-colors">
                    {item.number}
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-portfolio-primary/10 flex items-center justify-center mb-6 group-hover:bg-portfolio-primary transition-colors duration-300">
                      <item.icon className="w-7 h-7 text-portfolio-primary group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h4 className="text-lg font-bold text-portfolio-secondary dark:text-white mb-3">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-7 mb-6">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-end mt-5">
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-portfolio-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
