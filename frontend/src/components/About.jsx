import { SectionHead, FadeUp } from "@/components/Reveal";
import { profile, manifesto, IMAGES } from "@/content";

const About = () => (
  <section id="about" className="py-24 md:py-32" data-testid="about-section">
    <div className="mx-auto max-w-[1400px] px-6 md:px-10">
      <SectionHead index="01" label="About" titleLines={[<>Signal, <em className="font-light">not noise</em>.</>]} />

      <div className="mt-16 md:mt-20 grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-5">
          <FadeUp>
            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 border border-line bg-fog" aria-hidden="true" />
              <img
                src={IMAGES.portrait}
                alt={`Portrait of ${profile.name}`}
                data-testid="about-portrait"
                className="relative h-[400px] w-full border border-line object-cover grayscale transition-[filter] duration-700 hover:grayscale-0 md:h-[540px]"
              />
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted" data-testid="about-caption">
              {profile.name} — {profile.location}
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-accent" data-testid="about-availability">
              {profile.availability}
            </p>
          </FadeUp>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <FadeUp delay={0.1}>
            <p className="text-lg leading-relaxed text-ink md:text-xl" data-testid="about-lede">
              I'm {profile.name} — a data analyst who treats every dashboard like a product and every metric like a promise.
            </p>
          </FadeUp>
          <div className="mt-12 space-y-0">
            {manifesto.map((c, i) => (
              <FadeUp key={c.n} delay={0.1 + i * 0.1}>
                <div className="grid grid-cols-12 gap-4 border-t border-line py-8" data-testid={`manifesto-chapter-${c.n}`}>
                  <span className="col-span-3 font-mono text-sm text-accent md:col-span-2">{c.n} /</span>
                  <div className="col-span-9 md:col-span-10">
                    <h3 className="font-display text-2xl md:text-3xl text-ink">{c.title}</h3>
                    <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">{c.text}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
