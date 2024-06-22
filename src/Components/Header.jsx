/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(0,40,92)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home" style={{ color: "white", fontWeight: "bold" }}>Home</a>
      <a href="#about" style={{ color: "white", fontWeight: "bold" }}>About</a>
      <a href="#portfolio" style={{ color: "white", fontWeight: "bold" }}>Portfolio</a>
      <a href="#footer" style={{ color: "white", fontWeight: "bold" }}>Contact</a>
    </div>
  );
};

export default Header;
