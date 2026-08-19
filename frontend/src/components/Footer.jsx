import { ArrowUp } from "lucide-react";
import { profile } from "@/content";
import { useLang } from "@/i18n";

const Footer = () => {
  const { t } = useLang();

  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line bg-ink py-10 text-white" data-testid="site-footer">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/60" data-testid="footer-credit">
          © 2026 {profile.name} — Data Analyst / BI
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/60">
          {t("footerTag").split(" ").slice(0, -1).join(" ")} <span className="text-accent">{t("footerTag").split(" ").slice(-1)}</span>
        </p>
        <button
          onClick={toTop}
          data-testid="footer-back-to-top"
          className="inline-flex items-center gap-2 border border-white/30 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:border-accent hover:bg-accent"
        >
          {t("backTop")} <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
