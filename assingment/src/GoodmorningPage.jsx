import React, { useState } from "react";

export default function GoodMorningPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div  style={{
      height: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f4f6ff",
    }}>
      <div style={{
        padding: "25px",
        width: "350px",
        borderRadius: "12px",
        background: "white",
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center",color:"black" }}>🌅 Good Morning</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", margin: "8px 0", padding: "10px" }}
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
            required
            style={{ width: "100%", margin: "8px 0", padding: "10px" }}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: "100%", margin: "8px 0", padding: "10px" }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              background: "#4a63e7",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
