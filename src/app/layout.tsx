import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Setuhashi | India–Japan Startup Bridge · Coming Soon",
  description:
    "Setuhashi connects Indian and Japanese startups. Launching soon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
