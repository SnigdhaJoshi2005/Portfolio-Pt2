import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/social";

export default function Social() {
  const [social, setSocial] = useState({
    instagramImg: "",
    instagramUrl: "",
    facebookImg: "",
    facebookUrl: "",
    youtubeTitle: "",
    youtubeEmbedUrl: "",
    youtubeChannelUrl: "",
  });

  useEffect(() => {
    axios.get(API).then((res) => {
      if (res.data) setSocial(res.data);
    });
  }, []);

  const saveSocial = async () => {
    const token = localStorage.getItem("token");

    await axios.post(API, social, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Social section updated ✅");
  };

  return (
    <div className="admin-social-media">
      <h1>Edit Social Section</h1>

      <div className="section-card">
        <h3>Instagram</h3>
        <label>Image URL</label>
        <input
          value={social.instagramImg}
          onChange={(e) =>
            setSocial({ ...social, instagramImg: e.target.value })
          }
        />

        <label>Profile URL</label>
        <input
          value={social.instagramUrl}
          onChange={(e) =>
            setSocial({ ...social, instagramUrl: e.target.value })
          }
        />
      </div>

      <div className="section-card">
        <h3>Facebook</h3>
        <label>Image URL</label>
        <input
          value={social.facebookImg}
          onChange={(e) =>
            setSocial({ ...social, facebookImg: e.target.value })
          }
        />

        <label>Profile URL</label>
        <input
          value={social.facebookUrl}
          onChange={(e) =>
            setSocial({ ...social, facebookUrl: e.target.value })
          }
        />
      </div>

      <div className="section-card">
        <h3>YouTube</h3>

        <label>Section Title</label>
        <input
          value={social.youtubeTitle}
          onChange={(e) =>
            setSocial({ ...social, youtubeTitle: e.target.value })
          }
        />

        <label>Embed URL (iframe src)</label>
        <input
          value={social.youtubeEmbedUrl}
          onChange={(e) =>
            setSocial({ ...social, youtubeEmbedUrl: e.target.value })
          }
        />

        <label>Channel URL</label>
        <input
          value={social.youtubeChannelUrl}
          onChange={(e) =>
            setSocial({ ...social, youtubeChannelUrl: e.target.value })
          }
        />

        <button className="save-btn" onClick={saveSocial}>
          Save Social Section
        </button>
      </div>
    </div>
  );
}