import React from "react";

function Navbar({ currentUser }) {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(to right, #6a11cb 0%, #fc4a1a 100%)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container">
        {/* Brand */}
        <a
          className="navbar-brand text-white fw-bold"
          href="/products"
          style={{
            fontFamily: "'Arial Rounded MT Bold', 'Arial', sans-serif",
            textShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          <i
            className="fas fa-bag-shopping me-2"
            style={{ fontSize: "1.7rem", color: "#ffd700" }}
          ></i>
          Shopiko
        </a>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link text-white px-3"
                aria-current="page"
                href="/"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-white px-3"
                href="/products"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Products
              </a>
            </li>

            {/* Show only for sellers */}
            {currentUser && currentUser.role === "seller" && (
              <li className="nav-item">
                <a
                  className="nav-link text-white px-3"
                  href="/products/new"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  New Product
                </a>
              </li>
            )}
          </ul>

          {/* Right side */}
          <div className="navbar-nav ms-auto">
            {!currentUser ? (
              <>
                <a
                  href="/login"
                  className="nav-link text-white px-3 fw-semibold"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="nav-link px-3 fw-semibold"
                  style={{ color: "#ffd700", fontFamily: "Arial, sans-serif" }}
                >
                  Register
                </a>
              </>
            ) : (
              <>
                <span
                  className="nav-link text-white px-3 text-capitalize"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  👋 Hello {currentUser.username}
                </span>

                <a
                  href="/user/cart"
                  className="nav-link text-white px-3 position-relative"
                >
                  <i
                    className="fas fa-cart-shopping fs-5"
                    style={{ color: "#ffd700" }}
                  ></i>
                  {currentUser.cart?.length > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                      style={{
                        backgroundColor: "#ffd700",
                        color: "#2c0b5e",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {currentUser.cart.length}
                    </span>
                  )}
                </a>

                <a
                  href="/logout"
                  className="nav-link px-3 fw-semibold"
                  style={{ color: "#ffd700", fontFamily: "Arial, sans-serif" }}
                >
                  Logout
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
                