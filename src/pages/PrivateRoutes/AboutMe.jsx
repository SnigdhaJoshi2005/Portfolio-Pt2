import { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const API = "http://localhost:5000/api/about";

const AboutMe = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [about, setAbout] = useState({
    title: "",
    image: "",
    heading: "",
    description: "",
    socials: {
      linkedin: "",
      instagram: "",
      facebook: "",
    },
  });

  const [imagePreview, setImagePreview] = useState("");

  /* ---------------- FETCH EXISTING DATA ---------------- */
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get(API, { withCredentials: true });
        if (res.data) {
          setAbout({
            title: res.data.title || "",
            image: res.data.image || "",
            heading: res.data.heading || "",
            description: res.data.description || "",
            socials: {
              linkedin: res.data.socials?.linkedin || "",
              instagram: res.data.socials?.instagram || "",
              facebook: res.data.socials?.facebook || "",
            },
          });
          setImagePreview(
            res.data.image
              ? res.data.image.startsWith("http")
                ? res.data.image
                : `http://localhost:5000/${res.data.image}`
              : ""
          );
        }
      } catch (err) {
        console.error("Failed to fetch about data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  /* ---------------- IMAGE UPLOAD ---------------- */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview locally
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);

    // Save to about object to send to backend
    setAbout({ ...about, image: file });
  };

  /* ---------------- SAVE ABOUT ---------------- */
  const saveAbout = async () => {
    try {
      setSaving(true);
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Session expired. Please login again.");
        return;
      }

      // Use FormData for image upload
      const formData = new FormData();
      formData.append("title", about.title);
      formData.append("heading", about.heading);
      formData.append("description", about.description);
      formData.append("linkedin", about.socials.linkedin);
      formData.append("instagram", about.socials.instagram);
      formData.append("facebook", about.socials.facebook);

      if (about.image instanceof File) {
        formData.append("image", about.image);
      }

      await axios.put(API, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      alert("About Me updated successfully ✅");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to save About Me ❌");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading About Me...</p>;

  /* ---------------- UI ---------------- */
  return (
    <div className="about-admin">
      <h1>Edit About Me</h1>

      {/* SECTION TITLE */}
      <div className="section-card">
        <label>Section Title</label>
        <input
          type="text"
          value={about.title}
          onChange={(e) => setAbout({ ...about, title: e.target.value })}
        />
      </div>

      {/* IMAGE */}
      <div className="section-card">
        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="about-image-preview"
          />
        )}
      </div>

      {/* CONTENT */}
      <div className="section-card">
        <h2>Content</h2>

        <label>Heading</label>
        <input
          type="text"
          value={about.heading}
          onChange={(e) => setAbout({ ...about, heading: e.target.value })}
        />

        <label>Description</label>
        <textarea
          rows="6"
          value={about.description}
          onChange={(e) =>
            setAbout({ ...about, description: e.target.value })
          }
        />
      </div>

      {/* SOCIAL LINKS */}
      <div className="section-card">
        <h2>Social Links</h2>

        <input
          type="text"
          placeholder="LinkedIn URL"
          value={about.socials.linkedin}
          onChange={(e) =>
            setAbout({
              ...about,
              socials: { ...about.socials, linkedin: e.target.value },
            })
          }
        />

        <input
          type="text"
          placeholder="Instagram URL"
          value={about.socials.instagram}
          onChange={(e) =>
            setAbout({
              ...about,
              socials: { ...about.socials, instagram: e.target.value },
            })
          }
        />

        <input
          type="text"
          placeholder="Facebook URL"
          value={about.socials.facebook}
          onChange={(e) =>
            setAbout({
              ...about,
              socials: { ...about.socials, facebook: e.target.value },
            })
          }
        />
      </div>

      {/* SAVE */}
      <button className="save-btn" onClick={saveAbout} disabled={saving}>
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );

};

export default AboutMe;
