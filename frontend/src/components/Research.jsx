import { ArrowUpRight } from "lucide-react";
import { SectionHead, FadeUp } from "@/components/Reveal";
import { useLang, pick } from "@/i18n";
import { research } from "@/content";

const Research = () => {
  const { lang, t } = useLang();

  return (
    <section id="research" className="py-24 md:py-32" data-testid="research-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <SectionHead index="05" label={t("researchLabel")} titleLines={t("researchHead")} />
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <FadeUp delay={0.15}>
              <a
                href={research.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="research-card"
                className="group block border border-line bg-white p-8 transition-colors duration-300 hover:border-ink md:p-12"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  <span className="text-accent">{t("peerReviewed")}</span>
                  <span>{research.year}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl leading-snug text-ink transition-colors duration-300 group-hover:text-accent md:text-4xl" data-testid="research-title">
                  {pick(research.title, lang)}
                </h3>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                  {pick(research.description, lang)}
                </p>
                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
                  {pick(research.journal, lang)}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-mono text-[11px] uppercase tracking-[0.25em] text-ink transition-colors duration-300 group-hover:border-accent group-hover:text-accent" data-testid="research-link">
                  {t("readPaper")}
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
