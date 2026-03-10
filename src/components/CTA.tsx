import AnimatedSection from "./AnimatedSection";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-28 md:py-36 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <div className="cta-section p-12 md:p-16">
            <h2 className="section-heading mb-6">
              Interessado em desenvolver seu projeto com organização e responsabilidade?
            </h2>
            <AnimatedSection delay={0.2}>
              <a
                href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button-primary inline-flex items-center gap-2 text-base"
              >
                <MessageCircle size={18} />
                Falar comigo no WhatsApp
              </a>
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
