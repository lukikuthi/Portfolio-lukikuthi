import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucas-kikuthi-866358246/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/lukikuthi",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/lukikuthi.dev/",
  },
  {
    icon: Mail,
    label: "E-mail",
    href: "https://mail.google.com/mail/?view=cm&to=lucaskikuthi@gmail.com",
  },
];

const Hero = () => {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <motion.p
          variants={item}
          className="text-muted-foreground text-sm md:text-base font-medium tracking-widest uppercase mb-6"
        >
          lukikuthi.dev
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-4"
          style={{ letterSpacing: "-0.04em" }}
        >
          Olá, me chamo <span className="text-foreground">Lucas</span>.
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-6"
          style={{ letterSpacing: "-0.03em" }}
        >
          Sou desenvolvedor Full Stack.
        </motion.h2>

        <motion.p
          variants={item}
          className="section-subtext max-w-xl mx-auto mb-10"
        >
          Construo aplicações modernas, organizadas e orientadas a resultado.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3 justify-center">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="apple-button inline-flex items-center gap-2"
            >
              <s.icon size={16} />
              {s.label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
