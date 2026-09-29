import React, { useEffect, useState } from "react";

const getSources = (exercise = {}) => {
  const candidates = [exercise.gifUrl, exercise.imageUrl, exercise.image];
  return candidates.filter((url) => typeof url === "string" && url.trim());
};

const ExerciseImage = ({ exercise, className = "", ...props }) => {
  const sources = getSources(exercise);
  const [sourceIndex, setSourceIndex] = useState(0);

  useEffect(() => setSourceIndex(0), [exercise?.id, exercise?.gifUrl, exercise?.imageUrl]);

  if (sourceIndex >= sources.length) {
    return (
      <div className={`exercise-image-fallback ${className}`} role="img" aria-label={`${exercise?.name || "Exercise"} illustration`}>
        <span className="fallback-orbit" />
        <span className="fallback-figure" aria-hidden="true">↗</span>
        <span className="fallback-label">{exercise?.bodyPart || "Move well"}</span>
      </div>
    );
  }

  return (
    <img
      {...props}
      className={className}
      src={sources[sourceIndex]}
      alt={exercise?.name || "Exercise demonstration"}
      loading="lazy"
      onError={() => setSourceIndex((index) => index + 1)}
    />
  );
};

export default ExerciseImage;
