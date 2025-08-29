import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";


import c1 from "../assests/c1.png";
import c2 from "../assests/c2.png";
import c3 from "../assests/c3.png";

import bata from "../assests/bata.png";
import nivea from "../assests/nivea.png";
import himalaya from "../assests/himalaya.png";
import mi from "../assests/mi.png";
import wildstone from "../assests/wildstone.png";
import mamaearth from "../assests/mamaearth.png";
import plum from "../assests/plum.png";
import oppo from "../assests/oppo.png";

import user1 from "../assests/user1.png";
import user2 from "../assests/user2.png";
import user3 from "../assests/user3.png";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />

      {/* Bootstrap Carousel */}
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="Tech Products" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Premium Tech Products</h2>
              <p>Discover the latest in technology with our curated collection of gadgets and devices.</p>
              <a href="/products" className="btn" style={{ background: "#ffd700", color: "#2c0b5e", fontWeight: 600 }}>Shop Now</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src={c2} className="d-block w-100" alt="Special Offers" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Exclusive Discounts</h2>
              <p>Limited time offers on our most popular products. Don't miss out!</p>
              <a href="/products?discount=true" className="btn" style={{ background: "#ffd700", color: "#2c0b5e", fontWeight: 600 }}>View Deals</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img src={c3} className="d-block w-100" alt="New Arrivals" />
            <div className="carousel-caption d-none d-md-block">
              <h2>New Arrivals</h2>
              <p>Be the first to experience our newest products.</p>
              <a href="/products?new=true" className="btn" style={{ background: "#ffd700", color: "#2c0b5e", fontWeight: 600 }}>Explore</a>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Categories Section */}
      <section className="categories-section py-5" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: "#6a11cb", fontFamily: "'Arial Rounded MT Bold', sans-serif" }}>Shop By Category</h2>

          <div className="row g-4">
            {[
              { icon: "fas fa-tshirt", color: "#6a11cb", bg: "#f3e5ff", title: "Ethnic Wear" },
              { icon: "fas fa-vest", color: "#fc4a1a", bg: "#ffe5e5", title: "Western Dresses" },
              { icon: "fas fa-male", color: "#2c7be5", bg: "#e5f0ff", title: "Menswear" },
              { icon: "fas fa-shoe-prints", color: "#ff7b25", bg: "#fff2e5", title: "Footwear" },
              { icon: "fas fa-home", color: "#00b159", bg: "#e5ffe7", title: "Home Decor" },
              { icon: "fas fa-spa", color: "#e83e8c", bg: "#ffe5f7", title: "Beauty" },
              { icon: "fas fa-rings", color: "#17a2b8", bg: "#e5f9ff", title: "Accessories" },
              { icon: "fas fa-shopping-basket", color: "#ffc107", bg: "#fff8e5", title: "Grocery" },
            ].map((cat, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="category-card">
                  <div className="category-icon" style={{ backgroundColor: cat.bg }}>
                    <i className={cat.icon} style={{ color: cat.color }}></i>
                  </div>
                  <h5 className="category-title">{cat.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section
  className="brands-section py-4"
  style={{ background: "linear-gradient(to right, #6a11cb 0%, #fc4a1a 100%)" }}
>
  <div className="container">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h3 className="text-white mb-0">Original Brands</h3>
    </div>

    <div className="brands-slider">
      <div className="brands-track">
        {[
          { img: bata, name: "Bata" },
          { img: nivea, name: "Nivea" },
          { img: himalaya, name: "Himalaya" },
          { img: mi, name: "MI" },
          { img: wildstone, name: "Wildstone" },
          { img: mamaearth, name: "Mamaearth" },
          { img: plum, name: "Plum" },
          { img: oppo, name: "Oppo" },
        ].map((brand, index) => (
          <div className="brand-logo" key={index}>
            <img src={brand.img} alt={brand.name} />
            <p className="text-white mt-2 mb-0">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Testimonials */}
      <section className="testimonials py-5" style={{ background: "linear-gradient(to right, #f9f9f9 0%, #ffffff 100%)" }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ fontFamily: "'Arial Rounded MT Bold', sans-serif", color: "#6a11cb" }}>What Our Customers Say</h2>

          <div className="row">
            {[
              { img: user1, name: "Rahul Sharma", rating: 5, text: "The iPad I purchased was exactly as described and arrived sooner than expected. Excellent service!" },
              { img: user2, name: "Priya Patel", rating: 5, text: "Great prices and fast shipping. The iPhone I bought works perfectly and was brand new as promised." },
              { img: user3, name: "Amrita Singh", rating: 4, text: "Good selection of products. Would love to see more accessories available in the future." },
            ].map((t, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 testimonial-card">
                  <div className="card-body text-center py-4">
                    <img src={t.img} className="rounded-circle mb-3 testimonial-img" width="100" height="100" alt="Customer" />
                    <h5 className="card-title" style={{ color: "#6a11cb" }}>{t.name}</h5>
                    <div className="testimonial-rating mb-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={i < t.rating ? "fas fa-star" : "far fa-star"}></i>
                      ))}
                    </div>
                    <p className="card-text px-3">"{t.text}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
