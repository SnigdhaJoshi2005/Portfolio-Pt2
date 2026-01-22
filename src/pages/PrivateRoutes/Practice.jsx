import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../App.css";

const API = "http://localhost:5000/api/practices";

const Practice = () => {
  const [practices, setPractices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const formRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    _id: null,
    title: "",
    description: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState("");

  /* ---------------- FETCH ---------------- */
  useEffect(() => {
    const fetchPractices = async () => {
      try {
        const res = await axios.get(API, {
          withCredentials: true,
        });
        setPractices(res.data);
      } catch (err) {
        console.error("Failed to fetch practices", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPractices();
  }, []);

  /* ---------------- IMAGE SELECT ---------------- */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm({ ...form, image: file });
    setImagePreview(URL.createObjectURL(file));
  };

  /* ---------------- SAVE ---------------- */
  const savePractice = async () => {
    try {
      setSaving(true);

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      if (form.image instanceof File) {
        formData.append("image", form.image);
      }

      if (form._id) {
        await axios.put(`${API}/${form._id}`, formData, {
          withCredentials: true,
        });
        alert("Practice updated ✅");
      } else {
        await axios.post(API, formData, {
          withCredentials: true,
        });
        alert("Practice added ✅");
      }

      const res = await axios.get(API, {
        withCredentials: true,
      });
      setPractices(res.data);

      setForm({ _id: null, title: "", description: "", image: null });
      setImagePreview("");
    } catch (err) {
      console.error(err);
      alert("Failed to save ❌");
    } finally {
      setSaving(false);
    }
  };

  /* ---------------- DELETE ---------------- */
  const deletePractice = async (id) => {
    if (!window.confirm("Delete this practice?")) return;

    try {
      await axios.delete(`${API}/${id}`, {
        withCredentials: true,
      });

      setPractices(practices.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete ❌");
    }
  };

  const handleEdit = (p) => {

    setIsEditing(true);

    setForm({
      _id: p._id,
      title: p.title,
      description: p.description,
      image: null,
    });

    setImagePreview(
      p.image
        ? p.image.startsWith("http")
          ? p.image
          : `http://localhost:5000/${p.image}`
        : "",
    );

    // ✅ scroll to form
    setTimeout(() => {
      if (!formRef.current) return;

      const y =
        formRef.current.getBoundingClientRect().top + window.pageYOffset - 140;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 100);
  };

  const resetToAddMode = () => {
    setIsEditing(false);

    setForm({
      _id: null,
      title: "",
      description: "",
      image: null,
    });

    setImagePreview("");

    // optional scroll
    setTimeout(() => {
      if (!formRef.current) return;

      const y =
        formRef.current.getBoundingClientRect().top + window.pageYOffset - 120;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 100);
  };

  if (loading) return <p>Loading Practices...</p>;

  return (
    <div className="admin-practice">
      <h1>Practice Admin Panel</h1>

      {/* FORM */}
      <h2>{isEditing ? "Edit Practice" : "Add New Practice"}</h2>

      {isEditing && (
        <button
          type="button"
          className="back-to-add-btn"
          onClick={() => {
            resetToAddMode();
          }}
        >
          ← Back to Add Practice
        </button>
      )}

      <div className="section-card" ref={formRef}>
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
            style={{ maxWidth: "300px", borderRadius: "10px" }}
          />
        )}

        <button className="save-btn" onClick={savePractice} disabled={saving}>
          {saving ? "Saving..." : form._id ? "Update Practice" : "Add Practice"}
        </button>
      </div>

      {/* LIST */}
      <h2 className="admin-section-title">Existing Practices</h2>

      {practices.map((p) => (
        <div key={p._id} className="section-card">
          <h3>{p.title}</h3>
          <p>{p.description}</p>

          {p.image && (
            <img
              src={
                p.image.startsWith("http")
                  ? p.image
                  : `http://localhost:5000/${p.image}`
              }
              alt={p.title}
              style={{ maxWidth: "300px", borderRadius: "10px" }}
            />
          )}

          <div style={{ marginTop: 10, display: "flex", gap: 10 }}>
            <button
              onClick={() => {
                handleEdit(p);
              }}
            >
              Edit
            </button>

            <button
              onClick={() => deletePractice(p._id)}
              style={{ background: "#ff4d4d", color: "#fff" }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Practice;