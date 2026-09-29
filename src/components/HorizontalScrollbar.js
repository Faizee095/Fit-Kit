import React from "react";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollbar = ({ data = [], bodyParts, setBodyPart, bodyPart }) => (
  <div className={bodyParts ? "flex gap-3 overflow-x-auto pb-3" : "flex gap-4 overflow-x-auto pb-4"}>
    {data.map((item) => bodyParts ? (
      <BodyPart key={item} item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
    ) : <div key={item.id} className="w-[280px] shrink-0 sm:w-[310px]"><ExerciseCard exercise={item} /></div>)}
  </div>
);

export default HorizontalScrollbar;
