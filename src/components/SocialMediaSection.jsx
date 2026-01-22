import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/social";

const resolveImage = (img) => {
  if (!img) return "";
  if (img.startsWith("http")) return img;
  return `http://localhost:5000/${img}`;
};

const SocialMediaSection = () => {
  const [social, setSocial] = useState(null);

  useEffect(() => {
    axios.get(API).then((res) => setSocial(res.data));
  }, []);

  if (!social) return null;

  return (
    <section className="social-media" id="socials">
      <div className="social-left">
        <div>
          <a href={social.instagramUrl} target="_blank" rel="noreferrer">
            <img
              src={resolveImage(social.instagramImg)}
              alt="Instagram"
            />
          </a>
          <br />
          <a href={social.instagramUrl} target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>instagram</a>
        </div>

        <div>
          <a href={social.facebookUrl} target="_blank" rel="noreferrer">
            <img
              src={resolveImage(social.facebookImg)}
              alt="Facebook"
            />
          </a>
          <br />
          <a href={social.facebookUrl} target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>facebook</a>
        </div>
      </div>

      <div className="social-right">
        <h2>{social.youtubeTitle || "YOUTUBE VIDEOS"}</h2>

        <iframe
          src={social.youtubeEmbedUrl}
          title="YouTube video"
          frameBorder="0"
          allowFullScreen
        />

        <a
          href={social.youtubeChannelUrl}
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