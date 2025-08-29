import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function ShowProduct({ foundProduct, currentUser }) {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container mt-5 pt-4">
        <div className="row g-4">
          {/* Product Card */}
          <div className="col-lg-6 col-md-12">
            <div
              className="card shadow-lg border-0"
              style={{ borderRadius: "15px", borderTop: "5px solid #6a11cb" }}
            >
              <div className="text-center p-3">
                <img
                  src={foundProduct.img}
                  className="img-fluid rounded-3"
                  style={{ maxHeight: "350px", objectFit: "contain" }}
                  alt={foundProduct.name}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title text-center fw-bold text-primary">
                  {foundProduct.name}
                </h3>
                <h5 className="text-success fw-bold my-3">
                  Rs: {foundProduct.price}
                </h5>
                <p className="card-text mb-4 text-muted">
                  {foundProduct.desc}
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <a href="#" className="btn btn-success px-4 py-2 fw-bold">
                    Buy Now
                  </a>
                  <form action={`/user/${foundProduct._id}/add`} method="POST">
                    <button className="btn btn-primary px-4 py-2 fw-bold">
                      Add to Cart
                    </button>
                  </form>
                  {currentUser && currentUser.role === "seller" && (
                    <>
                      <a
                        href={`/products/${foundProduct._id}/edit`}
                        className="btn btn-warning px-4 py-2 fw-bold"
                      >
                        Edit
                      </a>
                      <form
                        action={`/products/${foundProduct._id}?_method=DELETE`}
                        method="POST"
                      >
                        <button className="btn btn-danger px-4 py-2 fw-bold">
                          Delete
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="col-lg-6 col-md-12">
            {/* Reviews List */}
            <div
              className="card shadow-lg border-0 mb-4"
              style={{ borderRadius: "15px", borderTop: "5px solid #fc4a1a" }}
            >
              <div
                className="card-header text-white py-3"
                style={{
                  borderRadius: "15px 15px 0 0",
                  background: "linear-gradient(to right, #fc4a1a, #ff6f61)",
                }}
              >
                <h4 className="mb-0 fw-bold">
                  <i className="fas fa-comments me-2"></i>Customer Reviews
                </h4>
              </div>
              <div className="card-body p-4">
                {foundProduct.reviews.length > 0 ? (
                  foundProduct.reviews.map((review) => (
                    <div
                      key={review._id}
                      className="card mb-4 border-0 shadow-sm"
                      style={{
                        borderRadius: "12px",
                        borderLeft: "4px solid #6a11cb",
                      }}
                    >
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="star-rating-display">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <i
                                key={i}
                                className={`fas fa-star ${
                                  i <= review.rating
                                    ? "text-warning"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                            <span className="ms-2 fw-bold">
                              {review.rating}.0
                            </span>
                          </div>

                          {currentUser &&
                            (currentUser._id === review.author ||
                              currentUser.role === "admin") && (
                              <form
                                action={`/products/${foundProduct._id}/review/${review._id}?_method=DELETE`}
                                method="POST"
                              >
                                <button
                                  type="submit"
                                  className="btn btn-sm btn-outline-danger"
                                >
                                  Delete
                                </button>
                              </form>
                            )}
                        </div>
                        <p className="mb-3">{review.comment}</p>
                        {review.createdAt && (
                          <small className="text-muted">
                            <i className="far fa-clock me-1"></i>
                            {new Date(review.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </small>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4">
                    <i className="fas fa-comment-slash text-muted fa-3x mb-3"></i>
                    <p className="text-muted fw-bold">
                      No reviews yet. Be the first to review!
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Review Form */}
            <div
              className="card shadow-lg border-0"
              style={{ borderRadius: "15px", borderTop: "5px solid #6a11cb" }}
            >
              <div
                className="card-header text-white py-3"
                style={{
                  borderRadius: "15px 15px 0 0",
                  background: "linear-gradient(to right, #6a11cb, #9b59b6)",
                }}
              >
                <h4 className="mb-0 fw-bold">
                  <i className="fas fa-pen-alt me-2"></i>Leave Your Review
                </h4>
              </div>
              <div className="card-body p-4">
                <form action={`/products/${foundProduct._id}/review`} method="POST">
                  {/* Rating */}
                  <div className="mb-4">
                    <label className="form-label fw-bold mb-3">Rating</label>
                    <fieldset className="starability-basic">
                      <input
                        type="radio"
                        id="no-rate"
                        className="input-no-rate"
                        name="rating"
                        value="0"
                        defaultChecked
                        aria-label="No rating."
                      />
                      {[1, 2, 3, 4, 5].map((i) => (
                        <React.Fragment key={i}>
                          <input
                            type="radio"
                            id={`rate-${i}`}
                            name="rating"
                            value={i}
                          />
                          <label htmlFor={`rate-${i}`}>
                            {i} {i === 1 ? "star" : "stars"}
                          </label>
                        </React.Fragment>
                      ))}
                    </fieldset>
                  </div>

                  {/* Comment */}
                  <div className="mb-4">
                    <label htmlFor="comment" className="form-label fw-bold">
                      Your Review
                    </label>
                    <textarea
                      className="form-control p-3"
                      name="comment"
                      id="comment"
                      rows="4"
                      required
                      style={{ borderRadius: "10px" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 fw-bold"
                  >
                    <i className="fas fa-paper-plane me-2"></i>Submit Review
                  </button>
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

export default ShowProduct;
