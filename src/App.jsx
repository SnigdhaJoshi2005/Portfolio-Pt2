import { Routes, Route } from "react-router-dom";
import "./App.css";

// layouts
import PublicLayout from "./pages/PublicRoutes/Layout";
import AdminLayout from "./pages/PrivateRoutes/Layout";

// public pagesb
import Home from "./pages/PublicRoutes/Home";
import Login from "./pages/PublicRoutes/LoginPage";

// admin pages
import AdminPanel from "./pages/PrivateRoutes/AdminPanel";
import Hero from "./pages/PrivateRoutes/Hero";
import AboutMe from "./pages/PrivateRoutes/AboutMe";
import Vision from "./pages/PrivateRoutes/Vision";
import Practice from "./pages/PrivateRoutes/Practice";
import Social from "./pages/PrivateRoutes/Social";
import Certificate from "./pages/PrivateRoutes/Certificate";
import Contact from "./pages/PrivateRoutes/Contact";
import Setting from "./pages/PrivateRoutes/Setting";

function App() {
  return (
    <Routes>

      {/* 🌍 PUBLIC ROUTES */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* 🔐 ADMIN ROUTES */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPanel />} />
        <Route path="hero" element={<Hero />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="vision" element={<Vision />} />
        <Route path="practice" element={<Practice />} />
        <Route path="social" element={<Social />} />
        <Route path="certificate" element={<Certificate />} />
        <Route path="contact" element={<Contact />} />
        <Route path="setting" element={<Setting />} />

      </Route>

    </Routes>
  );
}

export default App;
