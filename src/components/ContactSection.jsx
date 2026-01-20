import { useState, useEffect } from "react";
import axios from "axios";

const ContactSection = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/contact").then((res) => {
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
          <h2>{contact?.heading || "Connect & Transform"}</h2>

          <p>
            {contact?.description ||
              "Step into the space where awareness heals, where stillness becomes your guide."}
          </p>

          <div className="contact-signature">
            <span>{contact?.name || "Rupendra Kayastha"}</span>
            <small>
              {contact?.subtitle || "Mystic Yogi · Healer · Trainer"}
            </small>
          </div>

          <p className="contact-info">
            Email: {contact?.email || "example@email.com"}
            <br />
            {contact?.socials?.instagram && "Instagram "}
            {contact?.socials?.youtube && "• YouTube "}
            {contact?.socials?.linkedin && "• LinkedIn"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
