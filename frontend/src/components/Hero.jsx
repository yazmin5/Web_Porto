import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { MaskedLines, FadeUp, Counter } from "@/components/Reveal";
import { scrollToHash } from "@/components/Nav";
import { profile, heroStats, sparkData, IMAGES } from "@/content";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-28 md:pt-36 pb-14" data-testid="hero-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeUp delay={0.05}>
          <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] text-muted" data-testid="hero-supertitle">
            Portfolio © 2026 — {profile.role}
          </p>
        </FadeUp>

        <div className="mt-10 grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-display text-[15vw] sm:text-7xl lg:text-8xl leading-[0.98] tracking-tight text-ink" data-testid="hero-headline">
              <MaskedLines
                lines={[
                  <>Turning raw</>,
                  <><em className="font-light">data</em> into</>,
                  <>decisions<span className="text-accent">.</span></>,
                ]}
                delay={0.2}
              />
            </h1>

            <FadeUp delay={0.75}>
              <p className="mt-10 max-w-md text-base leading-relaxed text-muted" data-testid="hero-intro">
                {profile.intro}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <button
                  onClick={() => scrollToHash("#work")}
                  data-testid="hero-cta-work"
                  className="group inline-flex items-center gap-2 bg-ink px-8 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-accent"
                >
                  View case studies
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <button
                  onClick={() => scrollToHash("#contact")}
                  data-testid="hero-cta-contact"
                  className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink border-b-2 border-ink pb-1 transition-colors duration-300 hover:text-accent hover:border-accent"
                >
                  Get in touch
                </button>
              </div>
            </FadeUp>
          </div>

          <div className="relative col-span-12 mt-14 lg:col-span-5 lg:mt-0">
            <motion.div style={{ y: yImg }} className="relative">
              <FadeUp delay={0.4}>
                <div className="overflow-hidden border border-line" data-testid="hero-image-frame">
                  <motion.img
                    src={IMAGES.waves}
                    alt="Abstract flowing data lines"
                    className="h-[300px] w-full object-cover md:h-[440px]"
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  />
                </div>
              </FadeUp>
            </motion.div>

            <motion.div
              style={{ y: yCard }}
              className="absolute -bottom-8 -left-2 md:-left-10 z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            >
              <div className="w-56 md:w-64 border border-ink bg-white p-5 shadow-[8px_8px_0_#050505]" data-testid="hero-forecast-card">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Forecast — Revenue index</p>
                <p className="mt-2 font-display text-4xl text-ink">
                  +18.2<span className="text-accent">%</span>
                </p>
                <div className="mt-3 h-16">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={sparkData} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                      <Area type="monotone" dataKey="v" stroke="#FF4F00" strokeWidth={2} fill="#FF4F00" fillOpacity={0.12} isAnimationActive />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-24 md:mt-28 grid grid-cols-1 sm:grid-cols-3 border-t border-line" data-testid="hero-stats">
          {heroStats.map((s, i) => (
            <FadeUp key={s.label} delay={0.15 * i} className={`border-line py-8 sm:pr-8 ${i < heroStats.length - 1 ? "sm:border-r" : ""} ${i > 0 ? "sm:pl-8" : ""} border-b sm:border-b-0`}>
              <div data-testid={`hero-stat-${i}`}>
                <Counter to={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} className="font-display text-5xl md:text-6xl text-ink" />
                <p className="mt-3 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-muted">{s.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4} className="mt-14 flex items-center gap-3">
          <ArrowDown size={14} className="animate-bounce text-accent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">Scroll to explore</span>
        </FadeUp>
      </div>
    </section>
  );
};

export default Hero;
