import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { SectionHead, FadeUp } from "@/components/Reveal";
import { profile } from "@/content";
import { useLang } from "@/i18n";
import dashData from "@/data/dashboardData.json";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DONUT = ["#1a73e8", "#050505", "#8a8a8a", "#C9C9C9", "#E5E5E5"];
const tick = { fontSize: 10, fill: "#555555", fontFamily: "JetBrains Mono" };
const tooltipStyle = {
  backgroundColor: "#050505", border: "none", borderRadius: 0,
  fontFamily: "JetBrains Mono", fontSize: 11, color: "#fff",
};
const money = (v) => `$${Number(v).toLocaleString()}`;
const moneyShort = (v) => (v >= 1e6 ? `$${(v / 1e6).toFixed(2)}M` : `$${Math.round(v / 1e3)}K`);
const sum = (rows, k) => rows.reduce((a, r) => a + r[k], 0);
const groupSum = (rows, key, val) => {
  const m = {};
  rows.forEach((r) => { m[r[key]] = (m[r[key]] || 0) + r[val]; });
  return Object.entries(m).map(([name, value]) => ({ name, value: Math.round(value) })).sort((a, b) => b.value - a.value);
};

const Chip = ({ active, onClick, testid, children }) => (
  <button
    data-testid={testid}
    onClick={onClick}
    className={`border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors duration-300 ${
      active ? "border-ink bg-ink text-white" : "border-line bg-white text-muted hover:border-ink hover:text-ink"
    }`}
  >
    {children}
  </button>
);

const Kpi = ({ label, testid, dark = false, children }) => (
  <div data-testid={testid} className={`p-5 ${dark ? "bg-ink text-white" : "bg-white"}`}>
    <p className={`font-mono text-[9px] uppercase tracking-[0.2em] ${dark ? "text-white/50" : "text-muted"}`}>{label}</p>
    <p className="mt-2 font-display text-2xl md:text-3xl">{children}</p>
  </div>
);

const Panel = ({ label, className = "", children }) => (
  <div className={`border border-line bg-white p-5 ${className}`}>
    <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{label}</p>
    {children}
  </div>
);

const Legend = ({ items }) => (
  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
    {items.map((d, i) => (
      <span key={d.name} className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
        <span className="inline-block h-2 w-2" style={{ background: DONUT[i % DONUT.length] }} aria-hidden="true" />
        {d.name}
      </span>
    ))}
  </div>
);

