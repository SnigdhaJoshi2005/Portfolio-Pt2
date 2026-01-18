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

  useEffect(() => {
    axios.get(API).then((res) => {
      if (res.data) {
        setVision(res.data);
        if (res.data.image) {
          setPreview(`http://localhost:5000/${res.data.image}`);
        }
      }
      setLoading(false);
    });
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setVision({ ...vision, image: file });

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const saveVision = async () => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("title", vision.title);
    formData.append("description", vision.description);

    if (vision.image instanceof File) {
      formData.append("image", vision.image);
    }

    await axios.put(API, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    alert("Vision updated ✅");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="about-admin">
      <h1>Edit Vision</h1>

      <label>Title</label>
      <input
        type="text"
        value={vision.title}
        onChange={(e) => setVision({ ...vision, title: e.target.value })}
      />

      <label>Description</label>
      <textarea
        rows="6"
        value={vision.description}
        onChange={(e) => setVision({ ...vision, description: e.target.value })}
      />

      <label>Upload Image</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          style={{ maxWidth: "400px", marginTop: "10px", borderRadius: "10px" }}
        />
      )}

      <button className="save-btn" onClick={saveVision}>
        Save Vision
      </button>
    </div>
  );
};

export default Vision;
