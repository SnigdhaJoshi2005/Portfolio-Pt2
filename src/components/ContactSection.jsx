const ContactSection = () => {
    return (
        <section id="contact">
        <img src="src\pictures\aboutme.jpg" alt="Contact" className="contact-img" />

        <div className="contact">
          <div className="contact-content">
            <h2>Connect & Transform</h2>
            <p>
              Step into the space where awareness heals, where stillness becomes
              your guide, and where your natural intelligence reconnects with the
              flow of life.
            </p>

            <div className="contact-signature">
              <span>Rupendra Kayastha</span>
              <small>Mystic Yogi · Healer · Trainer</small>
            </div>

            <p className="contact-info">
              Email: Rupendra@email.com
              <br />
              Instagram • GitHub • LinkedIn
            </p>
          </div>
        </div>
      </section>
    );
}
export default ContactSection;