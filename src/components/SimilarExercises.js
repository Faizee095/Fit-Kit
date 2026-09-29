import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SimilarExercises = ({ targetMuscleExercises = [], equipmentExercises = [] }) => (
  <section className="mt-16 space-y-12 sm:mt-20" aria-label="Related exercises">
    {[{ title: "Train the same muscle", data: targetMuscleExercises }, { title: "Use the same equipment", data: equipmentExercises }].map((group) => group.data.length > 0 && <div key={group.title}><h2 className="mb-5 text-2xl font-black text-ink sm:text-3xl">{group.title}</h2><HorizontalScrollbar data={group.data} /></div>)}
  </section>
);

export default SimilarExercises;
