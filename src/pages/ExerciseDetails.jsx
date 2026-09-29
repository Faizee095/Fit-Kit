import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchExercise, fetchExercises, fetchData, youtubeOptions } from "../utils/fetchData";
import Details from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchExercise(id);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${encodeURIComponent(`${exerciseDetailData.name} exercise`)}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents || []);

      const targetMuscleExercisesData = await fetchExercises({ target: exerciseDetailData.target });
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchExercises({ equipment: exerciseDetailData.equipment });
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData().catch((error) => console.error("Unable to load exercise details", error));
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
