import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <div className="text-lg font-semibold text-foreground">
            lukikuthi<span className="text-primary">.dev</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2026 Lucas Kikuthi. Todos os direitos reservados.
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#projects" className="hover:text-primary transition-colors">
              Projetos
            </a>
            <a href="#process" className="hover:text-primary transition-colors">
              Processo
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">
              Início
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
