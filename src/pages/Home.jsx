import React, { useEffect, useState } from "react";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  useEffect(() => {
    if (window.location.hash === "#exercises") {
      window.setTimeout(() => document.getElementById("exercises")?.scrollIntoView(), 80);
    }
  }, []);

  return <>
    <HeroBanner />
    <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
  </>;
};

export default Home;
