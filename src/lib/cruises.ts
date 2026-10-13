import canaryImg from "@/assets/canary-islands.jpg";
import greeceImg from "@/assets/greece-sailing.jpg";
import croatiaImg from "@/assets/croatia-sailing.jpg";
import heroSailingImg from "@/assets/hero-sailing.jpg";
import thailandImg from "@/assets/thailand-sailing.png";
import sicilyImg from "@/assets/aeolian-sailing.png";

export interface Cruise {
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
    detailsLink?: string;
    description: string;
    descriptionEn?: string;
}

export const cruises: Cruise[] = [
    {
        title: "Chorwacja słoneczna kraina",
        titleEn: "Croatia Sunny Land",
        subtitle: "Rejs jesienny",
        subtitleEn: "Autumn Cruise",
        image: croatiaImg,
        date: "24.10 – 31.10.2026",
        dateEn: "24.10 – 31.10.2026",
        targetDate: new Date("2026-10-24"),
        location: "Zadar / Sukosan, Chorwacja",
        locationEn: "Zadar / Sukošan, Croatia",
        price: "350",
        spots: 3,
        totalSpots: 8,
        yacht: "Hanse 458",
        detailsLink: "/rejsy/chorwacja",
        description:
            "Zapraszamy do odwiedzenia dwóch pięknych parków narodowych Chorwacji: parku Kornati – krainy 1001 wysp oraz parku Krka z zachwycającymi wodospadami Krka. Idealna żegluga jesienną porą.",
        descriptionEn:
            "Join us to explore two magnificent national parks of Croatia: Kornati – the land of 1001 islands, and Krka with its spectacular waterfalls. Pure autumn sailing bliss.",
    },
    {
        title: "Wyspy Kanaryjskie",
        titleEn: "Canary Islands",
        subtitle: "Rejs Zimowy - rejs zakończony",
        subtitleEn: "Winter Cruise - Completed",
        image: canaryImg,
        date: "07.02 – 14.02.2026",
        dateEn: "07.02 – 14.02.2026",
        targetDate: new Date("2026-02-07"),
        location: "Teneryfa, Hiszpania",
        locationEn: "Tenerife, Spain",
        price: "550",
        spots: 10,
        totalSpots: 10,
        yacht: "Bavaria Cruiser 51",
        description:
            "Start z Marina San Miguel na Teneryfie Południowej. Trasa w kierunku wyspy Gran Canaria port Mogan i Pasito Blanco. Rejs zakończony.",
        descriptionEn:
            "Starting from Marina San Miguel in Southern Tenerife. Route towards Gran Canaria, Mogan and Pasito Blanco. Completed cruise.",
    },
    {
        title: "Grecja — Rejs 1",
        titleEn: "Greece — Cruise 1",
        subtitle: "Rejs Wakacyjny -  rejs zakończony",
        subtitleEn: "Summer Cruise - Completed",
        image: greeceImg,
        date: "15.08 – 22.08.2026",
        dateEn: "15.08 – 22.08.2026",
        targetDate: new Date("2026-08-15"),
        location: "Marina Alimos, Ateny",
        locationEn: "Marina Alimos, Athens",
        price: "700",
        spots: 20,
        totalSpots: 20,
        yacht: "Bavaria Cruiser 51",
        description:
            "Dwa jachty razem, wspólne żeglowanie, kotwiczenie zwiedzanie portowych miasteczek i ucztowanie, fun na maxa. Trasa zalezy od warunkow pogodowych.",
        descriptionEn:
            "Two yachts together, sailing in tandem, anchoring in scenic bays, exploring harbor towns and feasting. Maximum fun.",
    },
    {
        title: "Grecja — Rejs 2",
        titleEn: "Greece — Cruise 2",
        subtitle: "Rejs Wakacyjny - rejs zakończony",
        subtitleEn: "Summer Cruise - Completed",
        image: greeceImg,
        date: "22.08 – 29.08.2026",
        dateEn: "22.08 – 29.08.2026",
        targetDate: new Date("2026-08-22"),
        location: "Marina Alimos → Ateny",
        locationEn: "Marina Alimos → Athens",
        price: "700",
        spots: 22,
        totalSpots: 20,
        yacht: "Cyklades 51",
        description:
            "Flotylla trzech jachtów razem, wspólne żeglowanie kotwiczenie zwiedzanie portowych miasteczek i ucztowanie, fun na maxa. Trasa zalezy od warunkow pogodowych.",
        descriptionEn:
            "Flotilla of three yachts, shared sailing, anchoring, discovering coastal towns and unforgettable evenings. Maximum fun.",
    },
    {
        title: "Tajlandia – Phuket & Phi Phi",
        titleEn: "Thailand – Phuket & Phi Phi",
        subtitle: "Egzotyka Wschodu",
        subtitleEn: "Exotic East",
        image: thailandImg,
        date: "05.12 – 15.12.2027",
        dateEn: "05.12 – 15.12.2027",
        targetDate: new Date("2027-12-05"),
        location: "Phuket, Tajlandia",
        locationEn: "Phuket, Thailand",
        price: "1200",
        spots: 0,
        totalSpots: 12,
        yacht: "Catamaran Nautitech 46",
        description:
            "Żegluj po Morzu Andamańskim wśród wapiennych ostańców. Tajskie jedzenie, dzikie plaże i nocne życie na Phi Phi.",
        descriptionEn:
            "Sail the Andaman Sea among limestone cliffs. Authentic Thai street food, wild tropical beaches, and vibrant nights on Phi Phi.",
    },
    {
        title: "Karaiby – Rejs Marzeń",
        titleEn: "Caribbean – Dream Voyage",
        subtitle: "Egzotyczna Przygoda",
        subtitleEn: "Exotic Adventure",
        image: heroSailingImg,
        date: "10.01 – 24.01.2028",
        dateEn: "10.01 – 24.01.2028",
        targetDate: new Date("2028-01-10"),
        location: "Martynika, Karaiby",
        locationEn: "Martinique, Caribbean",
        price: "1500",
        spots: 0,
        totalSpots: 10,
        yacht: "Catamaran Lagoon 450",
        description:
            "Odkryj rajskie wyspy Karaibów. Białe plaże, turkusowa woda i niesamowita atmosfera Antyli. Rejs pełen słońca i egzotyki.",
        descriptionEn:
            "Discover Caribbean paradise. White sand beaches, turquoise Caribbean waters, and the warm rhythm of the Antilles.",
    },
];
