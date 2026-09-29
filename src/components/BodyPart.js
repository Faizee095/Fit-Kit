import React from "react";
import { FiActivity } from "react-icons/fi";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const active = bodyPart === item;
  return <button type="button" aria-pressed={active} onClick={() => { setBodyPart(item); document.getElementById("exercises")?.scrollIntoView({ behavior: "smooth" }); }} className={`flex min-w-[132px] flex-col items-start gap-5 rounded-2xl border p-4 text-left transition sm:min-w-[158px] sm:p-5 ${active ? "border-ink bg-ink text-lime shadow-lg shadow-ink/15" : "border-slate-200 bg-white text-ink hover:-translate-y-1 hover:border-lime hover:shadow-md"}`}>
    <span className={`grid h-11 w-11 place-items-center rounded-xl ${active ? "bg-lime text-ink" : "bg-lime/20 text-ink"}`}><FiActivity size={20} /></span>
    <span className="text-sm font-extrabold capitalize sm:text-base">{item === "all" ? "All moves" : item}</span>
  </button>;
};

export default BodyPart;
