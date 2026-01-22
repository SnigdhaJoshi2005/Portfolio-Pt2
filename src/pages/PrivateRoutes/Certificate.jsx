import { useEffect, useState } from "react";
import "../../App.css";

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // FETCH CERTIFICATES
  const fetchCertificates = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/certificates", {
        credentials: "include",
      });
      console.log(res);
      const data = await res.json();
      setCertificates(data);
    } catch (err) {
      console.error("Failed to fetch certificates", err);
    }
  };

  useEffect(() => {
    fetchCertificates();
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

  // ADD / UPDATE CERTIFICATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:5000/api/certificates/${editingId}`
      : "http://localhost:5000/api/certificates";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(form),
    });

    setForm({ title: "", description: "", image: "" });
    setEditingId(null);
    fetchCertificates();
  };

  // EDIT
  const handleEdit = (cert) => {
    setEditingId(cert._id);
    setForm({
      title: cert.title,
      description: cert.description,
      image: cert.image,
    });
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this certificate?")) return;

    await fetch(`/api/certificates/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    fetchCertificates();
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
          <form className="certificate-form" onSubmit={handleSubmit}>
            <h3>{editingId ? "Edit Certificate" : "Add New Certificate"}</h3>

            <div className="section-card">
              <label>Title</label>
              <input
                type="text"
                placeholder="Certificate Title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                required
              />

              <label>Description</label>
              <textarea
                placeholder="Certificate Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                required
              />

              <label>Upload Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />

              {imagePreview && <img src={imagePreview} alt="Preview" />}

              <button type="submit">
                {editingId ? "Update Certificate" : "Add Certificate"}
              </button>
            </div>
          </form>

          {/* ================= LIST ================= */}
          <div className="certificate-grid">
            {certificates.map((cert) => (
              <div className="certificate-card" key={cert._id}>
                <img src={cert.image} alt={cert.title} />
                <h4>{cert.title}</h4>
                <p>{cert.description}</p>

                <div className="certificate-actions">
                  <button
                    className="btn-edit"
                    onClick={() => handleEdit(cert)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(cert._id)}
                  >
                    Delete
                  </button>
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
