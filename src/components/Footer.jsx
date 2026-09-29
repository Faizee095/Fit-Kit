import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => <footer className="-mx-4 mt-8 border-t border-slate-200 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
  <div className="mx-auto flex max-w-[1440px] flex-col gap-4 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
    <p>Move well. Feel good. Keep going.</p>
    <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation"><Link className="transition hover:text-ink" to="/bmi">BMI</Link><Link className="transition hover:text-ink" to="/calory">Calorie estimate</Link><a className="inline-flex items-center gap-1 transition hover:text-ink" href="https://ascendapi.com" target="_blank" rel="noreferrer">Exercise media by AscendAPI <FiArrowUpRight size={14} /></a></nav>
  </div>
</footer>;

export default Footer;
