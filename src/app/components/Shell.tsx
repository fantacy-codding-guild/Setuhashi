import type { ReactNode } from "react";

// Details from the printed business card. Edit or remove before publishing.
const CONTACT = {
  name: "Isha Lagu",
  role: "Analyst – Business & Legal",
  email: "isha@setuhashi.com",
  phone: "+91-99204-87186",
  whatsapp: "https://wa.me/919920487186",
};

const link =
  "text-ivory underline decoration-saffron/50 underline-offset-4 transition-colors hover:decoration-saffron focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-saffron";

export default function Shell({
  title,
  titleJa,
  children,
}: {
  title: string;
  titleJa: string;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-between px-6 pt-12 pb-6">
      <div className="flex w-full flex-1 items-center justify-center">
        <div className="flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
          <div
            role="img"
            aria-label="SetuHashi"
            className="logo-mark aspect-[440/307] w-full max-w-sm md:max-w-md md:flex-1"
          />

          <div
            aria-hidden
            className="h-0.5 w-full max-w-sm bg-linear-to-r from-saffron to-shu md:h-72 md:w-0.5 md:max-w-none md:bg-linear-to-b"
          />

          <div className="w-full max-w-sm text-left md:flex-1">
            <h1 className="font-display text-5xl leading-tight font-medium sm:text-6xl">
              {title}
            </h1>
            <p lang="ja" className="mt-2 text-lg text-saffron">
              {titleJa}
            </p>

            <div className="mt-6 space-y-4 leading-relaxed text-ivory/85">
              {children}
            </div>

            <address className="mt-10 border-t border-white/15 pt-6 text-sm leading-relaxed text-mist not-italic">
              <p className="text-ivory">{CONTACT.name}</p>
              <p>{CONTACT.role}</p>
              <p className="mt-3">
                <a href={`mailto:${CONTACT.email}`} className={link}>
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link}
                >
                  {CONTACT.phone}
                </a>{" "}
                (WhatsApp)
              </p>
            </address>
          </div>
        </div>
      </div>

      <footer className="pt-10 text-xs text-mist/70">© 2026 SetuHashi</footer>
    </main>
  );
}
