import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Sayfa bulunamadı</p>
        <Link href="/tr" className="glass glass-hover px-6 py-3 rounded-lg inline-block">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}