import Link from "next/link";
import Shell from "@/app/components/Shell";

export default function NotFound() {
  return (
    <Shell title="404" titleJa="ページが見つかりません">
      <p>
        Page not found. This bridge doesn’t lead anywhere: the page doesn’t
        exist or has moved.
      </p>
      <Link
        href="/"
        className="inline-block rounded-sm border border-white/40 px-5 py-2.5 transition-colors hover:bg-paper hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
      >
        Go to home page
      </Link>
    </Shell>
  );
}
