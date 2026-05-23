import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Headphones, Sparkles } from "lucide-react";
import pandu from "@/assets/home/pandu.jpg";
import satya from "@/assets/home/satya.jpg";
import rara from "@/assets/home/rara.jpg";
import sasa from "@/assets/home/sasa.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cita Loka Audio Story" },
      {
        name: "description",
        content:
          "Cita Loka — cerita audio interaktif untuk anak tentang bahan pangan lokal Indonesia. Dengarkan petualangan Pandu, Satya, Rara, dan Sasa.",
      },
    ],
  }),
});

type Character = {
  name: string;
  image: string;
  bg: string;
  accent: string;
  badge: string;
  title: string;
  desc: string;
};

const characters: Character[] = [
  {
    name: "Pandu",
    image: pandu,
    bg: "#41A96E",
    accent: "#FB6D00",
    badge: "Jawa",
    title: "Lorem Ipsum Dolor Sit",
    desc: "Pandu merupakan anak seorang petani yang selalu bekerja keras dalam menanam berbagai bahan pokok bersama ayahnya, ia lahir di desa yang tepat di wilayah Jawa Timur. Pakaian pandu juga menjadi khas dari jati dirinya dengan lurik dan kesederhanaannya",
  },
  {
    name: "Satya",
    image: satya,
    bg: "#2FCFE1",
    accent: "#FFE500",
    badge: "Papua",
    title: "Lorem Ipsum Dolor Sit",
    desc: "Satya seorang anak laki-laki dengan warna kulitnya begitu eksotis dengan rambut ikal menjadi ciri khasnya. Ia suka sekali dengan pasar,  bukan karena apa tapi Satya terbiasa oleh aktivitas Ibunya yang berjualan bahan pokok di pasar. Logat yang cepat dengan bahasa papua menjadi ciri khas Satya dan Ibunya.",
  },
  {
    name: "Rara",
    image: rara,
    bg: "#F60F0F",
    accent: "#FB6D00",
    badge: "Ngapak",
    title: "Lorem Ipsum Dolor Sit",
    desc: "Anak perempuan yang lucu dengan logatnya begitu berbeda, selain lucu karena cara bicaranya, Rara juga sangat senang sekali dengan warna merah muda. Tampak dari gayanya dengan pakaian berwarna merah muda, selain itu Rara juga terkenal dengan ‘anak rumahan’ terlihat dari Ibunya yang sangat penuh kasih sayang dengan anaknya.",
  },
  {
    name: "Sasa",
    image: sasa,
    bg: "#A16AE5",
    accent: "#FFE500",
    badge: "Bali",
    title: "Lorem Ipsum Dolor Sit",
    desc: "Anak perempuan yang lucu dengan logatnya begitu berbeda, selain lucu karena cara bicaranya, Rara juga sangat senang sekali dengan warna merah muda. Tampak dari gayanya dengan pakaian berwarna merah muda, selain itu Rara juga terkenal dengan ‘anak rumahan’ terlihat dari Ibunya yang sangat penuh kasih sayang dengan anaknya.",
  },
];

function Logo() {
  return (
    <div className="font-display text-[34px] leading-[0.85] font-extrabold">
      <div style={{ color: "var(--cl-green)" }}>Cita</div>
      <div style={{ color: "var(--cl-orange)" }}>Loka</div>
    </div>
  );
}

function CharacterCard({ c }: { c: Character }) {
  return (
    <article
      className="grid grid-cols-[48%_52%] overflow-hidden rounded-[24px] transition-transform duration-300 active:scale-[0.98]"
      style={{
        background: `linear-gradient(135deg, color-mix(in oklab, ${c.bg} 13%, white), white)`,
      }}
    >
      <div className="relative min-h-[190px] overflow-hidden rounded-[24px] bg-white">
        <img
          src={c.image}
          alt={`Karakter ${c.name}`}
          loading="lazy"
          className="h-full w-full object-contain object-center p-3"
        />
      </div>

      <div className="flex flex-col justify-center px-5 py-5">
        <h3
          className="font-display text-[30px] leading-none"
          style={{ color: c.bg }}
        >
          {c.name}
        </h3>

        <p
          className="mt-1 font-display text-[20px] leading-none"
          style={{ color: c.bg }}
        >
          {c.badge}
        </p>

        <p className="mt-4 text-[13px] leading-relaxed text-foreground/80 line-clamp-3">
          {c.desc}
        </p>

        <div
          className="mt-5 flex h-11 w-full items-center justify-between gap-2 rounded-full px-4 text-[12px] font-bold text-white"
          style={{ backgroundColor: c.bg }}
        >
          <span className="whitespace-nowrap">Play Audio</span>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white">
            <Play
              className="ml-0.5 h-4 w-4"
              style={{ color: c.bg }}
              fill="currentColor"
            />
          </span>
        </div>
      </div>
    </article>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background md:bg-[#ffffff]">
      <div className="mx-auto w-full max-w-md lg:max-w-6xl md:rounded-[32px] md:bg-white md:shadow-[0_10px_40px_rgba(0,0,0,0.06)] px-5 pb-16 pt-8 md:py-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Logo />
          <div
            className="grid h-10 w-10 place-items-center rounded-full border"
            style={{ borderColor: "var(--color-border)" }}
            aria-hidden
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: "var(--cl-green)" }}
            />
          </div>
        </header>

        {/* Hero copy */}
        <section className="mt-8">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
            style={{
              backgroundColor: "color-mix(in oklab, var(--cl-yellow) 30%, white)",
              color: "#7a5a00",
            }}
          >
            <Sparkles className="h-3 w-3" strokeWidth={2.5} />
            Smart Play Kit
          </span>
          <h1 className="mt-3 font-display text-[34px] leading-[1.05] text-foreground">
            Petualangan rasa{" "}
            <span style={{ color: "var(--cl-orange)" }}>nusantara</span> untuk
            si kecil.
          </h1>
          <p className="mt-2 text-sm font-semibold text-muted-foreground">
            Audio Story Pangan Lokal untuk Anak
          </p>
        </section>

        {/* Section header */}
        <div className="mt-10 flex items-end justify-between">
          <h2 className="font-display text-xl text-foreground">
            Pilih Sahabatmu
          </h2>
          <span className="text-xs font-bold text-muted-foreground">
            4 cerita
          </span>
        </div>

        {/* Cards */}
        <section className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-5">
          {characters.map((c) => (
            <Link
              key={c.name}
              to={`/${c.name.toLowerCase()}`}
              className="block"
            >
              <CharacterCard c={c} />
            </Link>
          ))}
        </section>

        <p className="mt-10 text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          Made with <span style={{ color: "var(--cl-red)" }}>♥</span> for kids
        </p>
      </div>
    </main>
  );
}
