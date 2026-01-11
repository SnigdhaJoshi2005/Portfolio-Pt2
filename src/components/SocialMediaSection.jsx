const SocialMediaSection = () => {
    return (
        <section className="social-media" id="socials">
        <div className="social-left">
          <div className="social-phone">
            <img src="src/pictures/instagram.jpeg" alt="Instagram" />
            <a
              href="https://www.instagram.com/rupendrakayastha?igsh=MWQ3NGxuZXFtcHd2eg=="
              target="_blank"
              rel="noreferrer"
            >
              <br />
              Instagram
            </a>
          </div>

          <div className="social-phone">
            <img src="src/pictures/facebook.jpeg" alt="Facebook" />
            <a
              href="https://www.facebook.com/rupen.kayastha"
              target="_blank"
              rel="noreferrer"
            >
              <br />
              Facebook
            </a>
          </div>
        </div>

        <div className="social-right">
          <h2>YOUTUBE VIDEOS</h2>

          <div className="youtube-frame">
            <iframe
              src="https://www.youtube.com/embed/vgLd1m8hkkQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <a
            href="https://www.youtube.com/@rupendrakayastha/videos"
            target="_blank"
            rel="noreferrer"
            className="youtube-link"
          >
            Visit Channel →
          </a>
        </div>
      </section>
    );
}   
export default SocialMediaSection;