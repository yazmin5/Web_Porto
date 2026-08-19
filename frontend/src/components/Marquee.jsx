import Marquee from "react-fast-marquee";
import { marqueeItems } from "@/content";

const EditorialMarquee = ({ inverted = false }) => (
  <div
    className={`overflow-hidden border-y border-line py-10 md:py-14 ${inverted ? "bg-ink" : "bg-white"}`}
    data-testid={inverted ? "editorial-marquee-inverted" : "editorial-marquee"}
  >
    <Marquee speed={16} gradient={false} pauseOnHover>
      {marqueeItems.map((t, i) => (
        <span key={i} className="mx-10 flex items-center gap-10">
          <span className={`whitespace-nowrap font-display italic text-4xl md:text-6xl ${inverted ? "text-white" : "text-ink"}`}>
            {t}
          </span>
          <span className="inline-block h-2.5 w-2.5 bg-accent" aria-hidden="true" />
        </span>
      ))}
    </Marquee>
  </div>
);

export default EditorialMarquee;
