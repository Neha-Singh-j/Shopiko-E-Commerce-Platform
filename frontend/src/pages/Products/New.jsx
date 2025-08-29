import React, { useState } from "react";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
function NewProduct() {
  const [formData, setFormData] = useState({
    name: "",
    img: "",
    price: "",
    desc: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <Navbar />

      <div className="container py-5" style={{ marginTop: "80px" }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div
              className="card border-0 shadow"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <div
                className="card-header py-3"
                style={{
                  background: "linear-gradient(to right, #6a11cb 0%, #fc4a1a 100%)",
                }}
              >
                <h3 className="text-white mb-0 text-center">Add New Product</h3>
              </div>

              <div className="card-body p-4">
                <form
                  action="/products"
                  method="POST"
                  className="needs-validation"
                  noValidate
                >
                  {/* Name */}
                  <div className="mb-4">
                    <label
                      htmlFor="naam"
                      className="form-label fw-bold"
                      style={{ color: "#6a11cb" }}
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control py-2"
                      name="name"
                      id="naam"
                      placeholder="Name of Product"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ borderColor: "#d1d1d1" }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div
                      className="invalid-feedback"
                      style={{ color: "#fc4a1a" }}
                    >
                      Please provide a valid product name.
                    </div>
                  </div>

                  {/* Image */}
                  <div className="mb-4">
                    <label
                      htmlFor="imge"
                      className="form-label fw-bold"
                      style={{ color: "#6a11cb" }}
                    >
                      Image URL:
                    </label>
                    <input
                      type="text"
                      className="form-control py-2"
                      name="img"
                      id="imge"
                      placeholder="Image URL of Product"
                      value={formData.img}
                      onChange={handleChange}
                      required
                      style={{ borderColor: "#d1d1d1" }}
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div
                      className="invalid-feedback"
                      style={{ color: "#fc4a1a" }}
                    >
                      Please provide a valid image URL.
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <label
                      htmlFor="paisa"
                      className="form-label fw-bold"
                      style={{ color: "#6a11cb" }}
                    >
                      Price:
                    </label>
                    <div className="input-group">
                      <span
                        className="input-group-text py-2"
                        style={{
                          backgroundColor: "#f3e5ff",
                          color: "#6a11cb",
                          fontWeight: 600,
                        }}
                      >
                        Rs.
                      </span>
                      <input
                        className="form-control py-2"
                        type="number"
                        step="any"
                        name="price"
                        id="paisa"
                        placeholder="Price of Product"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        style={{ borderColor: "#d1d1d1" }}
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div
                        className="invalid-feedback"
                        style={{ color: "#fc4a1a" }}
                      >
                        Please provide a valid price.
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <label
                      htmlFor="des"
                      className="form-label fw-bold"
                      style={{ color: "#6a11cb" }}
                    >
                      Description:
                    </label>
                    <textarea
                      className="form-control py-2"
                      name="desc"
                      id="des"
                      rows="5"
                      placeholder="Description of Product"
                      value={formData.desc}
                      onChange={handleChange}
                      required
                      style={{ borderColor: "#d1d1d1" }}
                    ></textarea>
                    <div className="valid-feedback">Looks good!</div>
                    <div
                      className="invalid-feedback"
                      style={{ color: "#fc4a1a" }}
                    >
                      Please provide a valid description.
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                    <button
                      type="submit"
                      className="btn px-4 py-2 fw-bold"
                      style={{
                        background: "linear-gradient(to right, #6a11cb, #fc4a1a)",
                        color: "white",
                        border: "none",
                      }}
                    >
                      Add Product
                    </button>
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

export default NewProduct;
