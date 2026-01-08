import "../App.css";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <ul>
          <li>About</li>
          <li>Values</li>
          <li>Projects</li>
          <li>Process</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-images">
          <img src="/mountain1.jpg" alt="Mountain" />
          <img src="/river1.jpg" alt="River" />
          <img src="/mountain2.jpg" alt="Mountain" />
          <img src="/river2.jpg" alt="River" />
        </div>

        <div className="hero-text">
          <h1>PORTFOLIO</h1>
          <div>
            <h3>Snigdha Joshi</h3>
            <p>Frontend Developer • Nature Inspired UI</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about">
        <img src="/mountain-about.jpg" alt="About" />

        <div className="about-content">
          <h2>ABOUT ME</h2>
          <p>
            I create calm and elegant web experiences inspired by nature.
            My focus is on clean layouts, smooth interactions, and
            meaningful digital products.
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="about-socials">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.instagram.com/your-instagram"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/your-facebook"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
        </div>
      </section>

      {/* ================= VISION / MISSION ================= */}
      <section className="vision">
        <div>
          <h3>VISION</h3>
          <p>
            To design peaceful and intuitive digital experiences that
            feel natural and timeless.
          </p>
        </div>
        <div>
          <h3>MISSION</h3>
          <p>
            Transform ideas into thoughtful, modern, and user-friendly
            web interfaces.
          </p>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="projects">
        <h2>PROJECTS</h2>
        <div className="project-grid">
          <img src="/river-ui.jpg" alt="Project 1" />
          <img src="/mountain-app.jpg" alt="Project 2" />
          <img src="/nature-site.jpg" alt="Project 3" />
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="process">
        <h2>THE PROCESS</h2>
        <ol>
          <li>Research & Inspiration</li>
          <li>Wireframing</li>
          <li>Design</li>
          <li>Development</li>
        </ol>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact">
        <img src="/river-contact.jpg" alt="Contact" />
        <div>
          <h2>GET IN TOUCH</h2>
          <p>Email: snigdha@email.com</p>
          <p>Instagram • GitHub • LinkedIn</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
