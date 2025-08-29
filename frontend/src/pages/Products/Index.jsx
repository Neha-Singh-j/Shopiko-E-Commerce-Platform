import React from "react";
import { Navigate } from "react-router-dom";  // ⬅️ add this
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function ProductsIndex({ products = [], currentUser }) {
  // ⬅️ check if user is logged in
  const isLoggedIn = localStorage.getItem("token"); 

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <Navbar />

      <div className="container py-5" style={{ marginTop: "80px" }}>
        <h1
          className="text-center mb-5 gradient-text"
          style={{
            background: "linear-gradient(to right, #6a11cb, #fc4a1a)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: 700,
          }}
        >
          Featured Products
        </h1>

        <div className="row g-4">
          {products.map((item) => (
            <div key={item._id} className="col-lg-4 col-md-6">
              <div
                className="card product-card h-100 border-0 shadow-sm"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                }}
              >
                {/* Image + Wishlist Button */}
                <div className="position-relative">
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <button
                    className="btn like-btn position-absolute top-0 end-0 m-2"
                    data-product-id={item._id}
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {currentUser && currentUser.wishlist?.includes(item._id) ? (
                      <i
                        className="fa-solid fa-heart"
                        style={{ color: "#fc4a1a", fontSize: "1.2rem" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-regular fa-heart"
                        style={{ color: "#6a11cb", fontSize: "1.2rem" }}
                      ></i>
                    )}
                  </button>
                </div>

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                  <div className="mb-3">
                    <h3 className="card-title fw-bold" style={{ color: "#2c0b5e" }}>
                      {item.name}
                    </h3>
                    <p className="card-text text-muted">
                      {item.desc.length > 60
                        ? item.desc.substring(0, 60) + "..."
                        : item.desc}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0 fw-bold" style={{ color: "#fc4a1a" }}>
                        Rs. {item.price}
                      </h5>
                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={{ backgroundColor: "#f3e5ff", color: "#6a11cb" }}
                      >
                        {item.instock} in stock
                      </span>
                    </div>
                    <a
                      href={`/products/${item._id}`}
                      className="btn w-100 py-2 fw-bold"
                      style={{
                        background: "linear-gradient(to right, #6a11cb, #fc4a1a)",
                        color: "white",
                        border: "none",
                      }}
                    >
                      View Product
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductsIndex;
