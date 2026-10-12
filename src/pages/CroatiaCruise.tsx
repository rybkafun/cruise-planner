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
  Mail,
  Phone,
  MessageCircle,
  Sparkles,
  Bed,
  LifeBuoy,
} from "lucide-react";
import kornatiImage from "@/assets/kornati-park.jpg";
import croatiaImg from "@/assets/croatia-sailing.jpg";
import { RegistrationModal } from "@/components/RegistrationModal";
import Footer from "@/components/Footer";

const CroatiaCruise = () => {
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
            <span>Wróć do wszystkich rejsów</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
              24–31.10.2026
            </span>
            <RegistrationModal defaultCruise={cruiseTitle}>
              <button className="inline-flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-body font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:scale-105 transition-all">
                Zapisz się ⛵
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
            className="w-full h-full object-cover scale-105 animate-pulse duration-[10000ms]"
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
              <span>Jesienny Reset na Adriatyku • 24–31 października 2026 r.</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-md">
              Chorwacja: Kornati & Krka
              <span className="block text-2xl sm:text-3xl md:text-4xl font-body font-light text-amber-200 mt-2">
                Zamiast jesieni pod kocykiem — żeglarski reset marzeń
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-body font-light leading-relaxed mb-8 drop-shadow">
              Ciepłe morze, labirynt 1001 wysp, spektakularne wodospady i błogi spokój bez wakacyjnych tłumów.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <RegistrationModal defaultCruise={cruiseTitle}>
                <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-body font-bold text-base rounded-full shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-300">
                  Zapraszamy na Rejs →
                </button>
              </RegistrationModal>
              <a
                href="#opis"
                className="px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-body font-medium text-base rounded-full transition-all duration-300"
              >
                Zobacz szczegóły trasy ↓
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
            <span className="text-xs uppercase text-muted-foreground font-semibold">Termin</span>
            <span className="font-display font-bold text-base md:text-lg text-foreground">
              24–31.10.2026
            </span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="text-primary mb-1.5" size={24} />
            <span className="text-xs uppercase text-muted-foreground font-semibold">Start & Meta</span>
            <span className="font-display font-bold text-base md:text-lg text-foreground">
              Zadar / Sukošan
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Ship className="text-primary mb-1.5" size={24} />
            <span className="text-xs uppercase text-muted-foreground font-semibold">Jacht</span>
            <span className="font-display font-bold text-base md:text-lg text-foreground">
              Hanse 455 / 458
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="text-primary mb-1.5" size={24} />
            <span className="text-xs uppercase text-muted-foreground font-semibold">Załoga</span>
            <span className="font-display font-bold text-base md:text-lg text-foreground">
              8 osób (4 kabiny)
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
              Ahoj, Pasjonaci Przygody!
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-foreground/85 font-body leading-relaxed">
              <p>
                <strong>Zamiast spędzać jesień pod kocykiem</strong>, zapraszam na tydzień konkretnego
                żeglarskiego resetu w Chorwacji.
              </p>
              <p>
                Pływamy w terminie <strong>24–31 października 2026 r.</strong> – to absolutnie najlepszy moment
                na Adriatyk: woda wciąż trzyma ciepło po lecie, wiatr dopisuje, a na wodzie i w urokliwych
                marinas panuje błogi spokój bez letniego zgiełku i wakacyjnych tłumów.
              </p>
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
                Zdjęcie z Trasy
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold mb-2">
                Park Narodowy Kornati („1001 wysp”)
              </h3>
              <p className="text-sm sm:text-base text-white/90 font-body max-w-2xl">
                Księżycowy, surowy archipelag, lazurowe zatoczki, żegluga labiryntem wysp i niezapomniane wieczory
                na kotwicy pod rozgwieżdżonym niebem.
              </p>
            </div>
          </div>
        </section>

        {/* Trasa Marzeń - Itinerary Highlights */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-primary">Niezwykłe Miejsca</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mt-1">
              W planie mamy trasę marzeń
            </h2>
            <p className="text-muted-foreground font-body mt-2">
              Połączenie dzikiej, nieskażonej natury z klimatycznymi miasteczkami Dalmacji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-ocean transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5">
                <Sun size={26} />
              </div>
              <h3 className="text-xl font-display font-bold text-card-foreground mb-3">
                Park Narodowy Kornati
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">
                Księżycowy, surowy archipelag „1001 wysp”, krystaliczne, lazurowe zatoczki, żegluga labiryntem
                wysepek i wieczory na kotwicy pod rozgwieżdżonym dalmatyńskim niebem.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-ocean transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-5">
                <Waves size={26} />
              </div>
              <h3 className="text-xl font-display font-bold text-card-foreground mb-3">
                Park Narodowy Krka
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">
                Spektakularny rejs kanionem rzeki aż do urokliwego Skradinu, połączony ze spacerem wśród słynnych,
                kaskadowych wodospadów i bujnej zieleni.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-ocean transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-5">
                <Compass size={26} />
              </div>
              <h3 className="text-xl font-display font-bold text-card-foreground mb-3">
                Klimatyczne Perełki Dalmacji
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">
                Po drodze odwiedzimy m.in. historyczny <strong>Szybenik</strong> z wpisaną na listę UNESCO katedrą
                św. Jakuba oraz malowniczy, wcinający się w morze <strong>Primošten</strong>.
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
                <span>Bez stresu i pośpiechu</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-card-foreground mb-4">
                Charakter rejsu: czysty relaks
              </h3>
              <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
                Rejs ma charakter <strong>rekreacyjny</strong> – nie musisz mieć żadnego wcześniejszego
                doświadczenia na wodzie!
              </p>

              <ul className="space-y-3.5 text-sm sm:text-base font-body text-foreground/90">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Chętni:</strong> nauczą się pracy na żaglach, obsługi jachtu i z dumą staną za sterem pod okiem skippera.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Szukający odpoczynku:</strong> mnóstwo czasu na orzeźwiające kąpiele, lekturę, opalanie i beztroski reset.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Wieczorne biesiady:</strong> degustacja świeżych owoców morza i lokalnego wina w klimatycznych chorwackich konobach.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center gap-3 text-muted-foreground text-sm font-body">
              <Wine size={18} className="text-secondary shrink-0" />
              <span>Idealna równowaga między aktywną żeglugą a chilloutem.</span>
            </div>
          </div>

          {/* Yacht specification */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-ocean flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wider mb-3">
                <Ship size={16} />
                <span>Twój pływający dom</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-card-foreground mb-4">
                Komfortowy jacht Hanse 455 / 458
              </h3>
              <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
                Zakwaterowanie na nowoczesnym jachcie żaglowym z przestronną messą i obszernym kokpitem idealnym
                do wspólnych posiłków.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3.5 bg-muted/40 rounded-xl border border-border/50">
                  <Bed size={22} className="text-primary shrink-0" />
                  <div>
                    <span className="font-semibold block text-sm">4 wygodne dwuosobowe kabiny</span>
                    <span className="text-xs text-muted-foreground">Kameralna załoga: łącznie tylko 8 osób na jachcie</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 bg-muted/40 rounded-xl border border-border/50">
                  <Waves size={22} className="text-primary shrink-0" />
                  <div>
                    <span className="font-semibold block text-sm">Opuszczana platforma kąpielowa</span>
                    <span className="text-xs text-muted-foreground">Czynna 24h na dobę – skoki wprost do turkusowej wody :-)</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 bg-muted/40 rounded-xl border border-border/50">
                  <Sparkles size={22} className="text-primary shrink-0" />
                  <div>
                    <span className="font-semibold block text-sm">Wygodna messa i w pełni wyposażona kuchnia</span>
                    <span className="text-xs text-muted-foreground">Lodówki, kuchenka, ciepła woda, prysznice</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <div>
                <span className="text-xs uppercase text-muted-foreground block font-semibold">Cena rejsu</span>
                <span className="text-3xl font-display font-bold text-foreground">350 €</span>
                <span className="text-xs text-muted-foreground ml-1">/os. + kasa okrętowa</span>
              </div>
              <span className="text-xs font-semibold text-green-600 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                Świetny stosunek jakości
              </span>
            </div>
          </div>
        </section>

        {/* CTA & Booking Box */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-ocean-deep text-primary-foreground rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full">
              Liczba miejsc ściśle ograniczona (8 osób)
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-bold leading-tight">
              Jeszcze nie jest za późno na zgłoszenie!
            </h2>

            <p className="text-base sm:text-xl text-primary-foreground/90 font-body max-w-2xl mx-auto leading-relaxed">
              Nie czekaj – wzywa ciepłe morze, kąpiele, słońce i witamina D! Zapisz się na rejs do końca tygodnia.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <RegistrationModal defaultCruise={cruiseTitle}>
                <button className="w-full sm:w-auto px-9 py-4 bg-green-500 hover:bg-green-600 text-white font-body font-bold text-lg rounded-full shadow-lg hover:shadow-green-500/40 hover:scale-105 transition-all duration-300">
                  Zapraszamy na Rejs →
                </button>
              </RegistrationModal>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-8 border-t border-white/20 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <a
                href="mailto:windrybka@gmail.com"
                className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/15 rounded-2xl backdrop-blur-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase text-white/70 block">E-mail</span>
                  <span className="font-semibold text-white text-sm sm:text-base">windrybka@gmail.com</span>
                </div>
              </a>

              <a
                href="https://wa.me/48722305113"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/15 rounded-2xl backdrop-blur-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase text-white/70 block">WhatsApp / tel.</span>
                  <span className="font-semibold text-white text-sm sm:text-base">722 305 113</span>
                </div>
              </a>
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
            <span>Wróć do strony głównej i pozostałych rejsów</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CroatiaCruise;
