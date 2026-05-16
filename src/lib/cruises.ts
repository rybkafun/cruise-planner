
import canaryImg from "@/assets/canary-islands.jpg";
import greeceImg from "@/assets/greece-sailing.jpg";
import croatiaImg from "@/assets/croatia-sailing.jpg";
import heroSailingImg from "@/assets/hero-sailing.jpg";
import mazuryImg from "@/assets/mazury-sailing.jpg";

export const cruises = [
    {
        title: "Wyspy Kanaryjskie",
        subtitle: "Rejs Zimowy",
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
        title: "Rejs Na Mazurach",
        subtitle: "Rejs Wiosenny",
        image: mazuryImg,
        date: "12-14 czerwiec lub 19-21 czerwiec 2026",
        targetDate: new Date("2026-06-12"),
        location: "Marina Euforia Pisz",
        price: "1000",
        spots: 0,
        totalSpots: 6,
        yacht: "Jacht Phila 880",
        description:
            "Rejs po Mazurach to odkrywanie piekna tego zakatka dla osob ktore chca przezyc niezapomniana przygode zeglarska.",
    },
    {
        title: "Grecja — Rejs 1",
        subtitle: "Rejs Wakacyjny",
        image: greeceImg,
        date: "15.08 – 22.08.2026",
        targetDate: new Date("2026-08-15"),
        location: "Marina Kalamaki, Ateny",
        price: "700",
        spots: 19,
        totalSpots: 20,
        yacht: "Bavaria Cruiser 51",
        description:
            "Dwa jachty razem, wspólne żeglowanie, kotwiczenie zwiedzanie portowych miasteczek i ucztowanie, fun na maxa. Trasa zalezy od warunkow pogodowych.",
    },
    {
        title: "Grecja — Rejs 2",
        subtitle: "Rejs Wakacyjny",
        image: croatiaImg,
        date: "22.08 – 29.08.2026",
        targetDate: new Date("2026-08-22"),
        location: "Marina Kalamaki → Ateny",
        price: "700",
        spots: 21,
        totalSpots: 22,
        yacht: "Cyklades 51",
        description:
            "Flotylla trzech jachtów razem, wspólne żeglowanie kotwiczenie zwiedzanie portowych miasteczek i ucztowanie, fun na maxa. Trasa zalezy od warunkow pogodowych.",
    },
    {
        title: "Włochy – Sycylia",
        subtitle: "Dolce Vita na Morzu",
        image: greeceImg,
        date: "10.10 – 17.09.2026",
        targetDate: new Date("2026-10-10"),
        location: "Palermo lub Portorosana Sycylii",
        price: "850",
        spots: 0,
        totalSpots: 10,
        yacht: "Beneteau Oceanis 48",
        description:
            "Poczuj klimat Sycyli, bliskosci Etny i pulsu Palermo. Odwiedzisz róznorodne porty wyspy. Zaplanuj z nami rejs na Wyspy Liparyjskie. Wyśmienita kuchnia i śródziemnomorski luz.",
    },
    {
        title: "Karaiby – Rejs Marzeń",
        subtitle: "Egzotyczna Przygoda",
        image: heroSailingImg,
        date: "10.01 – 24.01.2027",
        targetDate: new Date("2027-01-10"),
        location: "Martynika, Karaiby",
        price: "1500",
        spots: 0,
        totalSpots: 10,
        yacht: "Catamaran Lagoon 450",
        description:
            "Odkryj rajskie wyspy Karaibów. Białe plaże, turkusowa woda i niesamowita atmosfera Antyli. Rejs pełen słońca i egzotyki.",
    },
    {
        title: "Tajlandia – Phuket & Phi Phi",
        subtitle: "Egzotyka Wschodu",
        image: croatiaImg,
        date: "05.12 – 15.12.2026",
        targetDate: new Date("2026-12-05"),
        location: "Phuket, Tajlandia",
        price: "1200",
        spots: 0,
        totalSpots: 12,
        yacht: "Catamaran Nautitech 46",
        description:
            "Żegluj po Morzu Andamańskim wśród wapiennych ostańców. Tajskie jedzenie, dzikie plaże i nocne życie na Phi Phi.",
    },
];
