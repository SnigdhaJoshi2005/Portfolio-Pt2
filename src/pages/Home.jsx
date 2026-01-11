import "../App.css";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Visionsection from "../components/Visionsection";
import ServeSection from "../components/Servesection";
import PracticeSection from "../components/PracticeSection";
import SocialMediaSection from "../components/SocialMediaSection";
import ProcessSection from "../components/ProcessSection";
import LineageCertificateSection from "../components/LineageCertificateSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Visionsection />
      <ServeSection />
      <PracticeSection />
      <SocialMediaSection />
      <ProcessSection />
      <LineageCertificateSection />
      <ContactSection />
    </div>
  );
};

export default Home;
