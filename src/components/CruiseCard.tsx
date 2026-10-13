import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import { MapPin, Calendar, Users, Ship, Euro } from "lucide-react";
import { RegistrationModal } from "./RegistrationModal";
import { useLanguage } from "@/context/LanguageContext";

interface CruiseCardProps {
  title: string;
  titleEn?: string;
  subtitle: string;
  subtitleEn?: string;
  image: string;
  date: string;
  dateEn?: string;
  targetDate: Date;
  location: string;
  locationEn?: string;
  price: string;
  spots: number;
  totalSpots: number;
  yacht: string;
  description: string;
  descriptionEn?: string;
  index: number;
  detailsLink?: string;
}

const CruiseCard = ({
  title,
  titleEn,
  subtitle,
  subtitleEn,
  image,
  date,
  dateEn,
  targetDate,
  location,
  locationEn,
  price,
  spots,
  totalSpots,
  yacht,
  description,
  descriptionEn,
  index,
  detailsLink,
}: CruiseCardProps) => {
  const { lang, t } = useLanguage();
  const [localSpots, setLocalSpots] = useState(spots);
  const spotsLeft = totalSpots - localSpots;
  const urgency = spotsLeft <= 3;

  const displayTitle = lang === "en" && titleEn ? titleEn : title;
  const displaySubtitle = lang === "en" && subtitleEn ? subtitleEn : subtitle;
  const displayLocation = lang === "en" && locationEn ? locationEn : location;
  const displayDescription = lang === "en" && descriptionEn ? descriptionEn : description;
  const displayDate = lang === "en" && dateEn ? dateEn : date;

  const isCompleted = subtitle.toLowerCase().includes('zakończony') || description.toLowerCase().includes('zakończony');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-ocean hover:shadow-card-hover transition-all duration-500 border border-border"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-secondary text-secondary-foreground text-xs font-body font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            {displaySubtitle}
          </span>
        </div>

        {/* Spots badge */}
        {!isCompleted && (
          <div className="absolute top-4 right-4">
            <span
              className={`inline-block text-xs font-body font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${spotsLeft === totalSpots && ["Karaiby", "Tajlandia", "Włochy"].some(k => title.includes(k))
                ? "bg-muted text-muted-foreground"
                : spotsLeft <= 0
                  ? "bg-muted text-muted-foreground"
                  : "bg-green-500 text-white"
                }`}
            >
              {spotsLeft === totalSpots && ["Karaiby", "Tajlandia", "Włochy"].some(k => title.includes(k)) ? t.planning : spotsLeft <= 0 ? t.noSpots : t.spotsLeft}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">{displayTitle}</h3>

        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="flex items-center gap-2 text-muted-foreground font-body">
            <Calendar size={18} className="text-primary" />
            <span className="text-sm">{displayDate}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground font-body">
            <MapPin size={18} className="text-primary" />
            <span className="text-sm">{displayLocation}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground font-body">
            <Ship size={18} className="text-primary" />
            <span className="text-sm">{yacht}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground font-body">
            <Users size={18} className="text-primary" />
            <span className="text-sm">{totalSpots} {t.persons}</span>
          </div>
        </div>

        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
          {displayDescription}
        </p>

        {/* Price + Countdown */}
        <div className="border-t border-border pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              {!title.includes("Mazurach") && <Euro size={20} className="text-secondary" />}
              <span className="text-3xl font-display font-bold text-card-foreground">{price}</span>
              {title.includes("Mazurach") && <span className="text-secondary font-bold ml-1">PLN</span>}
              <span className="text-sm text-muted-foreground font-body">/{lang === "en" ? "person" : "os."}</span>
            </div>
            <span className="text-xs text-muted-foreground font-body">
              {t.charterAndShipKitty}
            </span>
          </div>

          <CountdownTimer targetDate={targetDate} label={t.countdownLabel} />

          {/* Progress bar for spots */}
          <div className="mt-5">
            <div className="flex justify-between text-xs text-muted-foreground font-body mb-1">
              <span>{t.spotsOccupied}</span>
              <span>{localSpots}/{totalSpots}</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(localSpots / totalSpots) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`h-full rounded-full ${urgency ? "bg-sunset" : "bg-primary"}`}
              />
            </div>
          </div>

          {title === "Grecja — Rejs 1" ? (
            <Link
              to="/galeria/grecja-1"
              className="mt-6 w-full inline-flex items-center justify-center px-6 py-3.5 bg-blue-500 text-white font-body text-sm font-semibold rounded-xl text-center hover:bg-blue-600 transition-colors"
            >
              {t.btnSeeHowItWas}
            </Link>
          ) : title.includes("Grecja") ? (
            <div className="mt-6 w-full inline-flex items-center justify-center px-6 py-3.5 bg-blue-500 text-white font-body text-sm font-semibold rounded-xl text-center cursor-default">
              {t.btnSeeHowItWas}
            </div>
          ) : title.includes("Mazurach") ? (
            <div className="mt-6 w-full inline-flex items-center justify-center px-6 py-3.5 bg-muted text-muted-foreground font-body text-sm font-semibold rounded-xl text-center cursor-default">
              {t.btnBookingsSoon}
            </div>
          ) : spotsLeft === totalSpots && ["Karaiby", "Tajlandia", "Włochy"].some(k => title.includes(k)) ? (
            <div className="mt-6 w-full inline-flex items-center justify-center px-6 py-3.5 bg-muted text-muted-foreground font-body text-sm font-semibold rounded-xl text-center">
              {t.btnBookingsSoon}
            </div>
          ) : spotsLeft <= 0 && title.includes("Kanaryjskie") ? (
            <Link
              to={`/galeria/wyspy-kanaryjskie`}
              className="mt-6 w-full inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground font-body font-semibold rounded-xl shadow-ocean hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 text-sm"
            >
              {t.btnSeeHowItWas}
            </Link>
          ) : spotsLeft <= 0 ? (
            <Link
              to={`/galeria/${title.toLowerCase().replace(/\s+/g, '-')}`}
              className="mt-6 w-full inline-flex items-center justify-center px-6 py-3.5 bg-muted text-muted-foreground font-body text-sm font-semibold rounded-xl text-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            >
              {t.btnEnterGallery}
            </Link>
          ) : title.includes("Chorwacja") ? (
            <div className="mt-6 flex flex-col sm:flex-row gap-2.5 w-full">
              <Link
                to={detailsLink || "/rejsy/chorwacja"}
                className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-body font-semibold rounded-xl shadow-ocean hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 text-sm text-center"
              >
                {t.btnMoreInfo}
              </Link>
              <div className="flex-1">
                <RegistrationModal defaultCruise={title} onSuccess={() => setLocalSpots(prev => prev + 1)}>
                  <button className="w-full inline-flex items-center justify-center px-4 py-3 bg-green-500 text-white font-body font-semibold rounded-xl shadow-ocean hover:shadow-card-hover hover:bg-green-600 hover:scale-[1.02] transition-all duration-300 text-sm">
                    {t.btnBookNow}
                  </button>
                </RegistrationModal>
              </div>
            </div>
          ) : (
            <a
              href="https://rybka.fun/zgloszenie/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center px-6 py-3.5 bg-green-500 text-white font-body font-semibold rounded-xl shadow-ocean hover:shadow-card-hover hover:bg-green-600 hover:scale-[1.02] transition-all duration-300"
            >
              {t.btnBookNow}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CruiseCard;
