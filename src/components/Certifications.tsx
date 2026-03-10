import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { X, ArrowRight, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  institution: string;
  description: string;
  image: string;
  credentialUrl: string;
}

const certifications: Certification[] = [
  {
    title: "Meta React",
    institution: "Meta",
    description: "Especialização em desenvolvimento com React, abordando componentização, hooks, gerenciamento de estado, roteamento e construção de interfaces modernas e escaláveis.",
    image: "/images/certifications/certificado-meta.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/99YRHHMO9SZ6",
  },
  {
    title: "Google UX Design Professional Certificate",
    institution: "Google",
    description: "Formação completa em UX Design, incluindo pesquisa com usuários, criação de wireframes, prototipagem no Figma e princípios de experiência do usuário.",
    image: "/images/certifications/certificado-google.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/4E54UTNWAJN3",
  },
  {
    title: "Version Control",
    institution: "Meta",
    description: "Curso sobre controle de versão com Git e GitHub, abordando versionamento de código, criação de branches, colaboração em equipe e gerenciamento de histórico de projetos.",
    image: "/images/certifications/certificado-version.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/WOSNQIKMGMRA",
  },
  {
    title: "JavaScript Programming Essentials",
    institution: "IBM",
    description: "Formação em fundamentos de JavaScript, cobrindo lógica de programação, estruturas de controle, manipulação do DOM e conceitos essenciais do desenvolvimento web.",
    image: "/images/certifications/certificado-java.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/8OO3J7FHKN13",
  },
  {
    title: "Build Dynamic User Interfaces for Websites",
    institution: "Google",
    description: "Curso focado na criação de interfaces web dinâmicas, explorando manipulação de elementos, eventos e atualização interativa de conteúdo no navegador.",
    image: "/images/certifications/certificado-website.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/4C092Z6QBGXL",
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const closeModal = useCallback(() => setSelectedCert(null), []);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedCert, closeModal]);

  return (
    <section id="certificacoes" className="py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6 text-center">
            Certificações
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="section-heading text-center mb-16">
            Certificados e formações.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, i) => (
            <AnimatedSection key={i} delay={0.15 * (i + 1)}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="project-card group cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-t-[calc(var(--radius)+4px)]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-white text-sm font-medium">Ver detalhes</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold tracking-tight mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mb-4">
                    {cert.institution}
                  </p>
                  <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "hsl(var(--text-secondary))" }}>
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.15 * 6}>
            <a
              href="https://www.linkedin.com/in/lucas-kikuthi-866358246/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="project-card group cursor-pointer h-full flex flex-col items-center justify-center p-8 md:p-10 text-center min-h-[360px]"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-muted group-hover:scale-110">
                    <ArrowRight size={28} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Ver minhas 18 certificações restantes
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--text-secondary))" }}>
                    Acesse meu LinkedIn para visualizar todas as certificações e formações completas.
                  </p>
                </div>
              </motion.div>
            </a>
          </AnimatedSection>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="modal-overlay"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-secondary flex items-center justify-center transition-colors hover:bg-muted"
              >
                <X size={16} />
              </button>

              <div className="aspect-video w-full rounded-t-[calc(var(--radius)+3px)] overflow-hidden">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold tracking-tight mb-2">
                  {selectedCert.title}
                </h3>

                <p className="text-sm font-semibold text-muted-foreground mb-6">
                  {selectedCert.institution}
                </p>

                <p className="leading-relaxed mb-8" style={{ color: "hsl(var(--text-secondary))" }}>
                  {selectedCert.description}
                </p>

                <div className="flex gap-3 flex-wrap">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-button-primary inline-flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Ver credencial
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
