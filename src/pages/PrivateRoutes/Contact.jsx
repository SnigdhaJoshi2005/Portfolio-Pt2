import { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const API = "http://localhost:5000/api/contact";

export default function Contact() {
  const [contact, setContact] = useState({
    heading: "",
    description: "",
    name: "",
    subtitle: "",
    email: "",
    image: null,
    socials: {
      instagram: "",
      youtube: "",
      linkedin: "",
    },
  });

  /* ---------------- GET ---------------- */
  useEffect(() => {
    axios
      .get(API, { withCredentials: true }) // ✅ COOKIE
      .then((res) => {
        if (!res.data) return;

        setContact({
          heading: res.data.heading || "",
          description: res.data.description || "",
          name: res.data.name || "",
          subtitle: res.data.subtitle || "",
          email: res.data.email || "",
          image: res.data.image || null,
          socials: {
            instagram: res.data.socials?.instagram || "",
            youtube: res.data.socials?.youtube || "",
            linkedin: res.data.socials?.linkedin || "",
          },
        });
      })
      .catch(console.error);
  }, []);

  /* ---------------- SAVE ---------------- */
  const saveContact = async () => {
    try {
      const formData = new FormData();

      formData.append("heading", contact.heading);
      formData.append("description", contact.description);
      formData.append("name", contact.name);
      formData.append("subtitle", contact.subtitle);
      formData.append("email", contact.email);
      formData.append("socials", JSON.stringify(contact.socials));

      if (contact.image instanceof File) {
        formData.append("image", contact.image);
      }

      await axios.post(API, formData, {
        withCredentials: true, // ✅ COOKIE AUTH
      });

      alert("Contact section updated ✅");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Failed to save contact ❌");
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="admin-contact">
      <h1>Edit Contact Section</h1>

      <div className="section-card">
        <label>Heading</label>
        <input
          value={contact.heading}
          onChange={(e) =>
            setContact({ ...contact, heading: e.target.value })
          }
        />

        <label>Description</label>
        <textarea
          rows="4"
          value={contact.description}
          onChange={(e) =>
            setContact({ ...contact, description: e.target.value })
          }
        />

        <label>Name</label>
        <input
          value={contact.name}
          onChange={(e) =>
            setContact({ ...contact, name: e.target.value })
          }
        />

        <label>Subtitle</label>
        <input
          value={contact.subtitle}
          onChange={(e) =>
            setContact({ ...contact, subtitle: e.target.value })
          }
        />

        <label>Email</label>
        <input
          type="email"
          value={contact.email}
          onChange={(e) =>
            setContact({ ...contact, email: e.target.value })
          }
        />

        <label>Instagram URL</label>
        <input
          value={contact.socials.instagram}
          onChange={(e) =>
            setContact({
              ...contact,
              socials: {
                ...contact.socials,
                instagram: e.target.value,
              },
            })
          }
        />

        <label>YouTube URL</label>
        <input
          value={contact.socials.youtube}
          onChange={(e) =>
            setContact({
              ...contact,
              socials: {
                ...contact.socials,
                youtube: e.target.value,
              },
            })
          }
        />

        <label>LinkedIn URL</label>
        <input
          value={contact.socials.linkedin}
          onChange={(e) =>
            setContact({
              ...contact,
              socials: {
                ...contact.socials,
                linkedin: e.target.value,
              },
            })
          }
        />

        <button className="save-btn" onClick={saveContact}>
          Save Contact
        </button>
      </div>
    </div>
  );
}