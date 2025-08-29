import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Flash from "../../components/Flash";
import Footer from "../../components/Footer";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    gender: "",
    role: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Account created successfully!");
        window.location.href = "/login";
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <Flash />

      <div className="container" style={{ marginTop: "100px", marginBottom: "100px" }}>
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">
            <div
              className="card border-0 shadow-lg"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <div
                className="card-header py-3"
                style={{
                  background: "linear-gradient(to right, #6a11cb 0%, #fc4a1a 100%)",
                }}
              >
                <h2
                  className="text-center text-white mb-0"
                  style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif" }}
                >
                  Join Shopiko!
                </h2>
              </div>

              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label fw-semibold">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control py-2"
                      name="username"
                      id="username"
                      placeholder="Choose your username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        paddingLeft: "15px",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control py-2"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        paddingLeft: "15px",
                      }}
                    />
                  </div>

                  {/* Gender */}
                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label fw-semibold">
                      Gender
                    </label>
                    <input
                      type="text"
                      className="form-control py-2"
                      name="gender"
                      id="gender"
                      placeholder="Your gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        paddingLeft: "15px",
                      }}
                    />
                  </div>

                  {/* Role */}
                  <div className="mb-4">
                    <p className="fw-semibold mb-2">I want to register as:</p>
                    <div className="d-flex gap-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="buyer"
                          value="buyer"
                          checked={formData.role === "buyer"}
                          onChange={handleChange}
                          required
                          style={{ border: "2px solid #6a11cb" }}
                        />
                        <label className="form-check-label" htmlFor="buyer">
                          Buyer
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="seller"
                          value="seller"
                          checked={formData.role === "seller"}
                          onChange={handleChange}
                          style={{ border: "2px solid #6a11cb" }}
                        />
                        <label className="form-check-label" htmlFor="seller">
                          Seller
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label fw-semibold">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control py-2"
                      name="password"
                      id="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        paddingLeft: "15px",
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <div className="d-grid mb-3">
                    <button
                      type="submit"
                      className="btn btn-lg text-white fw-bold py-2"
                      style={{
                        background: "linear-gradient(to right, #6a11cb 0%, #fc4a1a 100%)",
                        borderRadius: "8px",
                        border: "none",
                      }}
                    >
                      Create Account
                    </button>
                  </div>

                  {/* Redirect to login */}
                  <div className="text-center pt-2">
                    <p className="mb-0" style={{ color: "#666" }}>
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        style={{
                          color: "#fc4a1a",
                          textDecoration: "none",
                          fontWeight: "600",
                        }}
                      >
                        Login now
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
