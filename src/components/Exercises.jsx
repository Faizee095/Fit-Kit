import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { fetchExercises } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const perPage = 6;

  useEffect(() => {
    setLoading(true);
    fetchExercises({ bodyPart }).then(setExercises).catch((error) => console.error("Unable to load exercises", error)).finally(() => setLoading(false));
    setCurrentPage(1);
  }, [bodyPart, setExercises]);

  useEffect(() => setCurrentPage(1), [exercises]);

  const pageCount = Math.ceil(exercises.length / perPage);
  const currentExercises = exercises.slice((currentPage - 1) * perPage, currentPage * perPage);

  return <section id="exercises" className="scroll-mt-24 pb-20" aria-labelledby="results-title">
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-5">
      <div><span className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-700">Train your way</span><h2 id="results-title" className="mt-2 text-3xl font-black tracking-tight text-ink">{bodyPart === "all" ? "Explore exercises" : `${bodyPart} exercises`}</h2></div>
      {!loading && <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-500 shadow-sm">{exercises.length} moves loaded</span>}
    </div>
    {loading ? <Loader /> : currentExercises.length ? <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {currentExercises.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise} />)}
      </div>
      {pageCount > 1 && <div className="mt-9 flex items-center justify-center gap-3">
        <button type="button" aria-label="Previous page" disabled={currentPage === 1} onClick={() => setCurrentPage((page) => page - 1)} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-ink transition hover:border-lime disabled:cursor-not-allowed disabled:opacity-40"><FiArrowLeft /></button>
        <span className="text-sm font-bold text-slate-500">Page <span className="text-ink">{currentPage}</span> of {pageCount}</span>
        <button type="button" aria-label="Next page" disabled={currentPage === pageCount} onClick={() => setCurrentPage((page) => page + 1)} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-ink transition hover:border-lime disabled:cursor-not-allowed disabled:opacity-40"><FiArrowRight /></button>
      </div>}
    </> : <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center"><h3 className="text-lg font-extrabold text-ink">No exercises found</h3><p className="mt-2 text-sm text-slate-500">Try another body part or search term.</p></div>}
  </section>;
};

export default Exercises;
