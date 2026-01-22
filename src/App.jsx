import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Serve from "./pages/PrivateRoutes/Serve";
import Practice from "./pages/PrivateRoutes/Practice";
import PracticeSection from "./components/PracticeSection";
import PracticeDetail from "./components/PracticeDetail";
import Social from "./pages/PrivateRoutes/Social";
import Process from "./pages/PrivateRoutes/Process";
import Certificate from "./pages/PrivateRoutes/Certificate";
import Contact from "./pages/PrivateRoutes/Contact";


function App() {
  return (
    // <Router>
      <Routes>
        {/* 🌍 PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/practices" element={<PracticeSection />} />
          <Route path="/practice/:id" element={<PracticeDetail />} />
        </Route>

        {/* 🔐 ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} />
          <Route path="hero" element={<Hero />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="serve" element={<Serve />} />
          <Route path="vision" element={<Vision />} />
          <Route path="practice" element={<Practice />} />
          <Route path="social" element={<Social />} />
          <Route path="process" element={<Process />} />
          <Route path="certificate" element={<Certificate />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    // </Router>
  );
}

export default App;
