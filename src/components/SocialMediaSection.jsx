import { useState, useEffect } from "react";
import axios from "axios";

const SocialMediaSection = () => {
  const [social, setSocial] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/social").then((res) => {
      setSocial(res.data);
    });
  }, []);

  return (
    <section className="social-media" id="socials">
      <div className="social-left">
        <div className="social-phone">
          <img
            src={
              social?.instagramImg
                ? social.instagramImg.startsWith("http") ||
                  social.instagramImg.startsWith("src")
                  ? social.instagramImg
                  : `http://localhost:5000/${social.instagramImg}`
                : "src/pictures/instagram.jpeg"
            }
            alt="Instagram"
          />
          <a
            href={
              social?.instagramUrl ||
              "https://www.instagram.com/"
            }
            target="_blank"
            rel="noreferrer"
          >
            <br />
            Instagram
          </a>
        </div>

        <div className="social-phone">
          <img
            src={
              social?.facebookImg
                ? social.facebookImg.startsWith("http") ||
                  social.facebookImg.startsWith("src")
                  ? social.facebookImg
                  : `http://localhost:5000/${social.facebookImg}`
                : "src/pictures/facebook.jpeg"
            }
            alt="Facebook"
          />
          <a
            href={
              social?.facebookUrl ||
              "https://www.facebook.com/"
            }
            target="_blank"
            rel="noreferrer"
          >
            <br />
            Facebook
          </a>
        </div>
      </div>

      <div className="social-right">
        <h2>{social?.youtubeTitle || "YOUTUBE VIDEOS"}</h2>

        <div className="youtube-frame">
          <iframe
            src={
              social?.youtubeEmbedUrl ||
              "https://www.youtube.com/embed/vgLd1m8hkkQ"
            }
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <a
          href={
            social?.youtubeChannelUrl ||
            "https://www.youtube.com/"
          }
          target="_blank"
          rel="noreferrer"
          className="youtube-link"
        >
          Visit Channel →
        </a>
      </div>
    </section>
  );
};

export default SocialMediaSection;
