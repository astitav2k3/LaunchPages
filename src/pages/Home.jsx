import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">Fast, modern websites for local businesses — launched in <span className="text-cyan-400">72 hours</span>.</h1>
            <p className="mt-4 text-slate-300">Promotional sites for gyms, cafes, salons and tutors. No subscriptions — one-time fee. I handle deployment and domain setup if you want.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/demos" className="btn btn-primary">View Demos</Link>
              <Link to="/contact" className="btn border border-slate-700 px-4 py-2 rounded-lg">Get a Quote</Link>
            </div>
            <ul className="mt-6 text-slate-400 space-y-2">
              <li>• 3 ready templates (Gym, Cafe, Salon)</li>
              <li>• Mobile-first, SEO basics, Google Maps embed</li>
              <li>• Optional domain & hosting setup</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">How it works</h3>
            <ol className="mt-4 list-decimal list-inside text-slate-300 space-y-2">
              <li>Pick a template</li>
              <li>Share images, logo & text via form</li>
              <li>I customize and deploy to your domain</li>
            </ol>
            <div className="mt-6 flex gap-2">
              <Link to="/contact" className="btn btn-primary">Start Now</Link>
              <a className="btn border border-slate-700 px-4 py-2 rounded-lg" href="mailto:youremail@example.com">Email</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-semibold">Templates</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <a href="https://cafe-rapture.vercel.app/" className="card block hover:scale-[1.01] transition-transform">
              <h3 className="font-semibold">GymPro</h3>
              <p className="text-slate-400 mt-2">Programs, trainers, pricing, reviews and location.</p>
            </a>
            <a href="https://www.google.com" className="card block hover:scale-[1.01] transition-transform">
              <h3 className="font-semibold">CafeRapture</h3>
              <p className="text-slate-400 mt-2">Menu highlights, gallery, hours & special offers.</p>
            </a>
            <a href="https://www.google.com" className="card block hover:scale-[1.01] transition-transform">
              <h3 className="font-semibold">Salon</h3>
              <p className="text-slate-400 mt-2">Services, booking CTAs, testimonials.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
