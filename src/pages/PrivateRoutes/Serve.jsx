import { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const API = "http://localhost:5000/api/serve";

const Serve = () => {
  const [serve, setServe] = useState({
    title1: "",
    description1: "",
    list: [],
    title2: "",
    description2: "",
    quote: "",
    image1: "",
    image2: "",
  });

  const [preview1, setPreview1] = useState("");
  const [preview2, setPreview2] = useState("");

  /* ---------------- FETCH ---------------- */
  useEffect(() => {
    const fetchServe = async () => {
      try {
        const res = await axios.get(API, {
          withCredentials: true, // ✅ send cookie
        });

        if (res.data) {
          setServe(res.data);

          if (res.data.image1) {
            setPreview1(
              res.data.image1.startsWith("http")
                ? res.data.image1
                : `http://localhost:5000/${res.data.image1}`
            );
          }

          if (res.data.image2) {
            setPreview2(
              res.data.image2.startsWith("http")
                ? res.data.image2
                : `http://localhost:5000/${res.data.image2}`
            );
          }
        }
      } catch (err) {
        console.error("Failed to fetch serve section", err);
      }
    };

    fetchServe();
  }, []);

  /* ---------------- SAVE ---------------- */
  const saveServe = async () => {
    try {
      const formData = new FormData();

      Object.keys(serve).forEach((key) => {
        if (key === "list") {
          formData.append("list", JSON.stringify(serve.list));
        } else if (serve[key] instanceof File) {
          formData.append(key, serve[key]);
        } else {
          formData.append(key, serve[key] || "");
        }
      });

      await axios.put(API, formData, {
        withCredentials: true, // ✅ cookie auth
      });

      alert("Serve section updated ✅");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to update Serve section ❌");
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="admin-serve">
      <h1>Edit Serve Section</h1>

      {/* WHO HE SERVES */}
      <div className="section-card">
        <h2>Who He Serves</h2>

        <label>Title</label>
        <input
          value={serve.title1}
          onChange={(e) =>
            setServe({ ...serve, title1: e.target.value })
          }
        />

        <label>Description</label>
        <textarea
          value={serve.description1}
          onChange={(e) =>
            setServe({ ...serve, description1: e.target.value })
          }
        />

        <label>List Items (one per line)</label>
        <textarea
          value={serve.list.join("\n")}
          onChange={(e) =>
            setServe({
              ...serve,
              list: e.target.value.split("\n"),
            })
          }
        />

        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;

            setServe({ ...serve, image1: file });
            setPreview1(URL.createObjectURL(file));
          }}
        />

        {preview1 && (
          <img
            src={preview1}
            alt="Preview"
            style={{ maxWidth: "300px", borderRadius: "10px" }}
          />
        )}
      </div>

      {/* GLOBAL VISION */}
      <div className="section-card">
        <h2>Global Vision</h2>

        <label>Title</label>
        <input
          value={serve.title2}
          onChange={(e) =>
            setServe({ ...serve, title2: e.target.value })
          }
        />

        <label>Description</label>
        <textarea
          value={serve.description2}
          onChange={(e) =>
            setServe({ ...serve, description2: e.target.value })
          }
        />

        <label>Quote</label>
        <input
          value={serve.quote}
          onChange={(e) =>
            setServe({ ...serve, quote: e.target.value })
          }
        />

        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;

            setServe({ ...serve, image2: file });
            setPreview2(URL.createObjectURL(file));
          }}
        />

        {preview2 && (
          <img
            src={preview2}
            alt="Preview"
            style={{ maxWidth: "300px", borderRadius: "10px" }}
          />
        )}

        <button onClick={saveServe} className="save-btn">
          Save Serve Section
        </button>
      </div>
    </div>
  );
};

export default Serve;
