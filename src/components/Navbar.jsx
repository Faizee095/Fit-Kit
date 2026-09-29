import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiActivity, FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Exercises", to: "/#exercises" },
  { label: "BMI", to: "/bmi" },
  { label: "Calories", to: "/calory" },
  { label: "Plans", to: "/premium" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-ink hover:text-lime ${isActive ? "text-lime" : "text-white/75"}`;

  return (
    <header className="sticky top-0 z-50 -mx-4 border-b border-white/10 bg-ink/95 px-4 text-white backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lime text-ink"><FiActivity size={23} /></span>
          <span className="text-lg font-black tracking-tight">fit<span className="text-lime">kit</span></span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map((link) => link.to.includes("#") ? (
            <a key={link.label} href={link.to} className="rounded-full px-3 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/10 hover:text-lime">{link.label}</a>
          ) : (
            <NavLink key={link.label} to={link.to} className={linkClass}>{link.label}</NavLink>
          ))}
          <Link to="/premium" className="ml-3 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-white">Get started</Link>
        </nav>

        <button type="button" className="rounded-xl p-2 text-white hover:bg-white/10 md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
        </button>
      </div>

      {menuOpen && <nav className="flex flex-col gap-1 border-t border-white/10 pb-4 pt-3 md:hidden" aria-label="Mobile navigation">
        {links.map((link) => <a key={link.label} href={link.to} className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-lime" onClick={() => setMenuOpen(false)}>{link.label}</a>)}
        <Link to="/premium" className="mt-2 rounded-xl bg-lime px-4 py-3 text-center text-sm font-bold text-ink" onClick={() => setMenuOpen(false)}>Get started</Link>
      </nav>}
    </header>
  );
};

export default Navbar;
