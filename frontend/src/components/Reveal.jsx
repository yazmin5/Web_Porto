import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export const MaskedLines = ({ lines, delay = 0, lineClassName = "" }) => (
  <>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
        <motion.span
          className={`block will-change-transform ${lineClassName}`}
          initial={{ y: "115%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.14 }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </>
);

export const MaskedLinesInView = ({ lines, delay = 0, lineClassName = "" }) => (
  <>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
        <motion.span
          className={`block will-change-transform ${lineClassName}`}
          initial={{ y: "115%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: EASE, delay: delay + i * 0.13 }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </>
);

export const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.9, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

export const Counter = ({ to, prefix = "", suffix = "", className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
};

export const SectionHead = ({ index, label, titleLines, className = "" }) => (
  <div className={className}>
    <FadeUp>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted flex items-center gap-4">
        <span className="text-accent">{index}</span>
        <span className="h-px w-12 bg-ink/20" aria-hidden="true" />
        {label}
      </p>
    </FadeUp>
    <h2 className="mt-8 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.04] text-ink">
      <MaskedLinesInView lines={titleLines} />
    </h2>
  </div>
);
