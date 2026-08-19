import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, Radar,
  AreaChart, Area, ResponsiveContainer,
} from "recharts";
import { SectionHead, FadeUp, Counter } from "@/components/Reveal";
import { proficiency, domains, yearly, toolbox } from "@/content";

const tick = { fontSize: 10, fill: "#555555", fontFamily: "JetBrains Mono" };
const tooltipStyle = {
  backgroundColor: "#050505",
  border: "none",
  borderRadius: 0,
  fontFamily: "JetBrains Mono",
  fontSize: 11,
  color: "#fff",
};

const CellLabel = ({ children }) => (
  <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{children}</p>
);

const Skills = () => (
  <section id="skills" className="border-y border-line bg-paper py-24 md:py-32" data-testid="skills-section">
    <div className="mx-auto max-w-[1400px] px-6 md:px-10">
      <SectionHead index="02" label="Capabilities" titleLines={[<>The toolbox,</>, <><em className="font-light">quantified</em>.</>]} />

      <div className="mt-16 grid grid-cols-12 gap-px border border-line bg-line" data-testid="skills-bento">
        <FadeUp className="col-span-12 bg-white p-6 md:col-span-5 md:p-8">
          <CellLabel>Core proficiency — self-assessed / 100</CellLabel>
          <div className="h-60" data-testid="skills-proficiency-chart" aria-label="Bar chart of tool proficiency">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={proficiency} margin={{ top: 8, right: 0, left: -22, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#F0F0F0" />
                <XAxis dataKey="skill" tick={tick} axisLine={{ stroke: "#E5E5E5" }} tickLine={false} interval={0} />
                <YAxis tick={tick} axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip cursor={{ fill: "#F9F9F9" }} contentStyle={tooltipStyle} />
                <Bar dataKey="level" radius={0} animationDuration={1400}>
                  {proficiency.map((d, i) => (
                    <Cell key={d.skill} fill={i === 0 ? "#FF4F00" : "#050505"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </FadeUp>

        <FadeUp delay={0.08} className="col-span-12 bg-white p-6 md:col-span-4 md:p-8">
          <CellLabel>Skill domains — coverage map</CellLabel>
          <div className="h-60" data-testid="skills-radar-chart" aria-label="Radar chart of skill domains">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={domains} outerRadius="72%">
                <PolarGrid stroke="#E5E5E5" />
                <PolarAngleAxis dataKey="domain" tick={{ fontSize: 9, fill: "#555555", fontFamily: "JetBrains Mono" }} />
                <Radar dataKey="target" stroke="#C9C9C9" strokeDasharray="4 4" fill="none" isAnimationActive={false} />
                <Radar dataKey="level" stroke="#FF4F00" strokeWidth={2} fill="#FF4F00" fillOpacity={0.14} animationDuration={1400} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </FadeUp>

        <FadeUp delay={0.16} className="col-span-12 flex flex-col justify-between bg-ink p-6 text-white md:col-span-3 md:p-8">
          <CellLabel><span className="text-white/50">Shipped to production</span></CellLabel>
          <div data-testid="skills-stat-dashboards">
            <Counter to={48} className="font-display text-7xl md:text-8xl" />
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/60">
              Dashboards &<br />data products
            </p>
          </div>
          <p className="mt-8 border-t border-white/20 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            Still counting
          </p>
        </FadeUp>

        <FadeUp className="col-span-12 bg-white p-6 md:col-span-4 md:p-8">
          <CellLabel>Throughput — dashboards per year</CellLabel>
          <div className="h-52" data-testid="skills-yearly-chart" aria-label="Area chart of dashboards shipped per year">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={yearly} margin={{ top: 8, right: 8, left: -26, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#F0F0F0" />
                <XAxis dataKey="year" tick={tick} axisLine={{ stroke: "#E5E5E5" }} tickLine={false} />
                <YAxis tick={tick} axisLine={false} tickLine={false} />
                <Tooltip cursor={{ stroke: "#E5E5E5" }} contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="dashboards" stroke="#050505" strokeWidth={2} fill="#050505" fillOpacity={0.08} animationDuration={1400} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </FadeUp>

        <FadeUp delay={0.08} className="col-span-12 bg-white p-6 md:col-span-4 md:p-8">
          <CellLabel>Daily drivers</CellLabel>
          <div className="flex flex-wrap gap-2" data-testid="skills-toolbox">
            {toolbox.map((t) => (
              <span
                key={t}
                className="cursor-default border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.16} className="col-span-12 flex flex-col justify-between bg-white p-6 md:col-span-4 md:p-8">
          <CellLabel>Data wrangled, lifetime</CellLabel>
          <div data-testid="skills-stat-data">
            <p className="font-display text-6xl md:text-7xl text-ink">
              12<span className="text-accent">TB</span>+
            </p>
            <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-muted">
              Modelled, cleaned and reconciled across retail, SaaS and supply-chain systems.
            </p>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

export default Skills;
