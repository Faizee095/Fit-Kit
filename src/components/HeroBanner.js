import React from "react";
import { FiArrowDownRight, FiArrowUpRight, FiPlay } from "react-icons/fi";
import HeroBannerImage from "../assets/images/Banner.jpeg";

const HeroBanner = () => (
  <section className="relative isolate overflow-hidden rounded-b-[2rem] bg-ink px-5 pb-12 pt-14 text-white sm:px-10 sm:pb-16 sm:pt-20 lg:min-h-[580px] lg:rounded-b-[2.75rem] lg:px-16 lg:pt-24">
    <div className="absolute -right-28 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-violet/20 blur-3xl" />
    <div className="absolute -bottom-44 left-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-lime/10 blur-3xl" />
    <div className="relative z-10 max-w-2xl lg:max-w-[55%]">
      <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-lime"><span className="h-2 w-2 rounded-full bg-lime" /> Train with intent</span>
      <h1 className="mt-7 max-w-[320px] text-[clamp(1.6rem,7vw,4.5rem)] font-black leading-[.98] tracking-[-.055em] sm:max-w-none sm:text-6xl lg:text-7xl">Build strength.<br /><span className="text-lime">Feel unstoppable.</span></h1>
      <p className="mt-6 max-w-[300px] text-base leading-7 text-white/65 sm:max-w-lg sm:text-lg">Find your next move, learn the form, and build a routine that fits your life.</p>
      <div className="mt-8 flex max-w-[340px] flex-col items-start gap-3 sm:max-w-none sm:flex-row sm:items-center">
        <a href="#exercises" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-white">Explore exercises <FiArrowUpRight size={18} /></a>
        <a href="/premium" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"><FiPlay size={16} /> Explore FitKit</a>
      </div>
      <div className="mt-12 grid max-w-[340px] grid-cols-3 gap-2 border-t border-white/10 pt-6 text-xs sm:flex sm:max-w-none sm:gap-8 sm:text-sm">
        <div><strong className="block text-2xl font-black text-white">1,500<span className="text-lime">+</span></strong><span className="mt-1 block text-white/50">exercise guides</span></div>
        <div><strong className="block text-2xl font-black text-white">GIF</strong><span className="mt-1 block text-white/50">movement demos</span></div>
        <div><strong className="block text-2xl font-black text-white">Your</strong><span className="mt-1 block text-white/50">pace, your plan</span></div>
      </div>
    </div>
    <div className="pointer-events-none mt-10 lg:absolute lg:bottom-0 lg:right-10 lg:mt-0 lg:w-[43%]">
      <div className="relative mx-auto max-w-md lg:max-w-none">
        <div className="absolute -right-2 top-10 h-[80%] w-[90%] rotate-3 rounded-[2rem] bg-lime" />
        <img src={HeroBannerImage} alt="Athlete training in the gym" className="relative h-[300px] w-full rounded-[2rem] object-cover object-center shadow-2xl sm:h-[400px] lg:h-[470px] lg:rounded-tl-[7rem] lg:rounded-br-[3rem]" />
        <div className="absolute -left-5 bottom-7 flex items-center gap-3 rounded-2xl bg-white p-3 text-ink shadow-xl sm:-left-10 sm:p-4"><span className="grid h-11 w-11 place-items-center rounded-xl bg-lime text-ink"><FiArrowDownRight size={22} /></span><span><strong className="block text-sm font-extrabold">Move better</strong><small className="text-slate-500">One rep at a time</small></span></div>
      </div>
    </div>
  </section>
);

export default HeroBanner;
