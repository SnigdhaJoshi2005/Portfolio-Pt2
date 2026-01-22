import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeUp } from "../animation";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactSection = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/contact").then((res) => {
      console.log("test:", res.data);
      setContact(res.data);
    });
  }, []);

  useEffect(() => {
    console.log("here:", contact);
    console.log("instagram:", contact?.socials?.instagram);
  }, [contact]);

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
            <div className="contact-socials">
              {contact?.socials?.linkedin && (
                <a href={contact.socials.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
              )}
              {contact?.socials?.instagram && (
                <a href={contact.socials.instagram} target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
              )}
              {contact?.socials?.youtube && (
                <a href={contact.socials.youtube} target="_blank" rel="noreferrer">
                  <FaYoutube />
                </a>
              )}
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;