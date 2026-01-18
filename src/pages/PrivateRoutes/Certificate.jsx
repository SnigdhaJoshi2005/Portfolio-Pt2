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

  // FETCH CERTIFICATES
  const fetchCertificates = async () => {
    try {
      const res = await fetch("/api/certificates", {
        credentials: "include",
      });
      const data = await res.json();
      setCertificates(data);
    } catch (err) {
      console.error("Failed to fetch certificates", err);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  // ADD / UPDATE CERTIFICATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `/api/certificates/${editingId}`
      : "/api/certificates";

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

            <input
              type="text"
              placeholder="Certificate Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              required
            />

            <textarea
              placeholder="Certificate Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />

            <input
              type="text"
              placeholder="Image URL"
              value={form.image}
              onChange={(e) =>
                setForm({ ...form, image: e.target.value })
              }
              required
            />

            <button type="submit">
              {editingId ? "Update Certificate" : "Add Certificate"}
            </button>
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
