import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "pl" | "en";

export interface Translations {
  // Navigation & General
  navBackToAll: string;
  langName: string;
  season2026: string;
  chooseYourCruise: string;

  // Hero
  heroTagline: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroDescription: string;
  heroBtnExplore: string;
  heroBtnQuestions: string;

  // Cruise Card & Badges
  spotsLeft: string;
  planning: string;
  noSpots: string;
  spotsOccupied: string;
  persons: string;
  charterAndShipKitty: string;
  countdownLabel: string;
  btnMoreInfo: string;
  btnBookNow: string;
  btnSeeHowItWas: string;
  btnEnterGallery: string;
  btnBookingsSoon: string;

  // Units
  unitDays: string;
  unitHours: string;
  unitMinutes: string;
  unitSeconds: string;

  // Why Us
  whyUsTag: string;
  whyUsTitle: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  feature4Title: string;
  feature4Desc: string;

  // Testimonials
  testimonialsTag: string;
  testimonialsTitle: string;

  // FAQ
  faqTag: string;
  faqTitle: string;

  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaBtn: string;

  // Footer
  footerCopyright: string;
  footerTagline: string;

  // Registration Modal
  modalTitle: string;
  modalDesc: string;
  modalNameLabel: string;
  modalNamePlaceholder: string;
  modalEmailLabel: string;
  modalEmailPlaceholder: string;
  modalPhoneLabel: string;
  modalPhonePlaceholder: string;
  modalCruiseLabel: string;
  modalCruisePlaceholder: string;
  modalMsgLabel: string;
  modalMsgPlaceholder: string;
  modalSubmitBtn: string;
  modalSubmitting: string;
  modalFullTitle: string;
  modalFullDesc: (captain: string) => string;
  modalFullBtn: string;
  modalSuccessReserve: string;
  modalSuccess: string;
  modalError: string;

  // Croatia Cruise Details Page
  croatiaBadge: string;
  croatiaHeroTitle: string;
  croatiaHeroSubtitle: string;
  croatiaHeroDesc: string;
  croatiaHeroBtnCta: string;
  croatiaHeroBtnRoute: string;
  croatiaTermLabel: string;
  croatiaTermValue: string;
  croatiaStartFinishLabel: string;
  croatiaYachtLabel: string;
  croatiaCrewLabel: string;
  croatiaCrewValue: string;
  croatiaIntroTitle: string;
  croatiaIntroP1: string;
  croatiaIntroP2: string;
  croatiaPhotoTag: string;
  croatiaPhotoTitle: string;
  croatiaPhotoDesc: string;
  croatiaRouteTag: string;
  croatiaRouteTitle: string;
  croatiaRouteDesc: string;
  croatiaSpot1Title: string;
  croatiaSpot1Desc: string;
  croatiaSpot2Title: string;
  croatiaSpot2Desc: string;
  croatiaSpot3Title: string;
  croatiaSpot3Desc: string;
  croatiaCharTag: string;
  croatiaCharTitle: string;
  croatiaCharDesc: string;
  croatiaCharPoint1: string;
  croatiaCharPoint2: string;
  croatiaCharPoint3: string;
  croatiaCharFooter: string;
  croatiaYachtTag: string;
  croatiaYachtTitle: string;
  croatiaYachtDesc: string;
  croatiaYachtCabins: string;
  croatiaYachtCabinsDesc: string;
  croatiaYachtPlatform: string;
  croatiaYachtPlatformDesc: string;
  croatiaYachtAmenities: string;
  croatiaYachtAmenitiesDesc: string;
  croatiaPriceLabel: string;
  croatiaPriceNote: string;
  croatiaPriceValueBadge: string;
  croatiaCtaBadge: string;
  croatiaCtaTitle: string;
  croatiaCtaDesc: string;
  croatiaCtaBtn: string;
  croatiaOnlineOnlyNote: string;
  croatiaQuickConfirmNote: string;
}

