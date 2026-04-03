"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center max-w-md px-4">
            <h1 className="text-6xl font-bold text-white mb-4">Greška</h1>
            <p className="text-white/60 mb-8">
              Došlo je do kritične greške aplikacije.
            </p>
            <button
              onClick={reset}
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:brightness-110 transition"
            >
              Resetuj aplikaciju
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}