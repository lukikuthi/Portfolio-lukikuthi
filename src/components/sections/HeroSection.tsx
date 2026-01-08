import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import SocialButton from "../SocialButton";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Animated glow behind name */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(ellipse, hsl(var(--glow-primary) / 0.5) 0%, transparent 70%)",
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main name */}
        <motion.h1
          className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="relative inline-block">
            {/* Shimmer light effect */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                maskImage: "linear-gradient(to right, transparent, white, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, white, transparent)",
              }}
              animate={{
                backgroundPosition: ["-200% 0%", "200% 0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {/* Glow pulse behind text */}
            <motion.span
              className="absolute inset-0 blur-2xl opacity-50"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.4), transparent)",
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="relative glow-text text-foreground">lukikuthi</span>
          </span>
          <span className="text-primary">.dev</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Desenvolvedor Full-Stack focado em criar 
          <br className="hidden sm:block" />
          experiências digitais extraordinárias
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-sm sm:text-base text-muted-foreground/70 font-mono mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {"// Design • Código • Performance"}
        </motion.p>

        {/* Social buttons */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <SocialButton icon={Github} href="https://github.com/lukikuthi" label="GitHub" />
          <SocialButton icon={Linkedin} href="https://www.linkedin.com/in/lucas-kikuthi-866358246/" label="LinkedIn" />
          <SocialButton icon={Instagram} href="https://www.instagram.com/lukikuthi.dev/" label="Instagram" />
          <SocialButton icon={Mail} href="https://mail.google.com/mail/?view=cm&to=lucaskikuthi@gmail.com" label="Email" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
