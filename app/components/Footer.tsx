"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px", color: "#ffffff" }}>
          © {new Date().getFullYear()} Cloud Tek Computing LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}