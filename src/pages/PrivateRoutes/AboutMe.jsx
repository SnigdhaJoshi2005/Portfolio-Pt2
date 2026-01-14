import { useEffect, useState } from "react";
import "../../App.css";

const AboutMe = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [about, setAbout] = useState({
    title: "",
    image: "",
    sections: [],
  });

  // Fetch existing About Me data
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/about", {
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          if (data) setAbout(data);
        }
      } catch (err) {
        console.error("Failed to fetch about data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  // Update section field
  const updateSection = (index, field, value) => {
    const updated = [...about.sections];
    updated[index][field] = value;
    setAbout({ ...about, sections: updated });
  };

  // Add section
  const addSection = () => {
    setAbout({
      ...about,
      sections: [...about.sections, { heading: "", text: "" }],
    });
  };

  // Remove section
  const removeSection = (index) => {
    const updated = about.sections.filter((_, i) => i !== index);
    setAbout({ ...about, sections: updated });
  };

  // Save About Me
  const saveAbout = async () => {
    setSaving(true);
    try {
      const res = await fetch("http://localhost:5000/api/about", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(about),
      });

      if (!res.ok) throw new Error("Save failed");

      alert("About Me updated successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Failed to save About Me ❌");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading About Me...</p>;

  return (
    <div className="about-admin">
      <h1>Edit About Me</h1>

      {/* Title */}
      <label>Section Title</label>
      <input
        type="text"
        value={about.title}
        onChange={(e) => setAbout({ ...about, title: e.target.value })}
      />

      {/* Image URL */}
      <label>Image URL</label>
      <input
        type="text"
        value={about.image}
        placeholder="https://example.com/about.jpg"
        onChange={(e) => setAbout({ ...about, image: e.target.value })}
      />

      {about.image && (
        <img
          src={about.image}
          alt="About Preview"
          className="about-image-preview"
        />
      )}

      <hr />

      <h2>Content Sections</h2>

      {about.sections.map((section, index) => (
        <div className="section-card" key={index}>
          <label>Heading</label>
          <input
            type="text"
            value={section.heading}
            onChange={(e) =>
              updateSection(index, "heading", e.target.value)
            }
          />

          <label>Text</label>
          <textarea
            rows="4"
            value={section.text}
            onChange={(e) =>
              updateSection(index, "text", e.target.value)
            }
          />

          <button
            className="remove-btn"
            onClick={() => removeSection(index)}
          >
            Remove Section
          </button>
        </div>
      ))}

      <button className="add-btn" onClick={addSection}>
        + Add Section
      </button>

      <hr />

      <button
        className="save-btn"
        onClick={saveAbout}
        disabled={saving}
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};

export default AboutMe;