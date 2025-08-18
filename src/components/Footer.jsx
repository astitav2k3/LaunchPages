export default function Footer(){
  return (
    <footer className="border-t border-slate-800">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} LaunchPages — Promo Websites for Small Businesses</div>
        <div className="text-sm text-slate-400">Built with ❤️ • Simple templates • Fast delivery</div>
      </div>
    </footer>
  )
}