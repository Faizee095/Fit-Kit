import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { fetchExercise, fetchExercises, fetchData, youtubeOptions } from "../utils/fetchData";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Loader from "../components/Loader";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const load = async () => {
      const detail = await fetchExercise(id);
      setExerciseDetail(detail);
      const [videos, targetMoves, equipmentMoves] = await Promise.allSettled([
        fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${encodeURIComponent(`${detail.name} exercise`)}`, youtubeOptions),
        fetchExercises({ target: detail.target }),
        fetchExercises({ equipment: detail.equipment }),
      ]);
      if (videos.status === "fulfilled") setExerciseVideos(videos.value.contents || []);
      if (targetMoves.status === "fulfilled") setTargetMuscleExercises(targetMoves.value);
      if (equipmentMoves.status === "fulfilled") setEquipmentExercises(equipmentMoves.value);
    };
    load().catch((error) => console.error("Unable to load exercise details", error));
  }, [id]);

  if (!exerciseDetail) return <Loader />;
  return <main className="pb-16 pt-8 sm:pt-12">
    <Link to="/" className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-ink"><FiArrowLeft /> Back to exercises</Link>
    <Details exerciseDetail={exerciseDetail} />
    <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
    <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
  </main>;
};

export default ExerciseDetail;
