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
        className="inline-block rounded-md bg-shu px-6 py-3 font-medium text-ivory transition-colors hover:bg-saffron hover:text-ai focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-saffron"
      >
        Go to home page
      </Link>
    </Shell>
  );
}
