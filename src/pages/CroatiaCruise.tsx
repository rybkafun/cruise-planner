import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Ship,
  Users,
  Anchor,
  Compass,
  Waves,
  Sun,
  Wine,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Bed,
  LifeBuoy,
} from "lucide-react";
import kornatiImage from "@/assets/kornati-park.jpg";
import { RegistrationModal } from "@/components/RegistrationModal";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitch from "@/components/LanguageSwitch";

const CroatiaCruise = () => {
  const { lang, t } = useLanguage();
  const cruiseTitle = "Chorwacja słoneczna kraina";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Sticky / Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border/60 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            <span>{t.navBackToAll}</span>
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSwitch variant="inline" />
            <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
              {t.croatiaTermValue}
            </span>
            <RegistrationModal defaultCruise={cruiseTitle}>
              <button className="inline-flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-body font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:scale-105 transition-all">
                {t.btnBookNow}
              </button>
            </RegistrationModal>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={kornatiImage}
            alt="Park Narodowy Kornati - lazurowy Adriatyk i archipelag wysp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm tracking-wide font-medium">
              <Sun size={16} className="text-amber-400" />
              <span>{t.croatiaBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-md">
              {t.croatiaHeroTitle}
              <span className="block text-2xl sm:text-3xl md:text-4xl font-body font-light text-amber-200 mt-2">
                {t.croatiaHeroSubtitle}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-body font-light leading-relaxed mb-8 drop-shadow">
              {t.croatiaHeroDesc}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <RegistrationModal defaultCruise={cruiseTitle}>
                <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-body font-bold text-base rounded-full shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-300">
                  {t.croatiaHeroBtnCta}
                </button>
              </RegistrationModal>
              <a
                href="#opis"
                className="px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-body font-medium text-base rounded-full transition-all duration-300"
              >
                {t.croatiaHeroBtnRoute}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary Bar */}
      <section className="bg-card border-y border-border py-6 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Calendar className="text-primary mb-1.5" size={24} />
            <span className="text-xs uppercase text-muted-foreground font-semibold">{t.croatiaTermLabel}</span>
            <span className="font-display font-bold text-base md:text-lg text-foreground">
              {t.croatiaTermValue}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="text-primary mb-1.5" size={24} />
            <span className="text-xs uppercase text-muted-foreground font-semibold">{t.croatiaStartFinishLabel}</span>
            <span className="font-display font-bold text-base md:text-lg text-foreground">
              {lang === "en" ? "Zadar / Sukošan, Croatia" : "Zadar / Sukošan"}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Ship className="text-primary mb-1.5" size={24} />
            <span className="text-xs uppercase text-muted-foreground font-semibold">{t.croatiaYachtLabel}</span>
            <span className="font-display font-bold text-base md:text-lg text-foreground">
              Hanse 455 / 458
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="text-primary mb-1.5" size={24} />
            <span className="text-xs uppercase text-muted-foreground font-semibold">{t.croatiaCrewLabel}</span>
            <span className="font-display font-bold text-base md:text-lg text-foreground">
              {t.croatiaCrewValue}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main id="opis" className="flex-1 max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-16">
        {/* Intro Section */}
        <section className="bg-sand-gradient p-8 md:p-12 rounded-3xl border border-border shadow-ocean relative overflow-hidden">
          <div className="absolute top-4 right-6 text-primary/10 select-none pointer-events-none">
            <Anchor size={140} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              {t.croatiaIntroTitle}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-foreground/85 font-body leading-relaxed">
              <p>{t.croatiaIntroP1}</p>
              <p>{t.croatiaIntroP2}</p>
            </div>
          </div>
        </section>

        {/* Featured Photo Highlight: Kornati National Park */}
        <section className="space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border group">
            <img
              src={kornatiImage}
              alt="Park Narodowy Kornati - błękitne laguny i księżycowy archipelag"
              className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 self-start">
                {t.croatiaPhotoTag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-2">
                {t.croatiaPhotoTitle}
              </h3>
              <p className="text-sm sm:text-base text-white/90 font-body max-w-2xl">
                {t.croatiaPhotoDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Trasa Marzeń - Itinerary Highlights */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-primary">{t.croatiaRouteTag}</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-1">
              {t.croatiaRouteTitle}
            </h2>
            <p className="text-muted-foreground font-body mt-2">
              {t.croatiaRouteDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-ocean transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5">
                <Sun size={26} />
              </div>
              <h3 className="text-xl font-display font-bold text-card-foreground mb-3">
                {t.croatiaSpot1Title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">
                {t.croatiaSpot1Desc}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-ocean transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-5">
                <Waves size={26} />
              </div>
              <h3 className="text-xl font-display font-bold text-card-foreground mb-3">
                {t.croatiaSpot2Title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">
                {t.croatiaSpot2Desc}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-ocean transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-5">
                <Compass size={26} />
              </div>
              <h3 className="text-xl font-display font-bold text-card-foreground mb-3">
                {t.croatiaSpot3Title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">
                {t.croatiaSpot3Desc}
              </p>
            </div>
          </div>
        </section>

        {/* Character of the Cruise & Yacht */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Relax & Sailing for everyone */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-ocean flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider mb-3">
                <LifeBuoy size={16} />
                <span>{t.croatiaCharTag}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-card-foreground mb-4">
                {t.croatiaCharTitle}
              </h3>
              <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
                {t.croatiaCharDesc}
              </p>

              <ul className="space-y-3.5 text-sm sm:text-base font-body text-foreground/90">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span>{t.croatiaCharPoint1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span>{t.croatiaCharPoint2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span>{t.croatiaCharPoint3}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center gap-3 text-muted-foreground text-sm font-body">
              <Wine size={18} className="text-secondary shrink-0" />
              <span>{t.croatiaCharFooter}</span>
            </div>
          </div>

          {/* Yacht specification */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-ocean flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider mb-3">
                <Ship size={16} />
                <span>{t.croatiaYachtTag}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-card-foreground mb-4">
                {t.croatiaYachtTitle}
              </h3>
              <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
                {t.croatiaYachtDesc}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3.5 bg-muted/40 rounded-xl border border-border/50">
                  <Bed size={22} className="text-primary shrink-0" />
                  <div>
                    <span className="font-semibold block text-sm">{t.croatiaYachtCabins}</span>
                    <span className="text-xs text-muted-foreground">{t.croatiaYachtCabinsDesc}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 bg-muted/40 rounded-xl border border-border/50">
                  <Waves size={22} className="text-primary shrink-0" />
                  <div>
                    <span className="font-semibold block text-sm">{t.croatiaYachtPlatform}</span>
                    <span className="text-xs text-muted-foreground">{t.croatiaYachtPlatformDesc}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 bg-muted/40 rounded-xl border border-border/50">
                  <Sparkles size={22} className="text-primary shrink-0" />
                  <div>
                    <span className="font-semibold block text-sm">{t.croatiaYachtAmenities}</span>
                    <span className="text-xs text-muted-foreground">{t.croatiaYachtAmenitiesDesc}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <div>
                <span className="text-xs uppercase text-muted-foreground block font-semibold">{t.croatiaPriceLabel}</span>
                <span className="text-3xl font-display font-bold text-foreground">350 €</span>
                <span className="text-xs text-muted-foreground ml-1">{t.croatiaPriceNote}</span>
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                {t.croatiaPriceValueBadge}
              </span>
            </div>
          </div>
        </section>

        {/* CTA & Booking Box */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-ocean-deep text-primary-foreground rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full">
              {t.croatiaCtaBadge}
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-bold leading-tight">
              {t.croatiaCtaTitle}
            </h2>

            <p className="text-base sm:text-xl text-primary-foreground/90 font-body max-w-2xl mx-auto leading-relaxed">
              {t.croatiaCtaDesc}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <RegistrationModal defaultCruise={cruiseTitle}>
                <button className="w-full sm:w-auto px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-body font-bold text-lg rounded-full shadow-lg hover:shadow-green-500/40 hover:scale-105 transition-all duration-300">
                  {t.croatiaCtaBtn}
                </button>
              </RegistrationModal>
            </div>

            <div className="pt-6 border-t border-white/20 mt-6 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-300" />
                {t.croatiaOnlineOnlyNote}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-300" />
                {t.croatiaQuickConfirmNote}
              </span>
            </div>
          </div>
        </section>

        {/* Back Link bottom */}
        <div className="text-center pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-body font-semibold text-primary hover:underline"
          >
            <ArrowLeft size={16} />
            <span>{t.navBackToAll}</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CroatiaCruise;
