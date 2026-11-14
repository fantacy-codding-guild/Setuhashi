import Image from "next/image";
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
  "text-paper underline decoration-white/30 underline-offset-4 hover:decoration-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper";

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
    <main className="grid min-h-dvh place-items-center px-6 py-12">
      <div className="flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
        <Image
          src="/setuhashi-logo.svg"
          alt="SetuHashi"
          width={440}
          height={307}
          priority
          className="h-auto w-full max-w-sm md:max-w-md md:flex-1"
        />

        <div
          aria-hidden
          className="h-px w-full max-w-sm bg-white/25 md:h-72 md:w-px md:max-w-none"
        />

        <div className="w-full max-w-sm text-left md:flex-1">
          <h1 className="font-display text-5xl leading-tight sm:text-6xl">
            {title}
          </h1>
          <p lang="ja" className="mt-2 text-lg text-mute">
            {titleJa}
          </p>

          <div className="mt-6 space-y-4 leading-relaxed text-paper/85">
            {children}
          </div>

          <address className="mt-10 text-sm leading-relaxed text-mute not-italic">
            <p className="text-paper">{CONTACT.name}</p>
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
    </main>
  );
}
