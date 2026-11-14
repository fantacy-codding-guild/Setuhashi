import Shell from "@/app/components/Shell";

export default function Home() {
  return (
    <Shell
      badge="India × Japan · Startup Bridge"
      title="Coming Soon"
      message="Setuhashi is building the bridge that helps Indian and Japanese startups find partners, talent and markets. Launching soon."
    >
      <p className="text-sm text-washi/60">
        日本とインドをつなぐ橋 — Connecting Japan and India.
      </p>
    </Shell>
  );
}
