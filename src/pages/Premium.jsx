import React from "react";
import { Link } from "react-router-dom";
import { FiCheck, FiLock } from "react-icons/fi";

const plans = [
  { name: "Starter", price: "$0", note: "For finding your rhythm", featured: false, features: ["1,500+ exercise guides", "Animated movement demos", "BMI and calorie tools", "Browse by muscle group"] },
  { name: "FitKit Pro", price: "$10", note: "For building a routine", featured: true, features: ["Everything in Starter", "Curated workout plans", "Progress tracking", "Personal training tools"] },
];

const Premium = () => <main className="mx-auto max-w-5xl py-12 sm:py-16">
  <div className="mx-auto mb-10 max-w-2xl text-center"><span className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-700">Simple plans</span><h1 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">Your training,<br className="sm:hidden" /> your way</h1><p className="mt-4 text-base leading-7 text-slate-500">Start exploring for free. Choose a plan that supports your next step.</p></div>
  <div className="grid gap-5 md:grid-cols-2">{plans.map((plan) => <article key={plan.name} className={`relative flex flex-col rounded-[2rem] border p-7 sm:p-9 ${plan.featured ? "border-ink bg-ink text-white shadow-2xl shadow-ink/15" : "border-slate-200 bg-white text-ink shadow-sm"}`}>
    {plan.featured && <span className="absolute right-6 top-6 rounded-full bg-lime px-3 py-1 text-[10px] font-black uppercase tracking-wide text-ink">Coming soon</span>}
    <h2 className="text-xl font-black">{plan.name}</h2><p className={`mt-2 text-sm ${plan.featured ? "text-white/55" : "text-slate-500"}`}>{plan.note}</p>
    <p className="mt-8 text-5xl font-black tracking-tight">{plan.price}<span className={`ml-1 text-sm font-semibold tracking-normal ${plan.featured ? "text-white/50" : "text-slate-400"}`}>/ month</span></p>
    <ul className="mt-8 flex-1 space-y-4">{plan.features.map((feature) => <li key={feature} className={`flex items-start gap-3 text-sm ${plan.featured ? "text-white/75" : "text-slate-600"}`}><span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${plan.featured ? "bg-lime text-ink" : "bg-lime/50 text-ink"}`}><FiCheck size={13} /></span>{feature}</li>)}</ul>
    {plan.featured ? <button type="button" disabled className="mt-9 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-extrabold text-white/45"><FiLock /> Coming soon</button> : <Link to="/" className="mt-9 rounded-xl bg-lime px-5 py-4 text-center text-sm font-extrabold text-ink transition hover:bg-white">Start exploring</Link>}
  </article>)}</div>
  <p className="mt-6 text-center text-xs leading-5 text-slate-400">FitKit Pro features and billing are not available yet.</p>
</main>;

export default Premium;
