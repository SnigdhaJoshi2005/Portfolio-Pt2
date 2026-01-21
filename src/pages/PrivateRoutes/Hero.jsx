import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/hero"; // change if needed

export default function HeroAdmin() {
  const [form, setForm] = useState({
    title: "",
    name: "",
    subtitle: "",
    images: [],
  });

  const [newImages, setNewImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load existing hero data
  useEffect(() => {
    axios.get(API).then(res => {
      if (res.data) setForm(res.data);
    });
  }, []);

  // Handle text change
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle image select
  const handleImageSelect = e => {
    setNewImages([...newImages, ...e.target.files]);
  };

  // Remove existing image
  const removeImage = index => {
    const updated = [...form.images];
    updated.splice(index, 1);
    setForm({ ...form, images: updated });
  };

  // Save hero data
  const saveHero = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Session expired. Please login again.");
        return;
      }

      const data = new FormData();
      data.append("title", form.title);
      data.append("name", form.name);
      data.append("subtitle", form.subtitle);
      data.append("images", JSON.stringify(form.images));

      newImages.forEach(img => data.append("files", img));

      await axios.post(API, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setNewImages([]);
      setLoading(false);
      alert("Hero section updated successfully ✅");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to update hero section ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-hero">
      <h1>Edit Hero Section</h1>

      <div className="section-card">
        <h2>Hero Content</h2>

        <label>Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <label>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <label>Subtitle</label>
        <input
          name="subtitle"
          value={form.subtitle}
          onChange={handleChange}
        />

        <hr />
      </div >

      <div className="section-card">
        <h3>Carousel Images</h3>

        <input type="file" multiple onChange={handleImageSelect} />

        <div className="hero-images">
          {form.images?.map((img, i) => (
            <div key={i}>
              <img
                src={img.startsWith("http") || img.startsWith("src") ? img : `http://localhost:5000/${img}`}
                style={{ width: 160, borderRadius: 10 }}
              />
              <button
                className="remove-btn"
                onClick={() => removeImage(i)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button
          className="save-btn"
          onClick={saveHero}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Hero Section"}
        </button>
      </div>
    </div >

  );
}