const SalesDash = ({ t }) => {
  const [region, setRegion] = useState("All");
  const [channel, setChannel] = useState("All");
  const filtered = useMemo(
    () => dashData.sales.cube.filter((r) => (region === "All" || r.Region === region) && (channel === "All" || r["Sales Channel"] === channel)),
    [region, channel]
  );
  const byMonth = useMemo(
    () => MONTHS.map((m) => ({ m, revenue: Math.round(sum(filtered.filter((r) => r.Month === m), "revenue")) })),
    [filtered]
  );
  const byCat = useMemo(() => groupSum(filtered, "Product Category", "revenue"), [filtered]);
  const byChannel = useMemo(() => groupSum(filtered, "Sales Channel", "revenue"), [filtered]);
  const byRegion = useMemo(() => groupSum(filtered, "Region", "revenue"), [filtered]);
  const totRev = sum(filtered, "revenue");
  const totOrders = sum(filtered, "orders");
  const totQty = sum(filtered, "qty");

  return (
    <div data-testid="playground-sales">
      <div className="mb-6 flex flex-wrap items-center gap-2" data-testid="sales-filters">
        <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{t("filterRegion")}</span>
        {["All", ...dashData.sales.regions].map((r) => (
          <Chip key={r} active={region === r} onClick={() => setRegion(r)} testid={`sales-filter-region-${r.toLowerCase()}`}>{r === "All" ? t("allLabel") : r}</Chip>
        ))}
        <span className="ml-2 mr-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:ml-5">{t("filterChannel")}</span>
        {["All", ...dashData.sales.channels].map((c) => (
          <Chip key={c} active={channel === c} onClick={() => setChannel(c)} testid={`sales-filter-channel-${c.toLowerCase().replace(/\s/g, "-")}`}>{c === "All" ? t("allLabel") : c}</Chip>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
        <Kpi label={t("kpiRevenue")} testid="sales-kpi-revenue">{moneyShort(totRev)}</Kpi>
        <Kpi label={t("kpiOrders")} testid="sales-kpi-orders">{totOrders.toLocaleString()}</Kpi>
        <Kpi label={t("kpiUnits")} testid="sales-kpi-units">{totQty.toLocaleString()}</Kpi>
        <Kpi label={t("kpiAov")} testid="sales-kpi-aov" dark>{money(Math.round(totRev / Math.max(totOrders, 1)))}</Kpi>
      </div>

      <div className="mt-6 grid grid-cols-12 gap-6">
        <Panel label={t("chartMonthly")} className="col-span-12 lg:col-span-7">
          <div className="h-64" data-testid="sales-chart-monthly" aria-label="Area chart of monthly revenue">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={byMonth} margin={{ top: 8, right: 8, left: -6, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#F0F0F0" />
                <XAxis dataKey="m" tick={tick} axisLine={{ stroke: "#E5E5E5" }} tickLine={false} />
                <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={(v) => `$${Math.round(v / 1000)}K`} />
                <Tooltip contentStyle={tooltipStyle} formatter={money} cursor={{ stroke: "#E5E5E5" }} />
                <Area type="monotone" dataKey="revenue" stroke="#1a73e8" strokeWidth={2.5} fill="#1a73e8" fillOpacity={0.12} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel label={t("chartCategory")} className="col-span-12 lg:col-span-5">
          <div className="h-64" data-testid="sales-chart-category" aria-label="Bar chart of revenue by category">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byCat} layout="vertical" margin={{ top: 0, right: 12, left: 24, bottom: 0 }}>
                <CartesianGrid horizontal={false} stroke="#F0F0F0" />
                <XAxis type="number" tick={tick} axisLine={false} tickLine={false} tickFormatter={(v) => `$${Math.round(v / 1000)}K`} />
                <YAxis type="category" dataKey="name" tick={tick} axisLine={false} tickLine={false} width={96} />
                <Tooltip contentStyle={tooltipStyle} formatter={money} cursor={{ fill: "#F9F9F9" }} />
                <Bar dataKey="value" fill="#050505" radius={0} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel label={t("chartChannelShare")} className="col-span-12 lg:col-span-6">
          <div className="h-56" data-testid="sales-chart-channel" aria-label="Donut chart of channel revenue share">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={byChannel} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} strokeWidth={2} stroke="#fff">
                  {byChannel.map((d, i) => <Cell key={d.name} fill={DONUT[i % DONUT.length]} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} formatter={money} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <Legend items={byChannel} />
        </Panel>

        <Panel label={t("chartRegionShare")} className="col-span-12 lg:col-span-6">
          <div className="h-56" data-testid="sales-chart-region" aria-label="Donut chart of regional revenue share">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={byRegion} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} strokeWidth={2} stroke="#fff">
                  {byRegion.map((d, i) => <Cell key={d.name} fill={DONUT[i % DONUT.length]} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} formatter={money} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <Legend items={byRegion} />
        </Panel>
      </div>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted" data-testid="sales-source">
        {t("sourceLabel")}: EXCEL SALES DASHBOARD.xlsx — {dashData.sales.kpi.orders.toLocaleString()} orders, {dashData.sales.monthSpan}
      </p>
    </div>
  );
};

const InfraDash = ({ t }) => {
  const [year, setYear] = useState("All");
  const filtered = useMemo(
    () => dashData.infra.cube.filter((r) => year === "All" || String(r.Year) === String(year)),
    [year]
  );
  const byYear = useMemo(
    () => (year === "All" ? dashData.infra.byYear : dashData.infra.byYear.filter((r) => String(r.Year) === String(year)))
      .map((r) => ({ year: String(r.Year), actual: Math.round(r.actual / 1000), target: Math.round(r.target / 1000) })),
    [year]
  );
  const byDept = useMemo(() => groupSum(filtered, "Department (Acronyme)", "savings"), [filtered]);
  const byStatus = useMemo(() => groupSum(filtered, "Project Status", "n"), [filtered]);
  const totVal = sum(filtered, "value");
  const totSav = sum(filtered, "savings");
  const totN = sum(filtered, "n");
  const profitable = sum(filtered.filter((r) => r["Profit Status"] === "Profit"), "n");

  return (
    <div data-testid="playground-infra">
      <div className="mb-6 flex flex-wrap items-center gap-2" data-testid="infra-filters">
        <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{t("filterYear")}</span>
        {["All", ...dashData.infra.years].map((y) => (
          <Chip key={y} active={String(year) === String(y)} onClick={() => setYear(y)} testid={`infra-filter-year-${y}`}>{y === "All" ? t("allLabel") : y}</Chip>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
        <Kpi label={t("kpiValue")} testid="infra-kpi-value">{moneyShort(totVal)}</Kpi>
        <Kpi label={t("kpiSavings")} testid="infra-kpi-savings">{moneyShort(totSav)}</Kpi>
        <Kpi label={t("kpiProjects")} testid="infra-kpi-projects">{totN}</Kpi>
        <Kpi label={t("kpiProfit")} testid="infra-kpi-profit" dark>{totN ? Math.round((profitable / totN) * 100) : 0}%</Kpi>
      </div>

      <div className="mt-6 grid grid-cols-12 gap-6">
        <Panel label={t("chartTargetActual")} className="col-span-12 lg:col-span-7">
          <div className="h-64" data-testid="infra-chart-year" aria-label="Bar chart of target vs actual by year">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byYear} margin={{ top: 8, right: 8, left: -6, bottom: 0 }} barGap={4}>
                <CartesianGrid vertical={false} stroke="#F0F0F0" />
                <XAxis dataKey="year" tick={tick} axisLine={{ stroke: "#E5E5E5" }} tickLine={false} />
                <YAxis tick={tick} axisLine={false} tickLine={false} tickFormatter={(v) => `$${Math.round(v / 1000)}M`} />
                <Tooltip contentStyle={tooltipStyle} formatter={(v) => `$${Number(v).toLocaleString()}K`} cursor={{ fill: "#F9F9F9" }} />
                <Bar dataKey="actual" name={t("actualLabel")} fill="#1a73e8" radius={0} />
                <Bar dataKey="target" name={t("targetLabel")} fill="#050505" radius={0} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 flex gap-5">
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted"><span className="inline-block h-2 w-2 bg-accent" />{t("actualLabel")}</span>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted"><span className="inline-block h-2 w-2 bg-ink" />{t("targetLabel")}</span>
          </div>
        </Panel>

        <Panel label={t("chartDept")} className="col-span-12 lg:col-span-5">
          <div className="h-64" data-testid="infra-chart-dept" aria-label="Bar chart of savings by department">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byDept} layout="vertical" margin={{ top: 0, right: 12, left: 0, bottom: 0 }}>
                <CartesianGrid horizontal={false} stroke="#F0F0F0" />
                <XAxis type="number" tick={tick} axisLine={false} tickLine={false} tickFormatter={(v) => `$${Math.round(v / 1000)}K`} />
                <YAxis type="category" dataKey="name" tick={tick} axisLine={false} tickLine={false} width={44} />
                <Tooltip contentStyle={tooltipStyle} formatter={money} cursor={{ fill: "#F9F9F9" }} />
                <Bar dataKey="value" fill="#050505" radius={0} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel label={t("chartStatus")} className="col-span-12 lg:col-span-5">
          <div className="h-56" data-testid="infra-chart-status" aria-label="Donut chart of project status">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={byStatus} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} strokeWidth={2} stroke="#fff">
                  {byStatus.map((d, i) => <Cell key={d.name} fill={DONUT[i % DONUT.length]} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <Legend items={byStatus} />
        </Panel>
      </div>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted" data-testid="infra-source">
        {t("sourceLabel")}: Quarterly_Infrastructure_Finance_Status.xlsx — {dashData.infra.kpi.projects} projects, {dashData.infra.years[0]}–{dashData.infra.years[dashData.infra.years.length - 1]}
      </p>
    </div>
  );
};

const TableauDash = ({ t }) => (
  <div data-testid="playground-tableau">
    <div className="border border-line bg-white">
      <iframe
        title="Maven Bank Analysis — Tableau Public"
        data-testid="tableau-embed"
        src="https://public.tableau.com/views/MavenBankAnalysis_16548448722190/DashboardBankMaven?:showVizHome=no&:embed=true&:tabs=no&:toolbar=no"
        className="h-[560px] w-full md:h-[700px]"
        loading="lazy"
      />
    </div>
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        {t("sourceLabel")}: {t("tableauSource")}
      </p>
      <a
        href={profile.tableauViz}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="tableau-open-link"
        className="inline-flex items-center gap-2 border-b-2 border-ink pb-1 font-mono text-[11px] uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
      >
        {t("openTableau")} <ArrowUpRight size={14} />
      </a>
    </div>
  </div>
);

const Playground = () => {
  const [tab, setTab] = useState("sales");
  const { t } = useLang();

  const TABS = [
    { id: "sales", label: "Sales — Excel" },
    { id: "infra", label: "Infra finance — Excel" },
    { id: "tableau", label: "Maven Bank — Tableau" },
  ];

  return (
    <section id="playground" className="border-y border-line bg-paper py-24 md:py-32" data-testid="playground-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHead index="04" label={t("playgroundLabel")} titleLines={t("playgroundHead")} />

        <FadeUp delay={0.15}>
          <div className="mt-12 flex flex-wrap gap-2" data-testid="playground-tabs">
            {TABS.map((tb) => (
              <button
                key={tb.id}
                data-testid={`playground-tab-${tb.id}`}
                onClick={() => setTab(tb.id)}
                className={`border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                  tab === tb.id ? "border-ink bg-ink text-white" : "border-line bg-white text-muted hover:border-ink hover:text-ink"
                }`}
              >
                {tb.label}
              </button>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2} className="mt-10">
          {tab === "sales" && <SalesDash t={t} />}
          {tab === "infra" && <InfraDash t={t} />}
          {tab === "tableau" && <TableauDash t={t} />}
        </FadeUp>
      </div>
    </section>
  );
};

export default Playground;
