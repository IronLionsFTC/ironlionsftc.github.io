import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <div className="text-5xl font-display">404</div>
      <p className="mt-2 text-zinc-400">That page doesn’t exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5"
      >
        Back home
      </Link>
    </div>
  );
}
