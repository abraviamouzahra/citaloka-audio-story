import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ChevronLeft, Play, Share2, Heart, Clock } from "lucide-react";
import rara from "@/assets/subtheme/rara-temp.png";

export const Route = createFileRoute("/rara")({
  component: RaraPage,
  head: () => ({
    meta: [
      { title: "Rara — Cita Loka Audio Story" },
      {
        name: "description",
        content:
          "Dengarkan petualangan Rara — cerita audio interaktif tentang pangan lokal Indonesia untuk anak.",
      },
    ],
  }),
});

const BG = "#F60F0F";
const ACCENT = "#FB6D00";

type Story = {
  num: string;
  title: string;
  duration: string;
};

const stories: Story[] = [
  { num: "01", title: "Rara Indonesia", duration: "0:47" },
  { num: "02", title: "Rara English", duration: "0:47" },
  { num: "03", title: "Rara Daerah", duration: "0:47" },
];


function RaraPage() {
  const [isFavorite, setIsFavorite] = useState(false);
  const storyListRef = useRef<HTMLElement | null>(null);

  const scrollToStoryList = () => {
    storyListRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <main className="min-h-screen bg-background md:bg-[#ffffff]">
      <div className="mx-auto w-full max-w-md lg:max-w-6xl md:rounded-[32px] md:bg-white md:shadow-[0_10px_40px_rgba(0,0,0,0.06)] px-5 pb-16 pt-8 md:py-10">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <Link
            to="/"
            className="grid h-10 w-10 place-items-center rounded-full border bg-card transition-transform active:scale-95"
            style={{ borderColor: "var(--color-border)" }}
            aria-label="Kembali"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            Subtema
          </span>
          <button
            type="button"
            aria-label="Bagikan"
            className="grid h-10 w-10 place-items-center rounded-full border bg-card transition-transform active:scale-95"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Share2 className="h-4 w-4 text-foreground" />
          </button>
        </header>

        {/* Poster 4:5 */}
        <section className="mt-6 flex justify-center">
          <div
            className="relative w-full max-w-[320px] overflow-hidden rounded-[24px] sm:max-w-[360px] lg:max-w-[380px]"
            style={{
              aspectRatio: "4 / 5",
              backgroundColor: BG,
              boxShadow:
                "0 10px 30px -10px color-mix(in oklab, #41A96E 35%, transparent)",
            }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(circle at 75% 25%, ${ACCENT}, transparent 60%)`,
              }}
            />
            <span
              className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur"
              style={{ color: BG }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              Episode 01
            </span>
            <img
              src={rara}
              alt="Karakter Rara"
              className="absolute inset-0 h-full w-full object-contain object-bottom"
            />
          </div>
        </section>

        {/* Title block */}
        <section className="mt-6">
          <p
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: BG }}
          >
            Rara • Subtema
          </p>
          <h1 className="mt-2 font-display text-[30px] leading-[1.05] text-foreground">
            Rara
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Anak perempuan yang lucu dengan logatnya begitu berbeda, selain lucu karena cara bicaranya, Rara juga sangat senang sekali dengan warna merah muda. Tampak dari gayanya dengan pakaian berwarna merah muda, selain itu Rara juga terkenal dengan ‘anak rumahan’ terlihat dari Ibunya yang sangat penuh kasih sayang dengan anaknya.
          </p>

          {/* meta row */}
          <div className="mt-4 flex items-center gap-3 text-xs font-semibold text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              3 min
            </span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>3 audio</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
            <span>Usia 4+</span>
          </div>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={scrollToStoryList}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full font-display text-[15px] text-white transition-transform active:scale-[0.98]"
              style={{
                backgroundColor: BG,
                boxShadow:
                  "0 8px 22px -8px color-mix(in oklab, #41A96E 55%, transparent)",
              }}
            >
              <Play className="h-4 w-4 fill-white" />
              Putar Cerita
            </button>
            <button
              type="button"
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label="Favorit"
              className="grid h-12 w-12 place-items-center rounded-full border bg-card transition-transform active:scale-95"
              style={{ borderColor: "var(--color-border)" }}
            >
              <Heart
                className="h-5 w-5"
                style={{ color: ACCENT }}
                fill={isFavorite ? ACCENT : "none"}
              />
            </button>
          </div>
        </section>

        {/* Story list */}
        <section ref={storyListRef} className="mt-10 scroll-mt-6">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-xl text-foreground">
              Daftar Cerita
            </h2>
            <span className="text-xs font-bold text-muted-foreground">
              3 halaman
            </span>
          </div>

          <ul className="mt-4 flex flex-col gap-3">
            {stories.map((s) => (
              <li
                key={s.num}
                className="rounded-[24px] bg-card p-4"
                style={{
                  boxShadow:
                    "0 1px 2px rgba(16,24,40,0.04), 0 6px 20px rgba(16,24,40,0.05)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-base"
                    style={{
                      backgroundColor:
                        "color-mix(in oklab, #41A96E 12%, white)",
                      color: BG,
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[16px] leading-tight text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {s.duration}
                    </p>
                  </div>
                  <Link
                    to="/player"
                    search={{
                      title: s.title,
                      duration: s.duration,
                      character: "rara",
                    }}
                    aria-label={`Putar ${s.title}`}
                    className="grid h-10 w-10 place-items-center rounded-full transition-transform active:scale-95"
                    style={{ backgroundColor: BG }}
                  >
                    <Play className="h-3.5 w-3.5 fill-white text-white" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Made with <span style={{ color: "var(--cl-red)" }}>♥</span> for kids
        </p>
      </div>
    </main>
  );
}
