import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api/vision";

const Vision = () => {
  const [vision, setVision] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Fetch vision (cookie-based auth)
  useEffect(() => {
    const fetchVision = async () => {
      try {
        const res = await axios.get(API, {
          withCredentials: true, // ✅ send cookie
        });

        if (res.data) {
          setVision(res.data);

          if (res.data.image) {
            setPreview(
              res.data.image.startsWith("http")
                ? res.data.image
                : `http://localhost:5000/${res.data.image}`
            );
          }
        }
      } catch (err) {
        console.error("Failed to fetch vision", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVision();
  }, []);

  // ✅ Image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setVision({ ...vision, image: file });
    setPreview(URL.createObjectURL(file));
  };

  // ✅ Save vision (cookie-based auth)
  const saveVision = async () => {
    try {
      const formData = new FormData();
      formData.append("title", vision.title);
      formData.append("description", vision.description);

      if (vision.image instanceof File) {
        formData.append("image", vision.image);
      }

      await axios.put(API, formData, {
        withCredentials: true, // ✅ cookie sent automatically
      });

      alert("Vision updated ✅");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to update vision ❌");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="admin-vision">
      <h1>Edit Vision</h1>

      <div className="section-card">
        <h2>Vision Content</h2>

        <label>Title</label>
        <input
          type="text"
          value={vision.title}
          onChange={(e) =>
            setVision({ ...vision, title: e.target.value })
          }
        />

        <label>Description</label>
        <textarea
          rows="6"
          value={vision.description}
          onChange={(e) =>
            setVision({ ...vision, description: e.target.value })
          }
        />

        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{
              maxWidth: "400px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
          />
        )}

        <button className="save-btn" onClick={saveVision}>
          Save Vision
        </button>
      </div>
    </div>
  );
};

export default Vision;
