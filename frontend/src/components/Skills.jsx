import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, Radar,
  AreaChart, Area, ResponsiveContainer,
} from "recharts";
import { SectionHead, FadeUp } from "@/components/Reveal";
import { proficiency, domains, yearly, toolbox } from "@/content";
import { useLang } from "@/i18n";

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

const Skills = () => {
  const { lang, t } = useLang();

  return (
    <section id="skills" className="border-y border-line bg-paper py-24 md:py-32" data-testid="skills-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHead index="02" label={t("skillsLabel")} titleLines={t("skillsHead")} />

        <div className="mt-16 grid grid-cols-12 gap-px border border-line bg-line" data-testid="skills-bento">
          <FadeUp className="col-span-12 bg-white p-6 md:col-span-5 md:p-8">
            <CellLabel>{t("profLabel")}</CellLabel>
            <div className="h-60" data-testid="skills-proficiency-chart" aria-label="Bar chart of tool proficiency">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={proficiency} margin={{ top: 8, right: 0, left: -22, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="#F0F0F0" />
                  <XAxis dataKey="skill" tick={tick} axisLine={{ stroke: "#E5E5E5" }} tickLine={false} interval={0} />
                  <YAxis tick={tick} axisLine={false} tickLine={false} domain={[0, 100]} />
                  <Tooltip cursor={{ fill: "#F9F9F9" }} contentStyle={tooltipStyle} />
                  <Bar dataKey="level" radius={0} animationDuration={1400}>
                    {proficiency.map((d, i) => (
                      <Cell key={d.skill} fill={i === 0 ? "#1a73e8" : "#050505"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </FadeUp>

          <FadeUp delay={0.08} className="col-span-12 bg-white p-6 md:col-span-4 md:p-8">
            <CellLabel>{t("domainLabel")}</CellLabel>
            <div className="h-60" data-testid="skills-radar-chart" aria-label="Radar chart of skill domains">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={domains[lang]} outerRadius="72%">
                  <PolarGrid stroke="#E5E5E5" />
                  <PolarAngleAxis dataKey="domain" tick={{ fontSize: 9, fill: "#555555", fontFamily: "JetBrains Mono" }} />
                  <Radar dataKey="target" stroke="#C9C9C9" strokeDasharray="4 4" fill="none" isAnimationActive={false} />
                  <Radar dataKey="level" stroke="#1a73e8" strokeWidth={2} fill="#1a73e8" fillOpacity={0.14} animationDuration={1400} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </FadeUp>

          <FadeUp delay={0.16} className="col-span-12 flex flex-col justify-between bg-ink p-6 text-white md:col-span-3 md:p-8">
            <CellLabel><span className="text-white/50">{t("skillsLabel")}</span></CellLabel>
            <div data-testid="skills-statement">
              <p className="font-display text-3xl leading-snug md:text-4xl">
                {t("profStatement")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {t("profSub")}
              </p>
            </div>
            <p className="mt-8 border-t border-white/20 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              {t("profTag")}
            </p>
          </FadeUp>

          <FadeUp className="col-span-12 bg-white p-6 md:col-span-4 md:p-8">
            <CellLabel>{t("ordersLabel")}</CellLabel>
            <div className="h-52" data-testid="skills-yearly-chart" aria-label="Area chart of orders per month in 2026">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={yearly} margin={{ top: 8, right: 8, left: -26, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="#F0F0F0" />
                  <XAxis dataKey="m" tick={tick} axisLine={{ stroke: "#E5E5E5" }} tickLine={false} />
                  <YAxis tick={tick} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ stroke: "#E5E5E5" }} contentStyle={tooltipStyle} />
                  <Area type="monotone" dataKey="orders" stroke="#050505" strokeWidth={2} fill="#050505" fillOpacity={0.08} animationDuration={1400} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </FadeUp>

          <FadeUp delay={0.08} className="col-span-12 bg-white p-6 md:col-span-4 md:p-8">
            <CellLabel>{t("driversLabel")}</CellLabel>
            <div className="flex flex-wrap gap-2" data-testid="skills-toolbox">
              {toolbox.map((tool) => (
                <span
                  key={tool}
                  className="cursor-default border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.16} className="col-span-12 flex flex-col justify-between bg-white p-6 md:col-span-4 md:p-8">
            <CellLabel>{t("mastersLabel")}</CellLabel>
            <div data-testid="skills-stat-gpa">
              <p className="font-display text-6xl md:text-7xl text-ink">
                3.8<span className="text-accent">/4</span>
              </p>
              <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-muted">
                {t("gpaText")}
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Skills;
