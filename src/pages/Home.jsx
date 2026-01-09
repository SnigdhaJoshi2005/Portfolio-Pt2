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
            <h3>Rupendra Kayastha</h3>
            <p>Mystic Yogi · Healer · Trainer<br />Where Awareness Heals</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about">
        <img src="/mountain-about.jpg" alt="About" />

        <div className="about-content">
          <h2>ABOUT ME</h2>
          <p>
            Rupendra Kayastha is a Himalayan mystic, healer, and transformational trainer devoted to guiding individuals back to
            their natural state of awareness, balance, and inner flow. He stands at the intersection of ancient wisdom and modern
            consciousness science, helping seekers, healers, and professionals awaken their own intelligence of healing. He is the
            founder of Bodhi Transformation.<br />
            Rooted in the Himalayan yogic, tantra and Vajrayana Buddhist traditions, Rupendra’s journey goes beyond ritual and theory.
            He integrates forest therapy, energy healing, Tantra, Reiki, Akasha Healing, trauma release, NLP, and hypnotherapy techniques
            into a seamless approach where healing emerges naturally, effortlessly, and powerfully.
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
          <h3>A Life Guided by Presence</h3>
          <p>
            From the quiet forests of Nepal to international retreats and wellness expos, Rupendra has spent decades exploring the subtle
            currents of mind, body, and spirit. He discovered early that healing is not something to be “done” but something to be remembered,
            allowed, and embodied.<br />
            He believes that every human being carries within them a self-regulating intelligence, and the role of a healer or trainer is to
            create the conditions for that intelligence to awaken. Through his teachings, Rupendra transforms spaces into environments where
            awareness, stillness, and presence become the primary tools for change.
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

      <section className="serve">
        <div className="serve-left">
          <h2>WHO HE SERVES</h2>

          <ul>
            <li>Trauma survivors and emotional seekers</li>
            <li>Entrepreneurs, leaders, and professionals seeking clarity and flow</li>
            <li>Healers, coaches, and spiritual teachers deepening their practice</li>
            <li>Anyone ready to reconnect with their natural intelligence of being</li>
          </ul>

          <p className="serve-note">
            Whether in a quiet forest, a guided meditation, or a multi-day retreat,
            Rupendra’s work helps individuals step into the space where awareness
            meets transformation.
          </p>
        </div>

        <div className="serve-right">
          <h3>A GLOBAL VISION</h3>
          <p>
            From the Himalayas to Europe, South America, North America, and beyond,
            Rupendra Kayastha is building a global community of conscious leaders,
            healers, and seekers.
          </p>

          <blockquote>
            To awaken the world to the intelligence of healing that already lives
            within each of us.
          </blockquote>
        </div>
      </section>

      {/* ================= PRACTICES ================= */}
      <section className="practices" id="practices">
        <h2>Creator of Transformational Practices</h2>

        <div className="practice-grid">
          {/* PRACTICE 1 */}
          <div className="practice-card">
            <h3>Forest Flow Therapy™</h3>
            <p>
              Nature-based, immersive healing experiences that reconnect participants
              with the rhythms of the Earth. This practice supports the release of
              stress, trauma, and mental clutter through deep presence in natural
              environments.
            </p>
          </div>

          {/* PRACTICE 2 */}
          <div className="practice-card">
            <h3>Radiant Flow Method™</h3>
            <p>
              A transformational method for integrating awareness, abundance, and
              embodiment into daily life. Designed for spiritual seekers, healers,
              and high-performing professionals seeking alignment and clarity.
            </p>
          </div>
        </div>

        <p className="practice-footer">
          These programs blend ancient energy practices, breathwork, NLP, and
          meditation to create transformations that are lasting, profound, and
          aligned with your deepest self.
        </p>
      </section>

      {/* ================= SOCIAL MEDIA ================= */}
      <section className="social-media">
        <div className="social-left">
          <div className="social-phone">
            <img src="/instagram-profile.jpg" alt="Instagram Profile" />
            <a
              href="https://www.instagram.com/your-instagram"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>

          <div className="social-phone">
            <img src="/facebook-profile.jpg" alt="Facebook Profile" />
            <a
              href="https://www.facebook.com/your-facebook"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="social-right">
          <h2>YOUTUBE VIDEOS</h2>

          <div className="youtube-frame">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <a
            href="https://www.youtube.com/@your-channel"
            target="_blank"
            rel="noreferrer"
            className="youtube-link"
          >
            Visit Channel →
          </a>
        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="process">
        <h2>The Philosophy Behind His Work</h2>
        <p>
          “Healing is not something you do. It is something you allow—when the mind becomes quiet enough to listen.”<br />
          Every method, every retreat, and every session Rupendra offers are rooted in this principle. Healing is not forced, and transformation
          is not rushed. Through awareness, embodiment, and connection to nature, participants remember their own innate wisdom and reconnect
          with a life of clarity, balance, and purpose.
        </p>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact">
        <img src="/river-contact.jpg" alt="Contact" />

        <div className="contact-content">
          <h2>Connect & Transform</h2>
          <p>
            Step into the space where awareness heals, where stillness becomes your
            guide, and where your natural intelligence reconnects with the flow of
            life.
          </p>

          <div className="contact-signature">
            <span>Rupendra Kayastha</span>
            <small>Mystic Yogi · Healer · Trainer</small>
          </div>

          <p className="contact-info">
            Email: snigdha@email.com
            <br />
            Instagram • GitHub • LinkedIn
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
