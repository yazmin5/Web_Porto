import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "@/content";

export const scrollToHash = (href) => {
  if (window.__lenis) {
    window.__lenis.scrollTo(href, { offset: -64, duration: 1.4 });
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }
};

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToHash(href), open ? 350 : 0);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-white/90 backdrop-blur-md" data-testid="site-nav">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            data-testid="nav-logo"
            className="font-mono text-sm font-bold tracking-[0.2em] text-ink hover:text-accent transition-colors"
          >
            {profile.initials}©
          </a>
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => go(e, l.href)}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="group relative font-mono text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:text-accent"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              data-testid="nav-cta-contact"
              className="flex items-center gap-1.5 border border-ink px-5 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
            >
              Contact <ArrowUpRight size={13} />
            </a>
          </nav>
          <button
            className="md:hidden text-ink"
            onClick={() => setOpen(true)}
            data-testid="nav-menu-open"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-white flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-testid="nav-mobile-menu"
          >
            <div className="flex h-16 items-center justify-between px-6 border-b border-line">
              <span className="font-mono text-sm font-bold tracking-[0.2em]">{profile.initials}©</span>
              <button onClick={() => setOpen(false)} data-testid="nav-menu-close" aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {[...links, { label: "Contact", href: "#contact" }].map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                  className="font-display text-5xl text-ink py-3 border-b border-line hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
