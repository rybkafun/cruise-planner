import { ArrowLeft, ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { kanaryImages } from "@/lib/kanaryImages";

const Gallery = () => {
    const { id } = useParams();
    const cruiseName = id === "wyspy-kanaryjskie" ? "Wyspy Kanaryjskie" : "Rejs";

    // Choose images based on the cruise. For now all load kanaryImages
    const images = id === "wyspy-kanaryjskie" ? kanaryImages : kanaryImages;

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
        setIsPlaying(false);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setIsPlaying(false);
    };

    const nextImage = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, nextImage]);

    // Slideshow effect
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying && isOpen) {
            interval = setInterval(() => {
                nextImage();
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isPlaying, isOpen, nextImage]);

    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body mb-6"
                    >
                        <ArrowLeft size={20} />
                        <span>Wróć do strony głównej</span>
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        Wspomnienia: {cruiseName}
                    </h1>
                    <p className="text-muted-foreground font-body mt-4 text-lg max-w-2xl">
                        Ten rejs to już historia, ale wspaniałe chwile zostaną z nami na zawsze.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            key={i}
                            onClick={() => openLightbox(i)}
                            className="aspect-square bg-muted rounded-xl cursor-pointer overflow-hidden border border-border hover:shadow-lg transition-all"
                        >
                            <img
                                src={`/gallery/kanary/thumb/${img}`}
                                alt={`Gallery image ${i + 1}`}
                                loading="lazy"
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
                    >
                        {/* Top Bar */}
                        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-gradient-to-b from-black/50 to-transparent">
                            <div className="text-white/70 font-body text-sm">
                                {currentIndex + 1} / {images.length}
                            </div>
                            <div className="flex gap-4">
                                <button
                                    onClick={togglePlay}
                                    className="p-2 text-white/70 hover:text-white transition-colors"
                                    title={isPlaying ? "Zatrzymaj pokaz slajdów" : "Odtwórz pokaz slajdów"}
                                >
                                    {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                                </button>
                                <button
                                    onClick={closeLightbox}
                                    className="p-2 text-white/70 hover:text-white transition-colors"
                                    title="Zamknij"
                                >
                                    <X size={28} />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Areas */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-0 top-0 bottom-0 w-1/4 md:w-32 flex items-center justify-start pl-4 md:pl-8 text-white/30 hover:text-white transition-colors z-40 group outline-none"
                        >
                            <ChevronLeft size={48} className="group-hover:-translate-x-2 transition-transform" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-0 top-0 bottom-0 w-1/4 md:w-32 flex items-center justify-end pr-4 md:pr-8 text-white/30 hover:text-white transition-colors z-40 group outline-none"
                        >
                            <ChevronRight size={48} className="group-hover:translate-x-2 transition-transform" />
                        </button>

                        {/* Main Image */}
                        <div
                            className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
                            onClick={closeLightbox}
                        >
                            <motion.img
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                src={`/gallery/kanary/${images[currentIndex]}`}
                                alt={`Gallery full size ${currentIndex + 1}`}
                                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Gallery;
