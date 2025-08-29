import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Flash from "../components/Flash";
import Footer from "../components/Footer";

const Error = ({ err }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Flash />

      <div className="container" style={{ marginTop: "120px" }}>
        <div className="alert alert-danger" role="alert">
          {err}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Error;
