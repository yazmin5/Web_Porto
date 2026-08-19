import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SectionHead, FadeUp } from "@/components/Reveal";
import { projects } from "@/content";

const tick = { fontSize: 10, fill: "#555555", fontFamily: "JetBrains Mono" };
const tooltipStyle = {
  backgroundColor: "#050505",
  border: "none",
  borderRadius: 0,
  fontFamily: "JetBrains Mono",
  fontSize: 11,
  color: "#fff",
};

const ProjectChart = ({ p, height = 220 }) => {
  const common = {
    data: p.chartData,
    margin: { top: 10, right: 10, left: -18, bottom: 0 },
  };
  const grid = <CartesianGrid vertical={false} stroke="#F0F0F0" />;
  const x = <XAxis dataKey={p.xKey} tick={tick} axisLine={{ stroke: "#E5E5E5" }} tickLine={false} />;
  const y = <YAxis tick={tick} axisLine={false} tickLine={false} />;
  const tip = <Tooltip cursor={{ fill: "#F9F9F9", stroke: "#E5E5E5" }} contentStyle={tooltipStyle} />;

  return (
    <div style={{ height }} aria-label={p.chartTitle} role="img">
      <ResponsiveContainer width="100%" height="100%">
        {p.chartType === "bar" ? (
          <BarChart {...common} barGap={4}>
            {grid}{x}{y}{tip}
            {Object.keys(p.chartData[0]).filter((k) => k !== p.xKey).map((k, i) => (
              <Bar key={k} dataKey={k} fill={i === 0 ? "#FF4F00" : "#050505"} radius={0} animationDuration={1200} />
            ))}
          </BarChart>
        ) : p.chartType === "line" ? (
          <LineChart {...common}>
            {grid}{x}{y}{tip}
            {Object.keys(p.chartData[0]).filter((k) => k !== p.xKey).map((k, i) => (
              <Line key={k} type="monotone" dataKey={k} stroke={i === 0 ? "#FF4F00" : "#050505"} strokeWidth={2.5} dot={false} animationDuration={1400} />
            ))}
          </LineChart>
        ) : (
          <AreaChart {...common}>
            {grid}{x}{y}{tip}
            {Object.keys(p.chartData[0]).filter((k) => k !== p.xKey).map((k, i) => (
              <Area key={k} type="monotone" dataKey={k} stackId="1" stroke={i === 0 ? "#FF4F00" : "#050505"} fill={i === 0 ? "#FF4F00" : "#050505"} fillOpacity={i === 0 ? 0.35 : 0.12} animationDuration={1400} />
            ))}
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

const ProjectCard = ({ p, span, onOpen }) => (
  <FadeUp className={span}>
    <article className="group flex h-full flex-col border border-line bg-white" data-testid={`project-card-${p.index}`}>
      {p.image ? (
        <div className="overflow-hidden border-b border-line">
          <img
            src={p.image}
            alt={p.title}
            className="h-60 w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105 md:h-72"
          />
        </div>
      ) : (
        <div className="border-b border-line bg-paper p-5">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{p.chartTitle}</p>
          <ProjectChart p={p} height={170} />
        </div>
      )}
      <div className="flex grow flex-col p-6 md:p-8">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          <span><span className="text-accent">{p.index}</span> / {p.category}</span>
          <span>{p.year}</span>
        </div>
        <h3 className="mt-5 font-display text-2xl text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
          {p.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{p.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.metrics.slice(0, 2).map((m) => (
            <span key={m.label} className="border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-ink">
              {m.value} — {m.label}
            </span>
          ))}
        </div>
        <button
          onClick={onOpen}
          data-testid={`project-open-${p.index}`}
          className="mt-8 inline-flex items-center gap-2 self-start border-b-2 border-ink pb-1 font-mono text-[11px] uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          View case study <ArrowUpRight size={14} />
        </button>
      </div>
    </article>
  </FadeUp>
);

const Projects = () => {
  const [active, setActive] = useState(null);
  const spans = ["col-span-12 lg:col-span-7", "col-span-12 lg:col-span-5", "col-span-12 lg:col-span-5", "col-span-12 lg:col-span-7"];

  return (
    <section id="work" className="py-24 md:py-32" data-testid="projects-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHead index="03" label="Selected work" titleLines={[<>Case studies</>, <>with <em className="font-light">receipts</em>.</>]} />

        <div className="mt-16 grid grid-cols-12 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} span={spans[i]} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={() => setActive(null)}>
        <DialogContent className="max-w-3xl rounded-none border-line p-0" data-testid="case-study-dialog">
          {active && (
            <div className="max-h-[85vh] overflow-y-auto">
              <div className="border-b border-line p-8 md:p-10">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  <span><span className="text-accent">{active.index}</span> / {active.category}</span>
                  <span>{active.year}</span>
                </div>
                <DialogTitle className="mt-5 font-display text-3xl font-normal text-ink md:text-5xl">
                  {active.title}
                </DialogTitle>
              </div>

              <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-2 md:p-10">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">The problem</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{active.challenge}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">The approach</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{active.approach}</p>
                </div>
              </div>

              <div className="border-y border-line bg-paper p-8 md:p-10">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{active.chartTitle}</p>
                <ProjectChart p={active} height={240} />
              </div>

              <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {active.metrics.map((m) => (
                  <div key={m.label} className="p-8">
                    <p className="font-display text-3xl text-ink md:text-4xl">{m.value}</p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-line p-8 md:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">The outcome</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{active.outcome}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
