import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/400-italic.css"; //
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/AboutTheCollege";
import VisionMission from "./pages/VisionAndMission";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <VisionMission />
    </div>
  );
}
