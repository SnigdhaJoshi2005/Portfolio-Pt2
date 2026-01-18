import { useEffect, useState } from "react";
import axios from "axios";

export default function Process() {
  const [process, setProcess] = useState({
    heading: "",
    quote: "",
    description: "",
  });

  const token = localStorage.getItem("token");

  // GET existing process data
  useEffect(() => {
    axios.get("http://localhost:5000/api/process")
      .then((res) => {
        if (res.data) {
          setProcess({
            heading: res.data.heading || "",
            quote: res.data.quote || "",
            description: res.data.description || "",
          });
        }
      })
      .catch(console.error);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setProcess({
      ...process,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/process",
        process,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Process section updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update process section");
    }
  };

  return (
    <div className="admin-page">
      <h1>Edit Process Section</h1>

      <form onSubmit={handleSubmit} className="admin-form">
        <label>Heading</label>
        <input
          type="text"
          name="heading"
          value={process.heading}
          onChange={handleChange}
          required
        />

        <label>Quote</label>
        <textarea
          name="quote"
          value={process.quote}
          onChange={handleChange}
          rows={3}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={process.description}
          onChange={handleChange}
          rows={6}
          required
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
