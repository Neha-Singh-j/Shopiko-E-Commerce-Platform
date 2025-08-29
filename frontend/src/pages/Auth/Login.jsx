import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Flash from "../../components/Flash";
import Footer from "../../components/Footer";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        window.location.href = "/"; // redirect after login
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <Flash />

      <div
        className="login-page"
        style={{
          backgroundColor: "linear-gradient(135deg, #6a11cb 0%, #fc4a1a 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px 0",
        }}
      >
        <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div
                className="card border-0 shadow-lg"
                style={{ borderRadius: "15px", overflow: "hidden", background: "rgba(255,255,255,0.9)" }}
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
                    Welcome Back!
                  </h2>
                </div>

                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="username" className="form-label fw-semibold">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control py-2"
                        id="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #ddd",
                          paddingLeft: "15px",
                        }}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="password" className="form-label fw-semibold">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control py-2"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #ddd",
                          paddingLeft: "15px",
                        }}
                      />
                    </div>

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
                        Login
                      </button>
                    </div>

                    <div className="text-center pt-2">
                      <p className="mb-0" style={{ color: "#666" }}>
                        Don't have an account?{" "}
                        <Link
                          to="/signup"
                          style={{
                            color: "#fc4a1a",
                            textDecoration: "none",
                            fontWeight: "600",
                          }}
                        >
                          Sign up now
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
