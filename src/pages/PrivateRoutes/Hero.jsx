import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/hero";

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
    const fetchHero = async () => {
      try {
        const res = await axios.get(API, {
          withCredentials: true,
        });

        if (res.data) setForm(res.data);
      } catch (err) {
        console.error("Failed to fetch hero data", err);
      }
    };

    fetchHero();
  }, []);

  // Handle text change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle image select
  const handleImageSelect = (e) => {
    setNewImages((prev) => [...prev, ...Array.from(e.target.files)]);
  };

  // Remove existing image
  const removeImage = (index) => {
    const updated = [...form.images];
    updated.splice(index, 1);
    setForm({ ...form, images: updated });
  };

  //Remive new selected images
  const removeNewImage = (index) => {
    const updated = [...newImages];
    updated.splice(index, 1);
    setNewImages(updated);
  };

  // Save hero data
  const saveHero = async () => {
    try {
      setLoading(true);

      const data = new FormData();
      data.append("title", form.title);
      data.append("name", form.name);
      data.append("subtitle", form.subtitle);
      data.append("images", JSON.stringify(form.images));

      newImages.forEach((img) => data.append("files", img));

      await axios.post(API, data, {
        withCredentials: true,
      });

      setNewImages([]);
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
      </div>

      <div className="section-card">
        <h3>Carousel Images</h3>

        <input type="file" multiple onChange={handleImageSelect} />

        <div className="hero-images">
          {form.images?.map((img, i) => (
            <div key={i}>
              <img
                src={
                  img.startsWith("http")
                    ? img
                    : `http://localhost:5000/${img}`
                }
                style={{ width: 160, borderRadius: 10 }}
                alt=""
              />
              <button
                className="remove-btn"
                onClick={() => removeImage(i)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* ✅ Preview newly selected images */}
          {newImages.map((img, i) => (
            <div key={`new-${i}`}>
              <img
                src={URL.createObjectURL(img)}
                style={{
                  width: 160,
                  borderRadius: 10,
                  opacity: 0.85,
                }}
                alt=""
              />
              <button
                className="remove-btn"
                onClick={() => removeNewImage(i)}
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
    </div>
  );
}