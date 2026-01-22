import { useEffect, useState, useRef } from "react";
import "../../App.css";

const API = "http://localhost:5000/api/certificates";

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", image: null });
  const [imagePreview, setImagePreview] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const formRef = useRef(null);

  /* ---------------- FETCH CERTIFICATES ---------------- */
  const fetchCertificates = async () => {
    try {
      const res = await fetch(API, { credentials: "include" });
      const data = await res.json();
      setCertificates(data);
    } catch (err) {
      console.error("Failed to fetch certificates", err);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  /* ---------------- IMAGE CHANGE ---------------- */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm({ ...form, image: file });
    setImagePreview(URL.createObjectURL(file));
  };

  /* ---------------- ADD / UPDATE ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API}/${editingId}` : API;

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);

    if (form.image instanceof File) formData.append("image", form.image);

    try {
      await fetch(url, {
        method,
        credentials: "include",
        body: formData,
      });

      alert(editingId ? "Certificate updated ✅" : "Certificate added ✅");

      // Reset form
      setForm({ title: "", description: "", image: null });
      setImagePreview("");
      setEditingId(null);
      setIsEditing(false);

      fetchCertificates();
    } catch (err) {
      console.error(err);
      alert("Failed to save certificate ❌");
    }
  };

  /* ---------------- EDIT ---------------- */
  const handleEdit = (cert) => {
    setIsEditing(true);
    setEditingId(cert._id);

    setForm({
      title: cert.title,
      description: cert.description,
      image: null, // reset image to upload new
    });

    setImagePreview(cert.image.startsWith("http") ? cert.image : `http://localhost:5000/${cert.image}`);

    // scroll to form
    setTimeout(() => {
      if (!formRef.current) return;
      const y = formRef.current.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  };

  /* ---------------- DELETE ---------------- */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this certificate?")) return;

    try {
      await fetch(`${API}/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      fetchCertificates();
    } catch (err) {
      console.error(err);
      alert("Failed to delete ❌");
    }
  };

  /* ---------------- BACK TO ADD MODE ---------------- */
  const backToAddMode = () => {
    setIsEditing(false);
    setEditingId(null);
    setForm({ title: "", description: "", image: null });
    setImagePreview("");

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollBy({ top: -120, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="admin-container">
      <main className="admin-main">
        <div className="admin-certificate">
          <h1>Edit Certificates</h1>
          <p className="subtitle">
            Add, update, or remove certificates displayed on your portfolio.
          </p>

          {/* ================= FORM ================= */}
          <form className="certificate-form" onSubmit={handleSubmit} ref={formRef}>
            <h3>{isEditing ? "Edit Certificate" : "Add New Certificate"}</h3>

            {isEditing && (
              <button
                type="button"
                className="back-to-add-btn"
                onClick={backToAddMode}
              >
                ← Back to Add Mode
              </button>
            )}

            <div className="section-card">
              <label>Title</label>
              <input
                type="text"
                placeholder="Certificate Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />

              <label>Description</label>
              <textarea
                placeholder="Certificate Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                required
              />

              <label>Upload Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />

              {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: "300px", borderRadius: "10px" }} />}

              <button type="submit">
                {isEditing ? "Update Certificate" : "Add Certificate"}
              </button>
            </div>
          </form>

          {/* ================= LIST ================= */}
          <div className="certificate-grid">
            {certificates.map((cert) => (
              <div className="certificate-card" key={cert._id}>
                <img src={cert.image.startsWith("http") ? cert.image : `http://localhost:5000/${cert.image}`} alt={cert.title} />
                <h4>{cert.title}</h4>
                <p>{cert.description}</p>

                <div className="certificate-actions">
                  <button className="btn-edit" onClick={() => handleEdit(cert)}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(cert._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Certificate;