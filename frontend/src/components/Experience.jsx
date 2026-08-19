import { SectionHead, FadeUp } from "@/components/Reveal";
import { experience, education } from "@/content";
import { useLang, pick } from "@/i18n";

const Experience = () => {
  const { lang, t } = useLang();

  return (
    <section id="experience" className="py-24 md:py-32" data-testid="experience-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHead index="06" label={t("expLabel")} titleLines={t("expHead")} />

        <div className="relative mt-16 md:mt-20">
          <span className="absolute bottom-0 left-[5px] top-1 w-px bg-line" aria-hidden="true" />
          <div className="space-y-16">
            {experience.map((e, i) => (
              <FadeUp key={e.company} delay={i * 0.08}>
                <div className="relative pl-10 md:pl-14" data-testid={`experience-item-${i}`}>
                  <span
                    className={`absolute left-0 top-2 h-[11px] w-[11px] border-2 ${i === 0 ? "border-accent bg-accent" : "border-ink bg-white"}`}
                    aria-hidden="true"
                  />
                  <div className="grid grid-cols-12 gap-6">
                    <p className="col-span-12 pt-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted md:col-span-3">
                      {e.period}
                    </p>
                    <div className="col-span-12 md:col-span-9">
                      <h3 className="font-display text-2xl text-ink md:text-4xl">{e.role}</h3>
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">{e.company}</p>
                      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{pick(e.text, lang)}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {e.tags.map((tag) => (
                          <span key={tag} className="border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={0.1}>
          <p className="mt-24 font-mono text-xs uppercase tracking-[0.25em] text-muted flex items-center gap-4">
            <span className="text-accent">ED</span>
            <span className="h-px w-12 bg-ink/20" aria-hidden="true" />
            {t("educationLabel")}
          </p>
        </FadeUp>
        <div className="mt-8 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2" data-testid="education-grid">
          {education.map((ed, i) => (
            <FadeUp key={ed.period} delay={i * 0.1} className="bg-white p-8">
              <div data-testid={`education-item-${i}`}>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">{ed.period}</p>
                <h3 className="mt-3 font-display text-2xl text-ink md:text-3xl">{pick(ed.degree, lang)}</h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">{pick(ed.school, lang)}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{pick(ed.text, lang)}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
