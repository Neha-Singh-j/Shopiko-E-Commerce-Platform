import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/app.css";
// import "../css/star.css";

function Header() {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />

      {/* Custom CSS */}
      <link rel="stylesheet" href="/css/app.css" />
      <link rel="stylesheet" href="/css/star.css" />

      {/* Axios */}
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

      {/* Font Awesome */}
      <script
        src="https://kit.fontawesome.com/2616bc9d69.js"
        crossOrigin="anonymous"
      ></script>

      <title>Shopiko</title>
    </head>
  );
}

export default Header;
