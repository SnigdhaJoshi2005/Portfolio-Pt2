import { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css"; // reuse your global CSS

const API = "http://localhost:5000/api/practices";

const Practice = () => {
  const [practices, setPractices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState("");

  // Fetch all practices
  useEffect(() => {
    const fetchPractices = async () => {
      try {
        const res = await axios.get(API, { withCredentials: true });
        setPractices(res.data);
      } catch (err) {
        console.error("Failed to fetch practices", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPractices();
  }, []);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setForm({ ...form, image: file });

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  // Save (add or update) practice
  const savePractice = async (id = null) => {
    try {
      setSaving(true);
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Session expired. Please login again.");
        return;
      }

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      if (form.image instanceof File) formData.append("image", form.image);

      if (id) {
        // update
        await axios.put(`${API}/${id}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Practice updated ✅");
      } else {
        // create
        await axios.post(API, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Practice added ✅");
      }

      // Refresh practices
      const res = await axios.get(API, { withCredentials: true });
      setPractices(res.data);

      // Reset form
      setForm({ title: "", description: "", image: null });
      setImagePreview("");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to save ❌");
    } finally {
      setSaving(false);
    }
  };

  // Delete practice
  const deletePractice = async (id) => {
    if (!window.confirm("Are you sure you want to delete this practice?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPractices(practices.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete ❌");
    }
  };

  if (loading) return <p>Loading Practices...</p>;

  return (
    <div className="about-admin">
      <h1>Practice Admin Panel</h1>

      {/* Form */}
      <label>Title</label>
      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <label>Description</label>
      <textarea
        rows="5"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <label>Upload Image</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          style={{ width: "250px", marginTop: "10px", borderRadius: "10px" }}
        />
      )}

      <button className="save-btn" onClick={() => savePractice()} disabled={saving}>
        {saving ? "Saving..." : "Add Practice"}
      </button>

      <hr />

      {/* List of practices */}
      {practices.map((p) => (
        <div key={p._id} className="section-card">
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          {p.image && (
            <img
              src={p.image.startsWith("http") ? p.image : `http://localhost:5000/${p.image}`}
              alt={p.title}
              style={{ width: "200px", borderRadius: "8px" }}
            />
          )}
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => setForm({ title: p.title, description: p.description, image: p.image })}>
              Edit
            </button>
            <button onClick={() => deletePractice(p._id)} style={{ marginLeft: "10px", background: "#ff4d4d", color: "#fff" }}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Practice;
