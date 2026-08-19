import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { SectionHead, FadeUp } from "@/components/Reveal";
import { profile } from "@/content";
import { useLang } from "@/i18n";

const field =
  "w-full rounded-none border-b-2 border-line bg-transparent py-4 text-base text-ink outline-none transition-colors duration-300 placeholder:text-muted/50 focus:border-ink";

const Contact = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, form);
      toast.success(t("toastOk"));
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      toast.error(t("toastErr"));
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="border-t border-line bg-paper py-24 md:py-32" data-testid="contact-section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-5">
            <SectionHead index="07" label={t("contactLabel")} titleLines={t("contactHead")} />
            <FadeUp delay={0.2}>
              <a
                href={`mailto:${profile.email}`}
                data-testid="contact-email-link"
                className="mt-12 inline-block border-b-2 border-ink pb-1 font-display text-2xl text-ink transition-colors duration-300 hover:border-accent hover:text-accent md:text-3xl"
              >
                {profile.email}
              </a>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">{profile.location}</p>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} data-testid="contact-phone-link" className="mt-2 block w-fit font-mono text-[11px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-accent">
                {profile.phone}
              </a>
              <div className="mt-10 space-y-3">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`contact-social-${s.label.toLowerCase().replace(/\s/g, "-")}`}
                    className="group flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-ink transition-colors hover:text-accent"
                  >
                    {s.label}
                    <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </FadeUp>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <FadeUp delay={0.15}>
              <form onSubmit={submit} className="space-y-8" data-testid="contact-form">
                <div>
                  <label htmlFor="contact-name" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{t("formName")}</label>
                  <input id="contact-name" data-testid="contact-name-input" required value={form.name} onChange={set("name")} placeholder={t("phName")} className={field} />
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Email *</label>
                    <input id="contact-email" type="email" data-testid="contact-email-input" required value={form.email} onChange={set("email")} placeholder="nama@perusahaan.com" className={field} />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{t("formCompany")}</label>
                    <input id="contact-company" data-testid="contact-company-input" value={form.company} onChange={set("company")} placeholder={t("phCompany")} className={field} />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{t("formMessage")}</label>
                  <textarea id="contact-message" rows={5} data-testid="contact-message-input" required value={form.message} onChange={set("message")} placeholder={t("phMessage")} className={`${field} resize-none`} />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  data-testid="contact-submit-button"
                  className="group inline-flex items-center gap-3 bg-ink px-10 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? (
                    <>{t("sendingBtn")} <Loader2 size={14} className="animate-spin" /></>
                  ) : (
                    <>{t("sendBtn")} <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>
                  )}
                </button>
              </form>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
