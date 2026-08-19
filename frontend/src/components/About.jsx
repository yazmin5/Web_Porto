import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Camera, Loader2 } from "lucide-react";
import { SectionHead, FadeUp } from "@/components/Reveal";
import { profile, manifesto } from "@/content";
import { useLang, pick } from "@/i18n";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const BUNDLED_PORTRAIT = "/yasmin-portrait.webp";

const About = () => {
  const { lang, t } = useLang();
  const [photo, setPhoto] = useState(`${API}/profile-photo`);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef(null);

  const onFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      await axios.post(`${API}/profile-photo`, fd);
      setPhoto(`${API}/profile-photo?t=${Date.now()}`);
      toast.success(t("photoUpdated"));
    } catch {
      toast.error(t("photoFailed"));
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  return (
    <section id="about" className="py-24 md:py-32" data-testid="about-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHead index="01" label={t("aboutLabel")} titleLines={t("aboutHead")} />

        <div className="mt-16 md:mt-20 grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-5">
            <FadeUp>
              <div className="relative">
                <div className="absolute inset-0 translate-x-4 translate-y-4 border border-line bg-fog" aria-hidden="true" />
                <img
                  src={photo}
                  onError={(e) => {
                    if (!e.currentTarget.src.endsWith("yasmin-portrait.webp")) e.currentTarget.src = BUNDLED_PORTRAIT;
                  }}
                  alt={`Portrait of ${profile.name}`}
                  data-testid="about-portrait"
                  className="relative h-[400px] w-full border border-line object-cover grayscale transition-[filter] duration-700 hover:grayscale-0 md:h-[540px]"
                />
                <button
                  onClick={() => fileRef.current?.click()}
                  data-testid="about-photo-upload"
                  aria-label={t("changePhoto")}
                  title={t("changePhoto")}
                  className="absolute bottom-3 right-3 z-10 flex h-11 w-11 items-center justify-center border border-ink bg-white text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
                >
                  {uploading ? <Loader2 size={16} className="animate-spin" /> : <Camera size={16} />}
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={onFile}
                  className="hidden"
                  data-testid="about-photo-input"
                />
              </div>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted" data-testid="about-caption">
                {profile.name} — {profile.location}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-accent" data-testid="about-availability">
                {pick(profile.availability, lang)}
              </p>
            </FadeUp>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <FadeUp delay={0.1}>
              <p className="text-lg leading-relaxed text-ink md:text-xl" data-testid="about-lede">
                {lang === "id" ? (
                  <>Saya {profile.name} — {t("aboutLede")}</>
                ) : (
                  <>I'm {profile.name} — {t("aboutLede")}</>
                )}
              </p>
            </FadeUp>
            <div className="mt-12 space-y-0">
              {manifesto.map((c, i) => (
                <FadeUp key={c.n} delay={0.1 + i * 0.1}>
                  <div className="grid grid-cols-12 gap-4 border-t border-line py-8" data-testid={`manifesto-chapter-${c.n}`}>
                    <span className="col-span-3 font-mono text-sm text-accent md:col-span-2">{c.n} /</span>
                    <div className="col-span-9 md:col-span-10">
                      <h3 className="font-display text-2xl md:text-3xl text-ink">{pick(c.title, lang)}</h3>
                      <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">{pick(c.text, lang)}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
