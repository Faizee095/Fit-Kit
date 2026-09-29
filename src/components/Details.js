import React from "react";
import { FiActivity, FiTarget, FiTool } from "react-icons/fi";
import ExerciseImage from "./ExerciseImage";

const Details = ({ exerciseDetail }) => {
  const details = [
    { icon: FiActivity, label: "Body part", value: exerciseDetail.bodyPart },
    { icon: FiTarget, label: "Target muscle", value: exerciseDetail.target },
    { icon: FiTool, label: "Equipment", value: exerciseDetail.equipment },
  ];

  return <section className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-14">
    <div className="rounded-[2rem] bg-[#e9ecdf] p-3 sm:p-5"><ExerciseImage exercise={exerciseDetail} className="aspect-square w-full rounded-[1.5rem] object-contain" /></div>
    <div>
      <span className="rounded-full bg-lime/50 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-ink">Exercise guide</span>
      <h1 className="mt-5 text-4xl font-black capitalize leading-tight tracking-tight text-ink sm:text-5xl">{exerciseDetail.name}</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">A focused movement for your <strong className="capitalize text-ink">{exerciseDetail.target}</strong>. Follow the steps below, keep every rep controlled, and use a range of motion that feels comfortable.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {details.map(({ icon: Icon, label, value }) => <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4"><Icon size={19} className="text-emerald-700" /><span className="mt-3 block text-[11px] font-bold uppercase tracking-wide text-slate-400">{label}</span><span className="mt-1 block truncate text-sm font-extrabold capitalize text-ink">{value || "Bodyweight"}</span></div>)}
      </div>
    </div>
    {exerciseDetail.instructions?.length > 0 && <div className="lg:col-span-2"><div className="rounded-[2rem] bg-ink p-6 text-white sm:p-9"><span className="text-xs font-extrabold uppercase tracking-[.2em] text-lime">Technique</span><h2 className="mt-2 text-2xl font-black sm:text-3xl">How to do it</h2><ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{exerciseDetail.instructions.map((instruction, index) => <li key={`${index}-${instruction}`} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lime text-sm font-black text-ink">{index + 1}</span><span className="text-sm leading-6 text-white/75">{instruction.replace(/^Step:\s*\d+\s*/i, "")}</span></li>)}</ol></div></div>}
  </section>;
};

export default Details;
