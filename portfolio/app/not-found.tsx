export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-white/60 mb-8">
          Stranica nije pronađena.
        </p>
        <a
          href="/"
          className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:brightness-110 transition inline-block"
        >
          Idi na početnu
        </a>
      </div>
    </div>
  );
}