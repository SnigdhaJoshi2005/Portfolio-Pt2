import { useState, useEffect } from "react";
import axios from "axios";

const ContactSection = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users/profile").then((res) => {
      setContact(res.data);
    });
  }, []);

  return (
    <section id="contact">
      <img
        src={
          contact?.image
            ? contact.image.startsWith("http") || contact.image.startsWith("src")
              ? contact.image
              : `http://localhost:5000/${contact.image}`
            : "src/pictures/aboutme.jpg"
        }
        alt="Contact"
        className="contact-img"
      />

      <div className="contact">
        <div className="contact-content">
          <h2>{contact?.contactTitle || "Connect & Transform"}</h2>
          <p>
            {contact?.contactDesc ||
              "Step into the space where awareness heals, where stillness becomes your guide, and where your natural intelligence reconnects with the flow of life."}
          </p>

          <div className="contact-signature">
            <span>{contact?.name || "Rupendra Kayastha"}</span>
            <small>{contact?.subtitle || "Mystic Yogi · Healer · Trainer"}</small>
          </div>

          <p className="contact-info">
            Email: {contact?.email || "Rupendra@email.com"}
            <br />
            {contact?.socials || "Instagram • GitHub • LinkedIn"}
          </p>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;