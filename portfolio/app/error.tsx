"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
        <p className="text-white/60 mb-8">
          Došlo je do greške. Molimo pokušajte ponovo.
        </p>
        <button
          onClick={reset}
          className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:brightness-110 transition"
        >
          Pokušaj ponovo
        </button>
      </div>
    </div>
  );
}