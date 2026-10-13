import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const FAQSection = () => {
  const { lang, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      q: lang === "en" ? "Is transportation organized?" : "Czy transport jest zorganizowany?",
      a:
        lang === "en"
          ? "We organize travel individually — it offers the greatest flexibility. We're happy to advise on flights and ground transfers directly to the marina."
          : "Transport organizujemy we własnym zakresie — to najlepsza i najbardziej elastyczna opcja. Chętnie pomożemy z poradami dotyczącymi lotów i dojazdów do mariny.",
    },
    {
      q: lang === "en" ? "What should I pack?" : "Co ze sobą zabrać?",
      a:
        lang === "en"
          ? "Light, comfortable clothing, sunscreen, sunglasses, a soft duffel bag (no hard suitcases!), boat deck shoes, and great spirits. We send a full checklist beforehand."
          : "Lekkie, wygodne ubrania, krem z filtrem, okulary przeciwsłoneczne, miękką torbę (nie walizka!), buty na zmianę na pokład i dobry humor. Szczegółową listę wysyłamy przed rejsem.",
    },
    {
      q: lang === "en" ? "Are there age restrictions?" : "Czy są ograniczenia wiekowe?",
      a:
        lang === "en"
          ? "No formal restrictions. Cruises are open to adults of all ages. Children can join under parental care — reach out to discuss specifics."
          : "Nie ma formalnych ograniczeń. Rejsy są otwarte dla dorosłych w każdym wieku. Dzieci mogą uczestniczyć pod opieką rodzica — skontaktuj się z nami, aby omówić szczegóły.",
    },
    {
      q: lang === "en" ? "Are sailing skills required?" : "Czy umiejętności żeglarskie są wymagane?",
      a:
        lang === "en"
          ? "Not at all! Every cruise is skippered by certified, experienced captains. You can practice sailing or simply lounge and unwind — the choice is yours."
          : "Absolutnie nie! Rejs prowadzą doświadczeni kapitanowie. Możesz się uczyć żeglarstwa w trakcie lub po prostu odpoczywać — wybór należy do Ciebie.",
    },
    {
      q: lang === "en" ? "How do we handle seasickness?" : "Jak radzić sobie z chorobą morską?",
      a:
        lang === "en"
          ? "Most guests never experience seasickness on large cruising yachts. For peace of mind, motion sickness pills or acupressure bands work wonders. We navigate coastal waters with mild waves."
          : "Większość osób nie odczuwa choroby morskiej na jachtach żaglowych. Na wszelki wypadek polecamy tabletki na chorobę lokomocyjną i opaski akupresurowe. Pływamy też blisko brzegu, więc fale są łagodne.",
    },
    {
      q: lang === "en" ? "Are there pre-cruise meetings?" : "Czy są spotkania przedrejsowe?",
      a:
        lang === "en"
          ? "Yes! We host an online or in-person briefing before every voyage to meet the crew, walk through the itinerary, and address any questions."
          : "Tak! Organizujemy spotkanie online lub osobiste przed każdym rejsem, aby poznać się nawzajem, omówić plan i odpowiedzieć na wszelkie pytania.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-sand-gradient">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-2">
            {t.faqTag}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            {t.faqTitle}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-body font-semibold text-card-foreground hover:text-primary transition-colors"
              >
                <span>{item.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} className="text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-muted-foreground font-body leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
