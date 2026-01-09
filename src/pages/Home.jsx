import "../App.css";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <ul>
          <li>About</li>
          <li>Vision</li>
          <li>Practices</li>
          <li>Socials</li>
          <li>Certifications</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-images">
          <img src="src/pictures/main1.jpg" alt="Main1" />
          <img src="src/pictures/main2.jpg" alt="Main2" />
          <img src="src/pictures/main3.jpg" alt="Main3" />
          <img src="src/pictures/main4.jpg" alt="Main4" />
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
        <img src="src/pictures/aboutme.jpg" alt="Aboutme" />

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

      {/* ================= VISION ================= */}
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
        <div className="vision-image">
          <img src="src/pictures/vision.jpg" alt="Vision" />
        </div>

      </section>

      <section className="serve">
        <div className="serve-left">
          <img src="src/pictures/serve1.jpg" alt="Serve1" className="serve-image"/>

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
          <br/>
          <h3>A GLOBAL VISION</h3><br/>
          <p>
            From the Himalayas to Europe, South America, North America, and beyond,
            Rupendra Kayastha is building a global community of conscious leaders,
            healers, and seekers.
          </p><br/>

          <blockquote>
            To awaken the world to the intelligence of healing that already lives
            within each of us.
          </blockquote><br/>

          <img src="src/pictures/serve2.jpg" alt="Serve2" className="serve-image" />
        </div>
      </section>


      {/* ================= PRACTICES ================= */}
      <section className="practices" id="practices">
        <h2>Creator of Transformational Practices</h2>

        <div className="practice-grid">
          {/* PRACTICE 1 */}
          <div className="practice-card">
            <img src="src/pictures/practice1.jpg" alt="Practice1" className="practice-image" />
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
            <img src="src/pictures/practice2.jpg" alt="Practice2" className="practice-image" />
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
            <img src="src/pictures/instagram.jpeg" alt="Instagram" />
            <a
              href="https://www.instagram.com/rupendrakayastha?igsh=MWQ3NGxuZXFtcHd2eg=="
              target="_blank"
              rel="noreferrer"
            ><br/>
              Instagram
            </a>
          </div>

          <div className="social-phone">
            <img src="src/pictures/facebook.jpeg" alt="Facebook" />
            <a
              href="https://www.facebook.com/rupen.kayastha"
              target="_blank"
              rel="noreferrer"
            ><br/>
              Facebook
            </a>
          </div>
        </div>

        <div className="social-right">
          <h2>YOUTUBE VIDEOS</h2>

          <div className="youtube-frame">
            <iframe
              src="https://youtu.be/vgLd1m8hkkQ?si=Ri_8x2a0t8E-2wE2"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <a
            href="https://www.youtube.com/@rupendrakayastha/videos"
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

      {/* ================= LINEAGE & CERTIFICATIONS ================= */}
      <section className="lineage">
        <div className="lineage-header">
          <h2>Lineage & Certifications</h2>
          <p>
            Rupendra’s work is rooted in authentic lineages and internationally
            recognized certifications, blending ancient wisdom with modern
            transformational sciences.
          </p>
        </div>

        <div className="certificate-columns">
          {/* COLUMN 1 */}
          <div className="certificate-column">
            <div className="certificate-card">
              <img src="/src/pictures/certificate.jpg" alt="NLP Certification" />
              <h4>NLP Master Practitioner & Trainer</h4>
              <p>
                Advanced training in consciousness transformation, mental mastery,
                and subconscious re-patterning.
              </p>
            </div>

            <div className="certificate-card">
              <img src="/src/pictures/certificate.jpg" alt="Reiki Certification" />
              <h4>Reiki Grandmaster & Teacher</h4>
              <p>
                Includes Sekhem-Seichim Egyptian lineage, Acupressure Reiki, and
                Reflexology Reiki traditions.
              </p>
            </div>

            <div className="certificate-card">
              <img src="src/pictures/certificate.jpg" alt="Akasha Healing" />
              <h4>Akasha Healing Trainer</h4>
              <p>
                Working with subtle dimensions of awareness to release karmic and
                energetic imprints.
              </p>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="certificate-column">
            <div className="certificate-card">
              <img src="/src/pictures/certificate.jpg" alt="Pranic Healing" />
              <h4>Pranic Healing & Energy Therapies</h4>
              <p>
                Techniques for restoring balance and harmony within the subtle
                energy body.
              </p>
            </div>

            <div className="certificate-card">
              <img src="/src/pictures/certificate.jpg" alt="Forest Therapy" />
              <h4>Forest Therapy Guide & Trainer</h4>
              <p>
                Integrating nature immersion with neuroscience-backed healing and
                nervous system regulation.
              </p>
            </div>

            <div className="certificate-card">
              <img src="/src/pictures/certificate.jpg" alt="Hypnotherapy" />
              <h4>Verbal & Non-Verbal Hypnotherapist</h4>
              <p>
                Facilitating deep subconscious transformation through guided
                awareness and suggestion.
              </p>
            </div>
          </div>
        </div>
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
