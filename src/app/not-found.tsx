import Link from "next/link";
import Shell from "@/app/components/Shell";

export default function NotFound() {
  return (
    <Shell
      badge="Error 404 · ページが見つかりません"
      title="404"
      message="This bridge doesn't lead anywhere yet. The page you're looking for doesn't exist or has moved."
    >
      <Link
        href="/"
        className="inline-block rounded-full bg-vermilion px-6 py-3 font-semibold text-washi transition hover:bg-saffron hover:text-ink"
      >
        Back to the bridge →
      </Link>
    </Shell>
  );
}
