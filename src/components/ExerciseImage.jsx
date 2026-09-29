import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const getSources = (exercise = {}) => [exercise.gifUrl, exercise.imageUrl, exercise.image].filter((url) => typeof url === "string" && url.trim());

const ExerciseImage = ({ exercise, className = "", ...props }) => {
  const sources = getSources(exercise);
  const [sourceIndex, setSourceIndex] = useState(0);

  useEffect(() => setSourceIndex(0), [exercise?.id, exercise?.gifUrl, exercise?.imageUrl]);

  if (sourceIndex >= sources.length) return <div className={`relative grid min-h-48 place-items-center overflow-hidden bg-[#eef0e9] text-ink ${className}`} role="img" aria-label={`${exercise?.name || "Exercise"} illustration`}>
    <img src={require("../assets/images/exercise-placeholder.svg")} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-70" />
    <FiArrowUpRight aria-hidden="true" className="relative" size={64} />
    <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold capitalize">{exercise?.bodyPart || "Move well"}</span>
  </div>;

  return <img {...props} className={className} src={sources[sourceIndex]} alt={exercise?.name || "Exercise demonstration"} loading="lazy" onError={() => setSourceIndex((index) => index + 1)} />;
};

export default ExerciseImage;
