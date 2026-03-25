export const Footer = () => {
  const socialLinks = ["LinkedIn", "GitHub", "Instagram"];
  const services = ["Web Development", "UI/UX Design", "MERN Stack"];
  const quickLinks = ["Home", "Projects", "About Me"];

  return (
    <footer className="footer">
      {/* Section 1: Social Media */}
      <div className="footer-column">
        <h4>Follow Me</h4>

        <ul>
          {
            socialLinks.map((link, ind) => (
              <li key={ind} className="footer-item">
                <a href="#">{link}</a>
              </li>
            ))
          }
        </ul>
      </div>

      {/* Section 2: Services */}
      <div className="footer-column">
        <h4>Services</h4>
        <ul>
          {
            services.map((service, ind) => (
              <li key={ind} className="footer-item">
                <a href="#">{service}</a>
              </li>
            ))
          }
        </ul>
      </div>
      {/* Section 3: quickLinks*/}
      <div className="footer-column">
        <h4>Quick Links</h4>
        <ul>
          {
            quickLinks.map((item, ind) => (
              <li key={ind} className="footer-item">
                <a href="#">{item}</a>
              </li>
            ))
          }
        </ul>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2026 Mehtab Ansari | mehtab@gmail.com</p>
      </div>
    </footer>
  );
}; 
