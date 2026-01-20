import { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

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
    <div className="admin-form">
      <h1>Edit Social Section</h1>

      <h3>Instagram</h3>
      <input
        placeholder="Instagram Image URL / path"
        value={social.instagramImg}
        onChange={(e) =>
          setSocial({ ...social, instagramImg: e.target.value })
        }
      />
      <input
        placeholder="Instagram Profile URL"
        value={social.instagramUrl}
        onChange={(e) =>
          setSocial({ ...social, instagramUrl: e.target.value })
        }
      />

      <h3>Facebook</h3>
      <input
        placeholder="Facebook Image URL / path"
        value={social.facebookImg}
        onChange={(e) =>
          setSocial({ ...social, facebookImg: e.target.value })
        }
      />
      <input
        placeholder="Facebook Profile URL"
        value={social.facebookUrl}
        onChange={(e) =>
          setSocial({ ...social, facebookUrl: e.target.value })
        }
      />

      <h3>YouTube</h3>
      <input
        placeholder="YouTube Section Title"
        value={social.youtubeTitle}
        onChange={(e) =>
          setSocial({ ...social, youtubeTitle: e.target.value })
        }
      />
      <input
        placeholder="YouTube Embed URL (iframe src)"
        value={social.youtubeEmbedUrl}
        onChange={(e) =>
          setSocial({ ...social, youtubeEmbedUrl: e.target.value })
        }
      />
      <input
        placeholder="YouTube Channel URL"
        value={social.youtubeChannelUrl}
        onChange={(e) =>
          setSocial({ ...social, youtubeChannelUrl: e.target.value })
        }
      />

      <button onClick={saveSocial}>Save Social Section</button>
    </div>
  );
}
