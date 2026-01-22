import { useEffect, useState, useRef } from "react";
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

  const [preview, setPreview] = useState({
    instagram: "",
    facebook: "",
  });

  const formRef = useRef(null);

  // Fetch existing data
  useEffect(() => {
    axios.get(API).then((res) => {
      if (res.data) {
        setSocial(res.data);

        if (res.data.instagramImg)
          setPreview((p) => ({ ...p, instagram: `http://localhost:5000/${res.data.instagramImg}` }));
        if (res.data.facebookImg)
          setPreview((p) => ({ ...p, facebook: `http://localhost:5000/${res.data.facebookImg}` }));
      }
    });
  }, []);

  // Handle file change
  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (!file) return;

    setSocial((s) => ({ ...s, [field]: file }));
    setPreview((p) => ({ ...p, [field === "instagramImg" ? "instagram" : "facebook"]: URL.createObjectURL(file) }));
  };

  // Save
  const saveSocial = async () => {
    try {
      const formData = new FormData();
      Object.keys(social).forEach((key) => {
        if (key === "instagramImg" || key === "facebookImg") {
          if (social[key] instanceof File) formData.append(key, social[key]);
        } else {
          formData.append(key, social[key]);
        }
      });

      const token = localStorage.getItem("token");

      await axios.post(API, formData, {
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      alert("Social section updated ✅");
    } catch (err) {
      console.error(err);
      alert("Failed to save social section ❌");
    }
  };

  return (
    <div className="admin-social-media" ref={formRef}>
      <h1>Edit Social Section</h1>

      {/* Instagram */}
      <div className="section-card">
        <h3>Instagram</h3>
        <label>Profile Image</label>
        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "instagramImg")} />
        {preview.instagram && <img src={preview.instagram} alt="Instagram Preview" style={{ maxWidth: 200 }} />}
        <label>Profile URL</label>
        <input
          value={social.instagramUrl}
          onChange={(e) => setSocial((s) => ({ ...s, instagramUrl: e.target.value }))}
        />
      </div>

      {/* Facebook */}
      <div className="section-card">
        <h3>Facebook</h3>
        <label>Profile Image</label>
        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, "facebookImg")} />
        {preview.facebook && <img src={preview.facebook} alt="Facebook Preview" style={{ maxWidth: 200 }} />}
        <label>Profile URL</label>
        <input
          value={social.facebookUrl}
          onChange={(e) => setSocial((s) => ({ ...s, facebookUrl: e.target.value }))}
        />
      </div>

      {/* YouTube */}
      <div className="section-card">
        <h3>YouTube</h3>
        <label>Section Title</label>
        <input
          value={social.youtubeTitle}
          onChange={(e) => setSocial((s) => ({ ...s, youtubeTitle: e.target.value }))}
        />
        <label>Embed URL (iframe src)</label>
        <input
          value={social.youtubeEmbedUrl}
          onChange={(e) => setSocial((s) => ({ ...s, youtubeEmbedUrl: e.target.value }))}
        />
        <label>Channel URL</label>
        <input
          value={social.youtubeChannelUrl}
          onChange={(e) => setSocial((s) => ({ ...s, youtubeChannelUrl: e.target.value }))}
        />
      </div>

      <button className="save-btn" onClick={saveSocial}>
        Save Social Section
      </button>
    </div>
  );
}