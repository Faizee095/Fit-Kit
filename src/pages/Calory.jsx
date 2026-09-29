import React, { useState } from "react";
import { FiCoffee, FiInfo } from "react-icons/fi";

const activityOptions = [
  { value: 1.2, label: "Mostly sitting", note: "Little planned exercise" },
  { value: 1.375, label: "Light activity", note: "Exercise 1–3 days a week" },
  { value: 1.55, label: "Moderate activity", note: "Exercise 3–5 days a week" },
  { value: 1.725, label: "High activity", note: "Exercise 6–7 days a week" },
  { value: 1.9, label: "Very high activity", note: "Hard training or active job" },
];

const Calory = () => {
  const [form, setForm] = useState({ age: "", weight: "", height: "", gender: "female", activity: "1.55" });
  const [calories, setCalories] = useState(null);
  const [error, setError] = useState("");
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleCalculate = (event) => {
    event.preventDefault();
    const { age, weight, height, gender, activity } = form;
    if (!age || !weight || !height || Number(age) < 1 || Number(weight) <= 0 || Number(height) <= 0) {
      setError("Enter a valid age, weight, and height to estimate your daily needs.");
      setCalories(null);
      return;
    }
    const base = 10 * Number(weight) + 6.25 * Number(height) - 5 * Number(age);
    const bmr = base + (gender === "male" ? 5 : gender === "female" ? -161 : -78);
    setCalories(Math.round(bmr * Number(activity)));
    setError("");
  };

  return <main className="mx-auto w-full min-w-0 max-w-5xl py-12 sm:py-16">
    <div className="mb-8 max-w-2xl"><span className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-700">Fuel your training</span><h1 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">Daily calorie estimate</h1><p className="mt-4 text-base leading-7 text-slate-500">Estimate your maintenance calories from your measurements and activity. Real needs vary from person to person.</p></div>
    <div className="grid w-full min-w-0 gap-6 lg:grid-cols-[1.1fr_.9fr]">
      <form onSubmit={handleCalculate} className="w-full min-w-0 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-7 flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime/40"><FiCoffee size={22} /></span><div><h2 className="font-extrabold text-ink">Your details</h2><p className="mt-1 text-sm text-slate-500">For an approximate daily estimate.</p></div></div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-bold text-slate-700">Age<input name="age" type="number" min="1" max="120" value={form.age} onChange={update} placeholder="e.g. 28" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 font-medium outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10" /></label>
          <label className="text-sm font-bold text-slate-700">Weight <span className="font-medium text-slate-400">(kg)</span><input name="weight" type="number" min="1" step="0.1" value={form.weight} onChange={update} placeholder="e.g. 68" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 font-medium outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10" /></label>
          <label className="text-sm font-bold text-slate-700">Height <span className="font-medium text-slate-400">(cm)</span><input name="height" type="number" min="1" step="0.1" value={form.height} onChange={update} placeholder="e.g. 172" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 font-medium outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10" /></label>
          <label className="text-sm font-bold text-slate-700">Formula setting<select name="gender" value={form.gender} onChange={update} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 font-medium outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"><option value="female">Female</option><option value="male">Male</option><option value="other">Use midpoint estimate</option></select></label>
          <label className="text-sm font-bold text-slate-700 sm:col-span-2">Activity level<select name="activity" value={form.activity} onChange={update} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 font-medium outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10">{activityOptions.map((option) => <option key={option.value} value={option.value}>{option.label} — {option.note}</option>)}</select></label>
        </div>
        {error && <p role="alert" className="mt-4 text-sm font-semibold text-rose-700">{error}</p>}
        <button type="submit" className="mt-7 w-full rounded-xl bg-ink px-5 py-4 text-sm font-extrabold text-white transition hover:bg-emerald-800">Estimate daily calories</button>
      </form>
      <section aria-live="polite" className={`flex min-h-72 w-full min-w-0 flex-col justify-center rounded-[2rem] p-7 sm:p-9 ${calories ? "bg-ink text-white" : "bg-lime/30 text-ink"}`}>
        <FiInfo size={22} className={calories ? "text-lime" : "text-emerald-800"} />
        {calories ? <><p className="mt-5 text-xs font-extrabold uppercase tracking-[.18em] text-lime">Estimated maintenance</p><p className="mt-2 text-5xl font-black tracking-tight">{calories.toLocaleString()}<span className="ml-2 text-base font-bold text-white/55">kcal / day</span></p><p className="mt-5 text-sm leading-6 text-white/60">This is a starting estimate, not a prescription. Adjust based on your energy, goals, and progress over time.</p></> : <><h2 className="mt-5 text-2xl font-black">Your estimate appears here</h2><p className="mt-3 text-sm leading-6 text-ink/70">Enter your details to see an approximate daily maintenance level.</p></>}
      </section>
    </div>
  </main>;
};

export default Calory;
