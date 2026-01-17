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
    setLoading(true);

    const token = localStorage.getItem("token");

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
    alert("Hero section updated");
  };

  return (
    <div className="about-admin">
      <h1>Edit Hero Section</h1>

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

      <h3>Carousel Images</h3>

      <input type="file" multiple onChange={handleImageSelect} />

      <div style={{ display: "flex", gap: 16, marginTop: 20, flexWrap: "wrap" }}>
        {form.images?.map((img, i) => (
          <div key={i}>
            <img
              src={`http://localhost:5000/${img}`}
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
  );
}
