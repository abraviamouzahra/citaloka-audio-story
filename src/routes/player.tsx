import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import pandu from "@/assets/player/pandu.jpeg";
import satya from "@/assets/player/satya.jpeg";
import rara from "@/assets/player/rara.jpeg";
import sasa from "@/assets/player/sasa.jpeg";

import panduIndonesia from "@/assets/audio/pandu-indonesia.mp3";
import panduEnglish from "@/assets/audio/pandu-english.mp3";
import panduDaerah from "@/assets/audio/pandu-daerah.mp3";

import satyaIndonesia from "@/assets/audio/satya-indonesia.mp3";
import satyaEnglish from "@/assets/audio/satya-english.mp3";
import satyaDaerah from "@/assets/audio/satya-daerah.mp3";

import raraIndonesia from "@/assets/audio/rara-indonesia.mp3";
import raraEnglish from "@/assets/audio/rara-english.mp3";
import raraDaerah from "@/assets/audio/rara-daerah.mp3";

import sasaIndonesia from "@/assets/audio/sasa-indonesia.mp3";
import sasaEnglish from "@/assets/audio/sasa-english.mp3";
import sasaDaerah from "@/assets/audio/sasa-daerah.mp3";

export const Route = createFileRoute("/player")({
    validateSearch: (search: Record<string, unknown>) => ({
        title: String(search.title ?? "Pandu Indonesia"),
        duration: String(search.duration ?? "2:00"),
        character: String(search.character ?? "pandu"),
    }),
    component: PlayerPage,
});

function PlayerPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [durationTime, setDurationTime] = useState(0);
    const { title, duration, character } = Route.useSearch();
    const getLanguage = (title: string) => {
        const lowerTitle = title.toLowerCase();

        if (lowerTitle.includes("english") || lowerTitle.includes("inggris")) {
            return "English";
        }

        if (lowerTitle.includes("daerah")) {
            return "Daerah";
        }

        return "Indonesia";
    };

    const language = getLanguage(title);
    const audioMap: Record<string, Record<string, string>> = {
        pandu: {
            Indonesia: panduIndonesia,
            English: panduEnglish,
            Daerah: panduDaerah,
        },
        satya: {
            Indonesia: satyaIndonesia,
            English: satyaEnglish,
            Daerah: satyaDaerah,
        },
        rara: {
            Indonesia: raraIndonesia,
            English: raraEnglish,
            Daerah: raraDaerah,
        },
        sasa: {
            Indonesia: sasaIndonesia,
            English: sasaEnglish,
            Daerah: sasaDaerah,
        },
    };

    const audioSrc = audioMap[character]?.[language];
    const imageMap: Record<string, string> = {
        pandu,
        satya,
        rara,
        sasa,
    };
    const colorMap: Record<string, string> = {
        pandu: "#41A96E",
        satya: "#2FCFE1",
        rara: "#F60F0F",
        sasa: "#A16AE5",
    };

    const activeColor = colorMap[character] ?? "#41A96E";
    const posterImage = imageMap[character] ?? pandu;
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.pause();
        audio.currentTime = 0;
        audio.load();

        setCurrentTime(0);
        setIsPlaying(false);
    }, [audioSrc]);

    const formatTime = (time: number) => {
        if (!Number.isFinite(time)) return "0:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");

        return `${minutes}:${seconds}`;
    };

    const parseDuration = (value: string) => {
        const [minutes, seconds] = value.split(":").map(Number);
        return minutes * 60 + seconds;
    };

    const durationSeconds = parseDuration(duration);
    const sliderProgress =
        durationSeconds > 0 ? (currentTime / durationSeconds) * 100 : 0;

    const progress =
        durationTime > 0 ? Math.min((currentTime / durationTime) * 100, 100) : 0;

    return (
        <main className="min-h-screen bg-background md:bg-[#ffffff]">
            <div className="mx-auto w-full max-w-md lg:max-w-6xl md:rounded-[32px] md:bg-white md:shadow-[0_10px_40px_rgba(0,0,0,0.06)] px-5 pb-16 pt-8 md:py-10">
                <header className="flex items-center justify-between">
                    <Link
                        to={`/${character}`}
                        className="grid h-10 w-10 place-items-center rounded-full border bg-card"
                        style={{ borderColor: "var(--color-border)" }}
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Link>

                    <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        Audio Story
                    </span>

                    <div className="h-10 w-10" />
                </header>

                <section className="mt-10 flex flex-1 flex-col items-center">
                    <div
                        className="absolute mt-10 h-72 w-72 rounded-full opacity-20 blur-3xl"
                        style={{ backgroundColor: activeColor }}
                    />

                    <div
                        className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-[24px] bg-card sm:max-w-[360px] lg:max-w-[380px]"
                        style={{
                            width: "100%",
                            aspectRatio: "4 / 5",
                            boxShadow:
                                "0 10px 30px -12px color-mix(in oklab, ${activeColor} 45%, transparent)",
                        }}
                    >
                        <img
                            src={posterImage}
                            alt="Poster cerita Pandu"
                            className="h-full w-full object-contain object-bottom"
                        />
                    </div>

                    <div className="mt-8 w-full">
                        <p
                            className="text-[11px] font-bold uppercase tracking-widest"
                            style={{ color: activeColor }}
                        >
                            Pandu • {language}
                        </p>

                        <h1 className="mt-2 font-display text-[30px] leading-[1.05] text-foreground">
                            {title}
                        </h1>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Audio cerita pangan lokal untuk anak.
                        </p>

                        <div className="mt-8">
                            <div className="relative h-5 w-full">
                                <div className="absolute left-0 top-1/2 h-1.5 w-full -translate-y-1/2 rounded-full bg-gray-200" />

                                <div
                                    className="absolute left-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full"
                                    style={{
                                        width: `${sliderProgress}%`,
                                        backgroundColor: activeColor,
                                    }}
                                />

                                <input
                                    type="range"
                                    min={0}
                                    max={durationSeconds}
                                    value={currentTime}
                                    onChange={(e) => {
                                        const newTime = Number(e.target.value);

                                        setCurrentTime(newTime);

                                        if (audioRef.current) {
                                            audioRef.current.currentTime = newTime;
                                        }
                                    }}
                                    className="absolute inset-0 h-5 w-full cursor-pointer opacity-0"
                                />
                            </div>

                            <div className="mt-2 flex justify-between text-xs font-semibold text-muted-foreground">
                                <span>{formatTime(currentTime)}</span>
                                <span>{duration}</span>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <button
                                type="button"
                                onClick={async () => {
                                    const audio = audioRef.current;
                                    if (!audio || !audioSrc) return;

                                    try {
                                        if (isPlaying) {
                                            audio.pause();
                                            setIsPlaying(false);
                                        } else {
                                            audio.load();
                                            await audio.play();
                                            setIsPlaying(true);
                                        }
                                    } catch (error) {
                                        console.log("Audio play failed:", error);
                                        console.log("audioSrc:", audioSrc);
                                        setIsPlaying(false);
                                    }
                                }}
                                className="grid h-20 w-20 place-items-center rounded-full text-white transition-transform active:scale-95"
                                style={{
                                    backgroundColor: activeColor,
                                    boxShadow:
                                        "0 12px 28px -10px color-mix(in oklab, ${activeColor} 70%, transparent)",
                                }}
                            >
                                {isPlaying ? (
                                    <Pause className="h-8 w-8 fill-white" />
                                ) : (
                                    <Play className="ml-1 h-8 w-8 fill-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </section>
            </div>
            <audio
                key={audioSrc}
                ref={audioRef}
                src={audioSrc}
                onError={() => {
                    console.log("Audio failed to load:", audioSrc);
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                onLoadedMetadata={(e) => {
                    const duration = e.currentTarget.duration;
                    if (Number.isFinite(duration)) {
                        setDurationTime(duration);
                    }
                }}
                onDurationChange={(e) => {
                    const duration = e.currentTarget.duration;
                    if (Number.isFinite(duration)) {
                        setDurationTime(duration);
                    }
                }}
                onEnded={() => {
                    setIsPlaying(false);
                    setCurrentTime(0);
                }}
            />
        </main>
    );
}