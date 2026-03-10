import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/40">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl font-semibold tracking-tight mb-2">
          lukikuthi.dev
        </p>
        <p className="text-sm mb-8" style={{ color: "hsl(var(--text-secondary))" }}>
          Construindo com cuidado, entregando com qualidade.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <a
            href="https://www.linkedin.com/in/lucas-kikuthi-866358246/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-muted hover:-translate-y-1"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/lukikuthi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-muted hover:-translate-y-1"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.instagram.com/lukikuthi.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-muted hover:-translate-y-1"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=lucaskikuthi@gmail.com"
            target="_self"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-muted hover:-translate-y-1"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lucas Kikuthi. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
