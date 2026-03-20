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
          © 2023 Cloud Tek Computing LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}