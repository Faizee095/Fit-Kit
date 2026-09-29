import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BodyData from "./pages/BodyData";
import Calory from "./pages/Calory";
import Premium from "./pages/Premium";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-[1440px] px-4 sm:px-6 lg:px-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BodyData />} />
        <Route path="/calory" element={<Calory />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
