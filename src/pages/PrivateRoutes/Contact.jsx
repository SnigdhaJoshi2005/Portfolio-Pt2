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
    image: "",
    socials: {
      instagram: "",
      youtube: "",
      linkedin: "",
    },
  });

  useEffect(() => {
    axios.get(API).then((res) => {
      if (res.data) setContact(res.data);
    });
  }, []);

  const saveContact = async () => {
    const token = localStorage.getItem("token");

    await axios.post(API, contact, {
      headers: { Authorization: `Bearer ${token}` },
    });

    alert("Contact section updated ✅");
  };

  return (
    <div className="admin-contact">
      <h1>Edit Contact Section</h1>

      <input
        placeholder="Heading"
        value={contact.heading}
        onChange={(e) =>
          setContact({ ...contact, heading: e.target.value })
        }
      />

      <textarea
        placeholder="Description"
        value={contact.description}
        onChange={(e) =>
          setContact({ ...contact, description: e.target.value })
        }
      />

      <input
        placeholder="Name"
        value={contact.name}
        onChange={(e) =>
          setContact({ ...contact, name: e.target.value })
        }
      />

      <input
        placeholder="Subtitle"
        value={contact.subtitle}
        onChange={(e) =>
          setContact({ ...contact, subtitle: e.target.value })
        }
      />

      <input
        placeholder="Email"
        value={contact.email}
        onChange={(e) =>
          setContact({ ...contact, email: e.target.value })
        }
      />

      <input
        placeholder="Instagram URL"
        value={contact.socials.instagram}
        onChange={(e) =>
          setContact({
            ...contact,
            socials: { ...contact.socials, instagram: e.target.value },
          })
        }
      />

      <input
        placeholder="YouTube URL"
        value={contact.socials.youtube}
        onChange={(e) =>
          setContact({
            ...contact,
            socials: { ...contact.socials, youtube: e.target.value },
          })
        }
      />

      <input
        placeholder="LinkedIn URL"
        value={contact.socials.linkedin}
        onChange={(e) =>
          setContact({
            ...contact,
            socials: { ...contact.socials, linkedin: e.target.value },
          })
        }
      />

      <button onClick={saveContact}>Save Contact</button>
    </div>
  );
}
