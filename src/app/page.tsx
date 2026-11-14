import Shell from "@/app/components/Shell";

export default function Home() {
  return (
    <Shell title="Coming soon" titleJa="近日公開">
      <p>
        SetuHashi is building a bridge between Indian and Japanese startups.
        Write to us to hear first when we launch.
      </p>
      <p className="text-sm text-mute">
        Setu (सेतु) in Sanskrit and hashi (橋) in Japanese both mean “bridge”.
      </p>
    </Shell>
  );
}
