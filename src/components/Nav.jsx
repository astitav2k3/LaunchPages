import { Link, NavLink } from 'react-router-dom'

export default function Nav(){
  return (
    <header className="bg-slate-900/60 backdrop-blur sticky top-0 z-40 border-b border-slate-800">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center text-slate-900 font-bold">LP</div>
          <div className="text-lg font-semibold">LaunchPages</div>
        </Link>
        <nav className="flex items-center gap-3">
          <NavLink to="/demos" className={({isActive})=> isActive ? 'px-3 py-2 rounded-md bg-slate-800' : 'px-3 py-2 rounded-md hover:bg-slate-800'}>Demos</NavLink>
          <NavLink to="/contact" className="btn btn-primary">Get a Site</NavLink>
        </nav>
      </div>
    </header>
  )
}