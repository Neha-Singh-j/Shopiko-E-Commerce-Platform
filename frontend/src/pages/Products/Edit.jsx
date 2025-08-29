import React, { useState } from "react";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
function EditProduct({ foundProduct, onSave }) {
  const [formData, setFormData] = useState({
    name: foundProduct?.name || "",
    img: foundProduct?.img || "",
    price: foundProduct?.price || "",
    desc: foundProduct?.desc || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call API or parent callback
    if (onSave) {
      onSave({ ...formData, _id: foundProduct._id });
    } else {
      console.log("Submit data:", formData);
    }
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
                <h3 className="text-white mb-0 text-center">Edit Product</h3>
              </div>
              <div className="card-body p-4">
                <form
                  onSubmit={handleSubmit}
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
                  </div>

                  {/* Image URL */}
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
                        name="price"
                        id="paisa"
                        placeholder="Price of Product"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        style={{ borderColor: "#d1d1d1" }}
                      />
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
                  </div>

                  {/* Buttons */}
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                    <a
                      href={`/products/${foundProduct._id}`}
                      className="btn btn-outline-secondary me-md-2 px-4 py-2"
                    >
                      Cancel
                    </a>
                    <button
                      type="submit"
                      className="btn px-4 py-2 fw-bold"
                      style={{
                        background: "linear-gradient(to right, #6a11cb, #fc4a1a)",
                        color: "white",
                        border: "none",
                      }}
                    >
                      Save Changes
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

export default EditProduct;
