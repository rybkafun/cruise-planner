import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import CruiseCard from "@/components/CruiseCard";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import { cruises } from "@/lib/cruises";

const Index = () => {
  const [spotsData, setSpotsData] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const res = await fetch("/.netlify/functions/get-all-cruise-spots");
        if (res.ok) {
          const data = await res.json();
          setSpotsData(data);
        }
      } catch (err) {
        console.error("Failed to fetch spots data", err);
      }
    };
    fetchSpots();
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Cruises */}
      <section id="rejsy" className="py-20 md:py-28 bg-sand-gradient">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-2">
              Sezon 2026
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Wybierz swój rejs
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cruises.map((cruise, i) => {
              const currentSpots = spotsData[cruise.title] !== undefined ? spotsData[cruise.title] : cruise.spots;
              return <CruiseCard key={i} {...cruise} spots={currentSpots} index={i} />;
            })}
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
