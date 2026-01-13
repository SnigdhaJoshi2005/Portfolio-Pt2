import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import AboutMe from "./pages/AboutMe";
import Practice from "./pages/Practice";
import Vision from "./pages/Vision";
import Social from "./pages/Social";
import Setting from "./pages/Setting";
import Hero from "./pages/Hero";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/aboutme" element={<AboutMe />} />
      <Route path="/admin/practice" element={<Practice />} />
      <Route path="/admin/vision" element={<Vision />} />
      <Route path="/admin/social" element={<Social />} />
      <Route path="/admin/setting" element={<Setting />} />
      <Route path="/admin/hero" element={<Hero />} />
    </Routes>
  );
}

export default App;
