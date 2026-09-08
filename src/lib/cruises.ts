import canaryImg from "@/assets/canary-islands.jpg";
import greeceImg from "@/assets/greece-sailing.jpg";
import croatiaImg from "@/assets/croatia-sailing.jpg";
import heroSailingImg from "@/assets/hero-sailing.jpg";
import mazuryImg from "@/assets/mazury-sailing.jpg";
import thailandImg from "@/assets/thailand-sailing.png";
import sicilyImg from "@/assets/aeolian-sailing.png";

export const cruises = [
    {
        title: "Włochy – Sycylia",
        subtitle: "Dolce Vita na Morzu",
        image: sicilyImg,
        date: "24.10 – 31.10.2026",
        targetDate: new Date("2026-10-24"),
        location: "Palermo lub Portorosana Sycylii",
        price: "600",
        spots: 0,
        totalSpots: 10,
        yacht: "Beneteau Oceanis 48",
        description:
            "Poczuj klimat Sycyli, bliskosci Etny i pulsu Palermo. Odwiedzisz róznorodne porty wyspy. Zaplanuj z nami rejs na Wyspy Liparyjskie. Wyśmienita kuchnia i śródziemnomorski luz.",
    },
    {
        title: "Wyspy Kanaryjskie",
        subtitle: "Rejs Zimowy - rejs zakończony",
        image: canaryImg,
        date: "07.02 – 14.02.2026",
        targetDate: new Date("2026-02-07"),
        location: "Teneryfa, Hiszpania",
        price: "550",
        spots: 10,
        totalSpots: 10,
        yacht: "Bavaria Cruiser 51",
        description:
            "Start z Marina San Miguel na Teneryfie Południowej. Trasa w kierunku wyspy Gran Canaria port Mogan i Pasito Blanco. Rejs zakończony.",
    },
    {
        title: "Grecja — Rejs 1",
        subtitle: "Rejs Wakacyjny -  rejs zakończony",
        image: greeceImg,
        date: "15.08 – 22.08.2026",
        targetDate: new Date("2026-08-15"),
        location: "Marina Alimos, Ateny",
        price: "700",
        // Zmiana 26.05.2026: Zmiana ilości wolnych miejsc - rejs w pełni zarezerwowany,
        // zapisy przyjmowane są teraz wyłącznie na listę rezerwową.
        spots: 20,
        totalSpots: 20,
        yacht: "Bavaria Cruiser 51",
        description:
            "Dwa jachty razem, wspólne żeglowanie, kotwiczenie zwiedzanie portowych miasteczek i ucztowanie, fun na maxa. Trasa zalezy od warunkow pogodowych.",
    },
    {
        title: "Grecja — Rejs 2",
        subtitle: "Rejs Wakacyjny - rejs zakończony",
        image: greeceImg,
        date: "22.08 – 29.08.2026",
        targetDate: new Date("2026-08-22"),
        location: "Marina Alimos → Ateny",
        price: "700",
        // Zmiana 26.05.2026: Zmiana ilości wolnych miejsc - rejs w pełni zarezerwowany,
        // zapisy przyjmowane są teraz wyłącznie na listę rezerwową.
        spots: 22,
        totalSpots: 20,
        yacht: "Cyklades 51",
        description:
            "Flotylla trzech jachtów razem, wspólne żeglowanie kotwiczenie zwiedzanie portowych miasteczek i ucztowanie, fun na maxa. Trasa zalezy od warunkow pogodowych.",
    },
    {
        title: "Rejs Na Mazurach",
        subtitle: "Rejs Jesienny - rejs w planowaniu",
        image: mazuryImg,
        date: "09.10 - 12.10.2026",
        targetDate: new Date("2026-10-09"),
        location: "Marina Euforia Pisz",
        price: "1200",
        spots: 6,
        totalSpots: 6,
        yacht: "Jacht Phila 880",
        description:
            "Rejs po Mazurach to odkrywanie piękna tego zakątka dla osób, które chcą przeżyć niezapomnianą przygodę żeglarską.",
    },
    {
        title: "Tajlandia – Phuket & Phi Phi",
        subtitle: "Egzotyka Wschodu",
        image: thailandImg,
        date: "05.12 – 15.12.2027",
        targetDate: new Date("2027-12-05"),
        location: "Phuket, Tajlandia",
        price: "1200",
        spots: 0,
        totalSpots: 12,
        yacht: "Catamaran Nautitech 46",
        description:
            "Żegluj po Morzu Andamańskim wśród wapiennych ostańców. Tajskie jedzenie, dzikie plaże i nocne życie na Phi Phi.",
    },
    {
        title: "Karaiby – Rejs Marzeń",
        subtitle: "Egzotyczna Przygoda",
        image: heroSailingImg,
        date: "10.01 – 24.01.2028",
        targetDate: new Date("2028-01-10"),
        location: "Martynika, Karaiby",
        price: "1500",
        spots: 0,
        totalSpots: 10,
        yacht: "Catamaran Lagoon 450",
        description:
            "Odkryj rajskie wyspy Karaibów. Białe plaże, turkusowa woda i niesamowita atmosfera Antyli. Rejs pełen słońca i egzotyki.",
    },
];
