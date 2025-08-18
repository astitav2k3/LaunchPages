import { Link } from 'react-router-dom'

export default function Demos() {
  return (
    <div className="py-12">
      <div className="container">
        <h2 className="text-2xl font-semibold">Demo Gallery</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          
          <div className="card">
            <h3 className="font-semibold">GymPro</h3>
            <p className="text-slate-400 mt-2">Fitness-focused landing with pricing & trainers.</p>
            <div className="mt-4 flex gap-2">
              <a
                className="btn btn-primary"
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
              <Link
                className="btn border border-slate-700 px-4 py-2 rounded-lg"
                to="/contact?template=gym"
              >
                Use
              </Link>
            </div>
          </div>
          
          <div className="card">
            <h3 className="font-semibold">CafeRapture</h3>
            <p className="text-slate-400 mt-2">Menu first layout with gallery & hours.</p>
            <div className="mt-4 flex gap-2">
              <a
                className="btn btn-primary"
                href="https://cafe-rapture.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
              <Link
                className="btn border border-slate-700 px-4 py-2 rounded-lg"
                to="/contact?template=cafe"
              >
                Use
              </Link>
            </div>
          </div>
          
          <div className="card">
            <h3 className="font-semibold">Salon</h3>
            <p className="text-slate-400 mt-2">Services, testimonials & booking CTA.</p>
            <div className="mt-4 flex gap-2">
              <a
                className="btn btn-primary"
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
              <Link
                className="btn border border-slate-700 px-4 py-2 rounded-lg"
                to="/contact?template=salon"
              >
                Use
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
