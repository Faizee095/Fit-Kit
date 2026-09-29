import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import ExerciseImage from "./ExerciseImage";

const ExerciseCard = ({ exercise }) => (
  <Link to={`/exercise/${exercise.id}`} className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lime hover:shadow-xl hover:shadow-ink/10">
    <div className="relative overflow-hidden bg-[#eef0e9] p-3">
      <ExerciseImage exercise={exercise} className="h-40 w-full rounded-2xl object-contain transition duration-500 group-hover:scale-[1.03] sm:h-44" />
      <span className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-sm transition group-hover:bg-lime"><FiArrowUpRight size={20} /></span>
    </div>
    <div className="p-5">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-lime/40 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-ink">{exercise.bodyPart}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold capitalize text-slate-600">{exercise.target}</span>
      </div>
      <h3 className="mt-4 line-clamp-2 min-h-12 text-lg font-extrabold capitalize leading-snug text-ink">{exercise.name}</h3>
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500"><span className="capitalize">{exercise.equipment || "Bodyweight"}</span><span className="text-ink group-hover:text-emerald-700">View guide</span></div>
    </div>
  </Link>
);

export default ExerciseCard;
