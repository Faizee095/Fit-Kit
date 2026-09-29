import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { fetchBodyParts, fetchExercises } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBodyParts().then((parts) => setBodyParts(["all", ...parts])).catch((error) => console.error("Unable to load exercise categories", error));
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!search.trim()) return;
    setLoading(true);
    try {
      setExercises(await fetchExercises({ name: search.trim() }));
      document.getElementById("exercises")?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Unable to search exercises", error);
    } finally {
      setLoading(false);
    }
  };

  return <section className="py-16 sm:py-20" aria-labelledby="explore-title">
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-xs font-extrabold uppercase tracking-[.2em] text-emerald-700">The movement library</span>
      <h2 id="explore-title" className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">Find your next move</h2>
      <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">Search by exercise, muscle, or equipment. Pick a muscle group to get started.</p>
      <form onSubmit={handleSearch} className="mt-8 flex rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-ink/5 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10">
        <FiSearch aria-hidden="true" className="my-auto ml-3 shrink-0 text-slate-400" size={20} />
        <input className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-medium text-ink outline-none placeholder:text-slate-400" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try “dumbbell press” or “quads”" aria-label="Search exercises" />
        <button className="rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 disabled:opacity-50" type="submit" disabled={loading}>{loading ? "Searching…" : "Search"}</button>
      </form>
    </div>
    <div className="mt-10">
      <div className="mb-4 flex items-center justify-between"><h3 className="text-sm font-extrabold text-ink">Browse by body part</h3><span className="text-xs text-slate-400">Swipe to explore</span></div>
      <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
    </div>
  </section>;
};

export default SearchExercises;
