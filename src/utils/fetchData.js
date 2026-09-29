const exerciseApiBase = "https://oss.exercisedb.dev/api/v1";

const normalizeExercise = (exercise) => ({
  ...exercise,
  id: exercise.exerciseId || exercise.id,
  bodyPart: exercise.bodyParts?.[0] || exercise.bodyPart || "",
  target: exercise.targetMuscles?.[0] || exercise.target || "",
  equipment: exercise.equipments?.[0] || exercise.equipment || "",
});

const fetchExerciseApi = async (path) => {
  const response = await fetch(`${exerciseApiBase}${path}`);
  if (!response.ok) throw new Error(`Exercise API returned ${response.status}`);
  const result = await response.json();
  if (result.success === false) throw new Error("Exercise API request failed");
  return result.data;
};

export const fetchExercises = async ({ bodyPart, target, equipment, name } = {}) => {
  const params = new URLSearchParams({ limit: "25" });
  if (bodyPart && bodyPart !== "all") params.set("bodyParts", bodyPart);
  if (target) params.set("targetMuscles", target);
  if (equipment) params.set("equipments", equipment);
  if (name) params.set("name", name);
  const data = await fetchExerciseApi(`/exercises?${params.toString()}`);
  return data.map(normalizeExercise);
};

export const fetchExercise = async (id) => {
  const data = await fetchExerciseApi(`/exercises/${encodeURIComponent(id)}`);
  return normalizeExercise(data);
};

export const fetchBodyParts = async () => {
  const data = await fetchExerciseApi("/bodyparts");
  return data.map((part) => part.name);
};

export const exerciseOptions = { method: "GET" };

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

