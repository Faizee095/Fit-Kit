import React, { useState } from "react";
import { FiActivity, FiInfo } from "react-icons/fi";

const BodyData = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = (event) => {
    event.preventDefault();
    const weightKg = Number(weight);
    const heightCm = Number(height);
    if (!weightKg || !heightCm || weightKg <= 0 || heightCm <= 0) {
      setError("Enter a valid weight and height to calculate your BMI.");
      setBmi(null);
      return;
    }
    const value = weightKg / ((heightCm / 100) ** 2);
    const category = value < 18.5 ? "Below healthy range" : value < 25 ? "Healthy range" : value < 30 ? "Above healthy range" : "High range";
    setBmi({ value: value.toFixed(1), category });
    setError("");
  };

  return <main className="mx-auto w-full min-w-0 max-w-5xl py-12 sm:py-16">
    <div className="mb-8 max-w-2xl"><span className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-700">Know your baseline</span><h1 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">Body mass index</h1><p className="mt-4 text-base leading-7 text-slate-500">Get a quick estimate from your height and weight. BMI is a general screening measure, not a diagnosis.</p></div>
    <div className="grid w-full min-w-0 gap-6 lg:grid-cols-[1.1fr_.9fr]">
      <form onSubmit={handleCalculate} className="w-full min-w-0 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-7 flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime/40"><FiActivity size={22} /></span><div><h2 className="font-extrabold text-ink">Your measurements</h2><p className="mt-1 text-sm text-slate-500">Use kilograms and centimeters.</p></div></div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="min-w-0 text-sm font-bold text-slate-700">Weight <span className="font-medium text-slate-400">(kg)</span><input type="number" min="1" step="0.1" value={weight} onChange={(event) => setWeight(event.target.value)} placeholder="e.g. 68" className="mt-2 w-full min-w-0 rounded-xl border border-slate-200 px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-slate-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10" /></label>
          <label className="min-w-0 text-sm font-bold text-slate-700">Height <span className="font-medium text-slate-400">(cm)</span><input type="number" min="1" step="0.1" value={height} onChange={(event) => setHeight(event.target.value)} placeholder="e.g. 172" className="mt-2 w-full min-w-0 rounded-xl border border-slate-200 px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-slate-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10" /></label>
        </div>
        {error && <p role="alert" className="mt-4 text-sm font-semibold text-rose-700">{error}</p>}
        <button type="submit" className="mt-7 w-full rounded-xl bg-ink px-5 py-4 text-sm font-extrabold text-white transition hover:bg-emerald-800">Calculate my BMI</button>
      </form>
      <section aria-live="polite" className={`flex min-h-72 w-full min-w-0 flex-col justify-center rounded-[2rem] p-7 sm:p-9 ${bmi ? "bg-ink text-white" : "bg-lime/30 text-ink"}`}>
        <FiInfo size={22} className={bmi ? "text-lime" : "text-emerald-800"} />
        {bmi ? <><p className="mt-5 text-xs font-extrabold uppercase tracking-[.18em] text-lime">Your estimate</p><p className="mt-2 text-6xl font-black tracking-tight">{bmi.value}</p><p className="mt-2 text-lg font-bold">{bmi.category}</p><p className="mt-5 text-sm leading-6 text-white/60">BMI is one broad indicator. It does not measure body composition or replace advice from a health professional.</p></> : <><h2 className="mt-5 text-2xl font-black">Your result appears here</h2><p className="mt-3 text-sm leading-6 text-ink/70">Add your measurements to get an estimate and a general range.</p></>}
      </section>
    </div>
  </main>;
};

export default BodyData;
