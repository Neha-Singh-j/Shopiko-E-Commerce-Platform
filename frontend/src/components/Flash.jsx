import React from "react";

const Flash = ({ success, error }) => {
  return (
    <div>
      {success && success.length > 0 && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
          style={{ marginTop: "100px" }}
        >
          <strong>{success}</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      {error && error.length > 0 && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
          style={{ marginTop: "100px" }}
        >
          <strong>{error}</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
};

export default Flash;