export const translations: Record<Language, Translations> = {
  pl: {
    navBackToAll: "Wróć do wszystkich rejsów",
    langName: "Polski",
    season2026: "Sezon 2026",
    chooseYourCruise: "Wybierz swój rejs",

    heroTagline: "⛵ Rybka.fun — Rejsy Żeglarskie 2026",
    heroTitleLine1: "Złap Wiatr",
    heroTitleLine2: "w Żagle",
    heroDescription:
      "Wyspy Kanaryjskie, Grecja, Chorwacja — niezapomniane przygody czekają na Ciebie. Zarezerwuj miejsce zanim zabraknie kabin!",
    heroBtnExplore: "Odkryj Rejsy",
    heroBtnQuestions: "Masz pytania?",

    spotsLeft: "Wolne Miejsca",
    planning: "W planowaniu",
    noSpots: "Brak miejsc",
    spotsOccupied: "Zajęte miejsca",
    persons: "osób",
    charterAndShipKitty: "Czarter + kasa okrętowa",
    countdownLabel: "Do rejsu pozostało",
    btnMoreInfo: "Więcej o rejsie →",
    btnBookNow: "Zapisz się ⛵",
    btnSeeHowItWas: "Zobacz jak było",
    btnEnterGallery: "Wejdź do galerii",
    btnBookingsSoon: "Zapisy wkrótce",

    unitDays: "dni",
    unitHours: "godz",
    unitMinutes: "min",
    unitSeconds: "sek",

    whyUsTag: "Dlaczego my?",
    whyUsTitle: "Więcej niż zwykły rejs",
    feature1Title: "Doświadczeni Kapitanowie",
    feature1Desc: "Rejsy pod okiem certyfikowanych kapitanów z wieloletnim doświadczeniem.",
    feature2Title: "Bezpieczeństwo",
    feature2Desc: "Pełne wyposażenie ratunkowe i ubezpieczenie dla każdego uczestnika.",
    feature3Title: "Wyżywienie w cenie",
    feature3Desc: "Kasa okrętowa obejmuje wyżywienie, paliwo i opłaty portowe.",
    feature4Title: "Fun Gwarantowany",
    feature4Desc: "SUP, ponton, regaty, snorkeling — przygoda na każdym kroku!",

    testimonialsTag: "Opinie",
    testimonialsTitle: "Co mówią uczestnicy",

    faqTag: "FAQ",
    faqTitle: "Masz pytania? 🙂",

    ctaTitle: "Nie czekaj, zapisz się!",
    ctaDescription:
      "Liczba kabin jest ograniczona. Zarezerwuj swoje miejsce już dziś i przeżyj niezapomnianą przygodę na morzu.",
    ctaBtn: "Rezerwuję miejsce ⛵",

    footerCopyright: "© 2026 Rybka.fun — Rejsy Żeglarskie",
    footerTagline: "Rybka.fun",

    modalTitle: "Zapisz się na rejs",
    modalDesc: "Zostaw nam swoje dane, a skontaktujemy się z Tobą w celu ustalenia szczegółów.",
    modalNameLabel: "Imię i Nazwisko",
    modalNamePlaceholder: "Jan Kowalski",
    modalEmailLabel: "Email",
    modalEmailPlaceholder: "jan@example.com",
    modalPhoneLabel: "Numer telefonu",
    modalPhonePlaceholder: "+48 123 456 789",
    modalCruiseLabel: "Wybierz rejs",
    modalCruisePlaceholder: "Wybierz interesujący Cię rejs",
    modalMsgLabel: "Poznajmy się: (opcjonalnie)",
    modalMsgPlaceholder: "Napisz coś o sobie, dlaczego chcesz popłynąć lub czy masz doświadczenie...",
    modalSubmitBtn: "Wyślij zgłoszenie",
    modalSubmitting: "Wysyłanie...",
    modalFullTitle: "Brak wolnych miejsc",
    modalFullDesc: (captain: string) =>
      `Tu kapitan ${captain}, mam jacht wypełniony po brzegi w tym terminie. Wybierz inny termin lub skontaktuj się z nami, z pewnością coś wymyślimy.`,
    modalFullBtn: "Płynę w innym terminie",
    modalSuccessReserve: "Niestety skończyły się nam miejsca na ten rejs, zapiszemy Cię na listę rezerwową",
    modalSuccess: "Dziękujemy za zgłoszenie, pozostajemy w kontakcie!",
    modalError: "Wystąpił błąd. Spróbuj ponownie później.",

    croatiaBadge: "Jesienny Reset na Adriatyku • 24–31 października 2026 r.",
    croatiaHeroTitle: "Chorwacja: Kornati & Krka",
    croatiaHeroSubtitle: "Zamiast jesieni pod kocykiem — żeglarski reset marzeń",
    croatiaHeroDesc:
      "Ciepłe morze, labirynt 1001 wysp, spektakularne wodospady i błogi spokój bez wakacyjnych tłumów.",
    croatiaHeroBtnCta: "Zapraszamy na Rejs →",
    croatiaHeroBtnRoute: "Zobacz szczegóły trasy ↓",
    croatiaTermLabel: "Termin",
    croatiaTermValue: "24–31.10.2026",
    croatiaStartFinishLabel: "Start & Meta",
    croatiaYachtLabel: "Jacht",
    croatiaCrewLabel: "Załoga",
    croatiaCrewValue: "8 osób (4 kabiny)",
    croatiaIntroTitle: "Ahoj, Pasjonaci Przygody!",
    croatiaIntroP1:
      "Zamiast spędzać jesień pod kocykiem, zapraszam na tydzień konkretnego żeglarskiego resetu w Chorwacji.",
    croatiaIntroP2:
      "Pływamy w terminie 24–31 października 2026 r. – to absolutnie najlepszy moment na Adriatyk: woda wciąż trzyma ciepło po lecie, wiatr dopisuje, a na wodzie i w urokliwych marinach panuje błogi spokój bez wakacyjnych tłumów.",
    croatiaPhotoTag: "Zdjęcie z Trasy",
    croatiaPhotoTitle: "Park Narodowy Kornati („1001 wysp”)",
    croatiaPhotoDesc:
      "Księżycowy, surowy archipelag, lazurowe zatoczki, żegluga labiryntem wysp i niezapomniane wieczory na kotwicy pod rozgwieżdżonym niebem.",
    croatiaRouteTag: "Niezwykłe Miejsca",
    croatiaRouteTitle: "W planie mamy trasę marzeń",
    croatiaRouteDesc: "Połączenie dzikiej, nieskażonej natury z klimatycznymi miasteczkami Dalmacji.",
    croatiaSpot1Title: "Park Narodowy Kornati",
    croatiaSpot1Desc:
      "Księżycowy, surowy archipelag „1001 wysp”, krystaliczne, lazurowe zatoczki, żegluga labiryntem wysepek i wieczory na kotwicy pod rozgwieżdżonym dalmatyńskim niebem.",
    croatiaSpot2Title: "Park Narodowy Krka",
    croatiaSpot2Desc:
      "Spektakularny rejs kanionem rzeki aż do urokliwego Skradinu, połączony ze spacerem wśród słynnych, kaskadowych wodospadów i bujnej zieleni.",
    croatiaSpot3Title: "Klimatyczne Perełki Dalmacji",
    croatiaSpot3Desc:
      "Po drodze odwiedzimy m.in. historyczny Szybenik z wpisaną na listę UNESCO katedrą św. Jakuba oraz malowniczy, wcinający się w morze Primošten.",
    croatiaCharTag: "Bez stresu i pośpiechu",
    croatiaCharTitle: "Charakter rejsu: czysty relaks",
    croatiaCharDesc:
      "Rejs ma charakter rekreacyjny – nie musisz mieć żadnego wcześniejszego doświadczenia na wodzie!",
    croatiaCharPoint1:
      "Chętni: nauczą się pracy na żaglach, obsługi jachtu i z dumą staną za sterem pod okiem skippera.",
    croatiaCharPoint2:
      "Szukający odpoczynku: mnóstwo czasu na orzeźwiające kąpiele, lekturę, opalanie i beztroski reset.",
    croatiaCharPoint3:
      "Wieczorne biesiady: degustacja świeżych owoców morza i lokalnego wina w klimatycznych chorwackich konobach.",
    croatiaCharFooter: "Idealna równowaga między aktywną żeglugą a chilloutem.",
    croatiaYachtTag: "Twój pływający dom",
    croatiaYachtTitle: "Komfortowy jacht Hanse 455 / 458",
    croatiaYachtDesc:
      "Zakwaterowanie na nowoczesnym jachcie żaglowym z przestronną messą i obszernym kokpitem idealnym do wspólnych posiłków.",
    croatiaYachtCabins: "4 wygodne dwuosobowe kabiny",
    croatiaYachtCabinsDesc: "Kameralna załoga: łącznie tylko 8 osób na jachcie",
    croatiaYachtPlatform: "Opuszczana platforma kąpielowa",
    croatiaYachtPlatformDesc: "Czynna 24h na dobę – skoki wprost do turkusowej wody :-)",
    croatiaYachtAmenities: "Wygodna messa i w pełni wyposażona kuchnia",
    croatiaYachtAmenitiesDesc: "Lodówki, kuchenka, ciepła woda, prysznice",
    croatiaPriceLabel: "Cena rejsu",
    croatiaPriceNote: "/os. + kasa okrętowa",
    croatiaPriceValueBadge: "Świetny stosunek jakości",
    croatiaCtaBadge: "Liczba miejsc ściśle ograniczona (8 osób)",
    croatiaCtaTitle: "Jeszcze nie jest za późno na zgłoszenie!",
    croatiaCtaDesc:
      "Nie czekaj – wzywa ciepłe morze, kąpiele, słońce i witamina D! Zapisz się na rejs do końca tygodnia.",
    croatiaCtaBtn: "Zapraszamy na Rejs →",
    croatiaOnlineOnlyNote: "Zapisy wyłącznie przez formularz online",
    croatiaQuickConfirmNote: "Szybkie potwierdzenie rezerwacji",
  },
  en: {
    navBackToAll: "Back to all cruises",
    langName: "English",
    season2026: "Season 2026",
    chooseYourCruise: "Choose Your Cruise",

    heroTagline: "⛵ Rybka.fun — Sailing Cruises 2026",
    heroTitleLine1: "Catch the Wind",
    heroTitleLine2: "in Your Sails",
    heroDescription:
      "Canary Islands, Greece, Croatia — unforgettable sailing adventures await you. Book your cabin before spots run out!",
    heroBtnExplore: "Explore Cruises",
    heroBtnQuestions: "Have Questions?",

    spotsLeft: "Spots Available",
    planning: "In Planning",
    noSpots: "Fully Booked",
    spotsOccupied: "Booked spots",
    persons: "people",
    charterAndShipKitty: "Charter + board kitty",
    countdownLabel: "Time remaining until cruise",
    btnMoreInfo: "More about cruise →",
    btnBookNow: "Book spot ⛵",
    btnSeeHowItWas: "See past impressions",
    btnEnterGallery: "View gallery",
    btnBookingsSoon: "Bookings opening soon",

    unitDays: "days",
    unitHours: "hrs",
    unitMinutes: "min",
    unitSeconds: "sec",

    whyUsTag: "Why Us?",
    whyUsTitle: "More than just a cruise",
    feature1Title: "Experienced Skippers",
    feature1Desc: "Sailing under the guidance of certified captains with years of sea experience.",
    feature2Title: "Safety First",
    feature2Desc: "Full safety equipment and insurance included for every participant.",
    feature3Title: "Board Kitty Included",
    feature3Desc: "Ship kitty covers meals, fuel, and marina fees with full transparency.",
    feature4Title: "Fun Guaranteed",
    feature4Desc: "SUP boards, dinghy rides, regattas, snorkeling — excitement at every step!",

    testimonialsTag: "Testimonials",
    testimonialsTitle: "What participants say",

    faqTag: "FAQ",
    faqTitle: "Questions? 🙂",

    ctaTitle: "Don't wait, sign up today!",
    ctaDescription:
      "Cabin spots are strictly limited. Reserve your spot today and embark on an unforgettable sea adventure.",
    ctaBtn: "Book my cabin ⛵",

    footerCopyright: "© 2026 Rybka.fun — Sailing Cruises",
    footerTagline: "Rybka.fun",

    modalTitle: "Sign up for the cruise",
    modalDesc: "Leave us your details and we will reach out to arrange all specifics.",
    modalNameLabel: "Full Name",
    modalNamePlaceholder: "John Doe",
    modalEmailLabel: "Email",
    modalEmailPlaceholder: "john@example.com",
    modalPhoneLabel: "Phone Number",
    modalPhonePlaceholder: "+48 123 456 789",
    modalCruiseLabel: "Select Cruise",
    modalCruisePlaceholder: "Choose the cruise you're interested in",
    modalMsgLabel: "Tell us about yourself (optional)",
    modalMsgPlaceholder: "Write a few words about why you'd like to join or your sailing experience...",
    modalSubmitBtn: "Send Application",
    modalSubmitting: "Sending...",
    modalFullTitle: "No spots available",
    modalFullDesc: (captain: string) =>
      `Captain ${captain} here! The yacht is fully booked for this date. Please pick another date or get in touch — we'll definitely find a great solution.`,
    modalFullBtn: "Choose another date",
    modalSuccessReserve: "Unfortunately all standard spots are taken, we added you to the standby list!",
    modalSuccess: "Thank you for registering, we will be in touch shortly!",
    modalError: "An error occurred. Please try again later.",

    croatiaBadge: "Autumn Reset on the Adriatic • October 24–31, 2026",
    croatiaHeroTitle: "Croatia: Kornati & Krka",
    croatiaHeroSubtitle: "Instead of autumn under a blanket — your dream sailing getaway",
    croatiaHeroDesc:
      "Warm sea waters, a labyrinth of 1001 islands, majestic waterfalls, and tranquil serenity free from summer crowds.",
    croatiaHeroBtnCta: "Join the Cruise →",
    croatiaHeroBtnRoute: "View route details ↓",
    croatiaTermLabel: "Dates",
    croatiaTermValue: "24–31.10.2026",
    croatiaStartFinishLabel: "Port of Origin",
    croatiaYachtLabel: "Yacht",
    croatiaCrewLabel: "Crew",
    croatiaCrewValue: "8 guests (4 cabins)",
    croatiaIntroTitle: "Ahoy, Adventure Seekers!",
    croatiaIntroP1:
      "Instead of spending chilly autumn wrapped in blankets, join us for a week of pure sailing rejuvenation in Croatia.",
    croatiaIntroP2:
      "We sail October 24–31, 2026 — the ultimate prime time for the Adriatic: the water retains summer warmth, winds are crisp and steady, and picturesque marinas enjoy peaceful calm without tourist rush.",
    croatiaPhotoTag: "Route Highlight",
    croatiaPhotoTitle: "Kornati National Park (\"1001 Islands\")",
    croatiaPhotoDesc:
      "A lunar, dramatic karst archipelago, turquoise secluded bays, navigation through island mazes, and evenings on anchor under starry skies.",
    croatiaRouteTag: "Extraordinary Places",
    croatiaRouteTitle: "A Dream Itinerary",
    croatiaRouteDesc: "A seamless combination of pristine wild nature and charming Dalmatian coastal towns.",
    croatiaSpot1Title: "Kornati National Park",
    croatiaSpot1Desc:
      "The lunar archipelago of 1001 islands, crystal-clear turquoise coves, scenic navigation through island channels, and peaceful nights at anchor.",
    croatiaSpot2Title: "Krka National Park",
    croatiaSpot2Desc:
      "A spectacular sail up the river canyon all the way to Skradin, followed by walks among world-famous cascading waterfalls and lush greenery.",
    croatiaSpot3Title: "Dalmatian Coastal Jewels",
    croatiaSpot3Desc:
      "En route we visit historic Šibenik featuring the UNESCO-listed St. James Cathedral, and picturesque Primošten jutting into the sea.",
    croatiaCharTag: "No stress, pure pleasure",
    croatiaCharTitle: "Cruise Vibe: Pure Relaxation",
    croatiaCharDesc:
      "This is a recreational leisure cruise — no prior sailing experience is required whatsoever!",
    croatiaCharPoint1:
      "Eager learners: take helm, learn rope work and trim sails alongside our licensed skipper.",
    croatiaCharPoint2:
      "Relaxation seekers: enjoy swim breaks, sunbathing, reading, and completely unplugging.",
    croatiaCharPoint3:
      "Evening feasts: taste fresh Mediterranean seafood and local Dalmatian wines in traditional taverns (konobas).",
    croatiaCharFooter: "The perfect harmony between active sailing and pure tranquility.",
    croatiaYachtTag: "Your floating home",
    croatiaYachtTitle: "Modern Hanse 455 / 458 Yacht",
    croatiaYachtDesc:
      "Accommodation aboard a state-of-the-art sailing yacht with a spacious saloon and cockpit ideal for shared dining.",
    croatiaYachtCabins: "4 comfortable double cabins",
    croatiaYachtCabinsDesc: "Intimate crew: only 8 guests on board",
    croatiaYachtPlatform: "Fold-down swim platform",
    croatiaYachtPlatformDesc: "Accessible 24/7 — leap directly into turquoise waters :-)",
    croatiaYachtAmenities: "Spacious saloon & full galley",
    croatiaYachtAmenitiesDesc: "Refrigerators, stove, hot water, private showers",
    croatiaPriceLabel: "Cruise Price",
    croatiaPriceNote: "/person + ship kitty",
    croatiaPriceValueBadge: "Exceptional Value",
    croatiaCtaBadge: "Strictly limited to 8 spots",
    croatiaCtaTitle: "It's not too late to reserve!",
    croatiaCtaDesc:
      "Don't wait — warm sea, sun, sailing and vitamin D call! Register for the cruise by the end of the week.",
    croatiaCtaBtn: "Join the Cruise →",
    croatiaOnlineOnlyNote: "Online application only",
    croatiaQuickConfirmNote: "Instant reservation confirmation",
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("preferred_lang") as Language;
    return saved === "en" || saved === "pl" ? saved : "pl";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("preferred_lang", newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    setLang(lang === "pl" ? "en" : "pl");
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
