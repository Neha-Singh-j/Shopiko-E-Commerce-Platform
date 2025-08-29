import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Flash from "../../components/Flash";
import Footer from "../../components/Footer";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Fetch cart from backend (dummy API for now)
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/cart", {
          credentials: "include",
        });
        const data = await res.json();

        if (data.success) {
          setCart(data.cart);
          setTotalAmount(data.totalAmount);
        }
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };

    fetchCart();
  }, []);

  // Remove item from cart
  const removeItem = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/cart/remove/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();

      if (data.success) {
        setCart(cart.filter((item) => item._id !== id));
        setTotalAmount(totalAmount - data.removedItem.price);
      }
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <Flash />

      <section className="container py-4" style={{ marginTop: "80px" }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1
            className="display-5 fw-bold gradient-text"
            style={{
              background: "linear-gradient(to right, #6a11cb, #fc4a1a)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            MY CART
          </h1>
          <span
            className="badge rounded-pill px-3 py-2"
            style={{
              background: "linear-gradient(to right, #6a11cb, #fc4a1a)",
              color: "white",
            }}
          >
            {cart.length} Items
          </span>
        </div>

        <div className="row">
          {/* Cart Items */}
          <div className="col-lg-8">
            {cart.map((item) => (
              <div
                className="card mx-auto mb-4 border-0 shadow-sm"
                style={{ borderRadius: "12px", overflow: "hidden" }}
                key={item._id}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      className="img-fluid h-100"
                      src={item.img}
                      alt={item.name}
                      style={{ objectFit: "cover", minHeight: "180px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start">
                        <h5
                          className="card-title fw-bold mb-2"
                          style={{ color: "#2c0b5e" }}
                        >
                          {item.name}
                        </h5>
                        <span
                          className="fs-5 fw-bold"
                          style={{ color: "#fc4a1a" }}
                        >
                          ${item.price}
                        </span>
                      </div>
                      <p className="card-text text-muted mb-3">{item.desc}</p>
                      <div className="d-flex justify-content-end">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeItem(item._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="col-lg-4">
            <div
              className="card border-0 shadow-sm"
              style={{ borderRadius: "12px" }}
            >
              <div
                className="card-header py-3"
                style={{
                  background: "linear-gradient(to right, #6a11cb, #fc4a1a)",
                  color: "white",
                }}
              >
                <h5 className="mb-0 fw-bold">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {cart.map((item) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center border-0 py-2"
                      key={item._id}
                    >
                      <span style={{ color: "#2c0b5e" }}>{item.name}</span>
                      <span
                        className="fw-bold"
                        style={{ color: "#fc4a1a" }}
                      >
                        ${item.price}
                      </span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2">
                    <span className="fw-bold" style={{ color: "#2c0b5e" }}>
                      Total Amount
                    </span>
                    <span
                      className="fw-bold fs-5"
                      style={{ color: "#6a11cb" }}
                    >
                      ${totalAmount}
                    </span>
                  </li>
                </ul>
                <button
                  className="btn w-100 mt-3 py-2 fw-bold"
                  style={{
                    background: "linear-gradient(to right, #6a11cb, #fc4a1a)",
                    color: "white",
                    border: "none",
                  }}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
