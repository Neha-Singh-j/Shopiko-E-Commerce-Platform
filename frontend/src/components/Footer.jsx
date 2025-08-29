import React from "react";

const Footer = () => {
  return (
    <footer
      className="pt-5 pb-4"
      style={{ background: "linear-gradient(to right, #4a148c, #880e4f)" }}
    >
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-lg-4 mb-4">
            <h3 className="gradient-text mb-3 fw-bold">Shopiko</h3>
            <p className="gradient-text-light">
              Your vibrant marketplace for unique finds
            </p>
          </div>

          {/* Company Links */}
          <div className="col-md-4 col-lg-2 mb-4">
            <h5 className="text-uppercase mb-3 gradient-text fw-bold">
              Company
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/about" className="gradient-link text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/feedback"
                  className="gradient-link text-decoration-none"
                >
                  Feedback
                </a>
              </li>
              <li>
                <a href="/events" className="gradient-link text-decoration-none">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-4 col-lg-2 mb-4">
            <h5 className="text-uppercase mb-3 gradient-text fw-bold">
              Support
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/account"
                  className="gradient-link text-decoration-none"
                >
                  Account
                </a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="gradient-link text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="gradient-link text-decoration-none"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-4 mb-4">
            <h5 className="text-uppercase mb-3 gradient-text fw-bold">
              Contact Info
            </h5>
            <address className="gradient-text-light">
              <i className="fas fa-map-marker-alt me-2"></i> 123 Market Street
              <br />
              <i className="fas fa-phone me-2 mt-2"></i> +1 (555) 987-6543
              <br />
              <i className="fas fa-envelope me-2 mt-2"></i> support@shopiko.com
            </address>
          </div>
        </div>

        <hr
          className="my-4"
          style={{
            background: "linear-gradient(90deg, #ff8a00, #fc4a1a)",
            border: "none",
            height: "2px",
          }}
        />

        {/* Social Media */}
        <div className="d-flex justify-content-center mb-4">
          <a href="#" className="mx-3 fs-4 gradient-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="mx-3 fs-4 gradient-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="mx-3 fs-4 gradient-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="mx-3 fs-4 gradient-link">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="gradient-text-light mb-0">
              &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
              by Shopiko.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
