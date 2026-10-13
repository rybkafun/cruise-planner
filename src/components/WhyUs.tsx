import { motion } from "framer-motion";
import { Compass, Shield, Smile, Utensils } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WhyUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Compass,
      title: t.feature1Title,
      desc: t.feature1Desc,
    },
    {
      icon: Shield,
      title: t.feature2Title,
      desc: t.feature2Desc,
    },
    {
      icon: Utensils,
      title: t.feature3Title,
      desc: t.feature3Desc,
    },
    {
      icon: Smile,
      title: t.feature4Title,
      desc: t.feature4Desc,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-2">
            {t.whyUsTag}
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            {t.whyUsTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-ocean transition-all duration-300">
                <f.icon
                  size={28}
                  className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

