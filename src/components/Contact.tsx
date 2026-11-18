
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  ArrowUpRight,
  MessageCircle,
  Clock,
  CheckCircle2,
  Sparkles,
  Copy,
  ExternalLink,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Address",
    value: "adelowopeoluwa249@gmail.com",
    link: "mailto:adelowopeoluwa249@gmail.com",
    description: "Send me an email anytime",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+234 9075624905",
    link: "tel:+2349075624905",
    description: "Available for calls and discussions",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ibadan, Nigeria",
    link: null,
    description: "Open to remote opportunities",
  },
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    username: "@Ezekiel249",
    url: "https://github.com/Ezekiel249",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    username: "Connect professionally",
    url: "https://www.linkedin.com/in/opeoluwa-adelowo-756920331",
  },
];

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const recipient = "adelowopeoluwa249@gmail.com";

    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Hello Adelowo,\n\n${formData.message}\n\nRegards,\n${formData.name}\n${formData.email}`
    );

    const mailtoLink = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;

    try {
      window.location.href = mailtoLink;

      toast({
        title: "Email draft prepared",
        description:
          "Your email application should open with your message ready to send.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      toast({
        title: "Unable to open email application",
        description:
          "Please contact me directly using the email address provided.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        "adelowopeoluwa249@gmail.com"
      );

      toast({
        title: "Email copied",
        description: "Email address copied to clipboard.",
      });
    } catch {
      toast({
        title: "Copy unavailable",
        description: "Please copy the email address manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="contact"
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
              <MessageCircle size={14} />
              Get In Touch
            </span>

            <h2 className="mb-5 text-3xl font-bold tracking-tight text-portfolio-secondary dark:text-white sm:text-4xl lg:text-5xl">
              Let's Start a{" "}
              <span className="text-portfolio-primary">Conversation</span>
            </h2>

            <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-portfolio-primary to-portfolio-accent" />

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base lg:text-lg">
              Have a project in mind, need a developer, or want to discuss
              an opportunity? I'd be happy to hear from you. Let's connect
              and explore how we can work together.
            </p>
          </div>

          {/* Main contact layout */}
          <div className="grid items-start gap-7 lg:grid-cols-5 lg:gap-8">

            {/* Contact information */}
            <div className="space-y-6 lg:col-span-2">

              <div>
                <h3 className="mb-2 text-xl font-bold text-portfolio-secondary dark:text-white sm:text-2xl">
                  Contact Information
                </h3>

                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  Feel free to reach out through any of the channels below.
                  I'm always open to meaningful conversations and new opportunities.
                </p>
              </div>

              {/* Contact details */}
              <div className="space-y-3">
                {contactInfo.map((info) => {
                  const Icon = info.icon;

                  return (
                    <Card
                      key={info.title}
                      className="group border border-gray-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-portfolio-primary/40 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                    >
                      <CardContent className="flex items-center gap-4 p-4 sm:p-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-portfolio-primary/10 text-portfolio-primary transition-colors duration-300 group-hover:bg-portfolio-primary group-hover:text-white">
                          <Icon size={21} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                            {info.title}
                          </p>

                          {info.link ? (
                            <a
                              href={info.link}
                              className="break-all text-sm font-semibold text-portfolio-secondary transition-colors hover:text-portfolio-primary dark:text-white sm:text-base"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm font-semibold text-portfolio-secondary dark:text-white sm:text-base">
                              {info.value}
                            </p>
                          )}

                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            {info.description}
                          </p>
                        </div>

                        {info.link && (
                          <ArrowUpRight
                            size={17}
                            className="shrink-0 text-gray-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-portfolio-primary"
                          />
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social links */}
              <Card className="border border-gray-200/80 bg-white dark:border-gray-700 dark:bg-gray-800">
                <CardContent className="p-5 sm:p-6">
                  <h4 className="mb-4 font-bold text-portfolio-secondary dark:text-white">
                    Connect With Me
                  </h4>

                  <div className="space-y-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;

                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-xl border border-gray-100 p-3 transition-all hover:border-portfolio-primary/30 hover:bg-portfolio-primary/5 dark:border-gray-700 dark:hover:bg-gray-700/60"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition-colors group-hover:bg-portfolio-primary group-hover:text-white dark:bg-gray-700 dark:text-gray-200">
                            <Icon size={19} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-portfolio-secondary dark:text-white">
                              {social.name}
                            </p>
                            <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                              {social.username}
                            </p>
                          </div>

                          <ExternalLink
                            size={16}
                            className="shrink-0 text-gray-400 group-hover:text-portfolio-primary"
                          />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Availability card */}
              <Card className="overflow-hidden border-0 bg-gradient-to-br from-portfolio-primary to-portfolio-accent text-white shadow-xl">
                <CardContent className="relative p-6 sm:p-7">
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/20" />

                  <div className="relative">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-green-300 shadow-[0_0_12px_rgba(134,239,172,0.9)]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-50">
                        Open to Opportunities
                      </span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold">
                      Let's Work Together
                    </h3>

                    <p className="mb-6 text-sm leading-relaxed text-blue-50">
                      Interested in software development projects,
                      collaborations or professional opportunities?
                      Let's discuss your ideas.
                    </p>

                    <a
                      href="https://wa.me/2349075624905"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="secondary"
                        className="w-full bg-white font-semibold text-portfolio-primary hover:bg-gray-100 sm:w-auto"
                      >
                        <MessageCircle size={17} className="mr-2" />
                        Chat on WhatsApp
                        <ArrowUpRight size={16} className="ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact form */}
            <Card className="overflow-hidden border border-gray-200/80 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800 lg:col-span-3">
              <div className="h-1.5 w-full bg-gradient-to-r from-portfolio-primary to-portfolio-accent" />

              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="mb-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-portfolio-primary/10 text-portfolio-primary">
                    <Send size={22} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-portfolio-secondary dark:text-white sm:text-2xl">
                    Send Me a Message
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    Fill out the form below with your details and message.
                    I'll be glad to hear from you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="text-sm font-semibold text-gray-700 dark:text-gray-200"
                      >
                        Your Name
                      </label>

                      <Input
                        id="contact-name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="h-12 border-gray-200 bg-gray-50 text-sm dark:border-gray-600 dark:bg-gray-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-email"
                        className="text-sm font-semibold text-gray-700 dark:text-gray-200"
                      >
                        Email Address
                      </label>

                      <Input
                        id="contact-email"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="h-12 border-gray-200 bg-gray-50 text-sm dark:border-gray-600 dark:bg-gray-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-subject"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-200"
                    >
                      Subject
                    </label>

                    <Input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="What would you like to discuss?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-12 border-gray-200 bg-gray-50 text-sm dark:border-gray-600 dark:bg-gray-700"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-200"
                    >
                      Your Message
                    </label>

                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell me about your project, idea or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      rows={6}
                      className="resize-none border-gray-200 bg-gray-50 text-sm leading-relaxed dark:border-gray-600 dark:bg-gray-700"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="h-12 w-full bg-portfolio-primary font-semibold text-white shadow-lg shadow-portfolio-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-xl disabled:opacity-60"
                  >
                    <Send size={17} className="mr-2" />
                    {isSubmitting ? "Preparing Email..." : "Send Message"}
                    <ArrowUpRight size={17} className="ml-2" />
                  </Button>

                  <p className="flex items-center justify-center gap-2 text-center text-xs text-gray-400">
                    <CheckCircle2 size={14} className="text-green-500" />
                    Your message will be prepared in your email application.
                  </p>
                </form>

                {/* Direct email */}
                <div className="mt-8 border-t border-gray-100 pt-6 dark:border-gray-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Prefer to email me directly?
                      </p>
                      <p className="mt-1 break-all text-sm font-semibold text-portfolio-secondary dark:text-white">
                        adelowopeoluwa249@gmail.com
                      </p>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={copyEmail}
                      className="shrink-0"
                    >
                      <Copy size={14} className="mr-2" />
                      Copy Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Clock size={15} />
              I look forward to hearing from you.
              <Sparkles size={15} className="text-portfolio-primary" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
