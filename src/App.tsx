import React, { useState } from "react";

const items = [
  {
    id: 1,
    title: "Atomic Redster Skis",
    price: "£180",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Salomon Ski Boots",
    price: "£95",
    image:
      "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=800&q=80",
  },
];

export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <div style={styles.wrapper}>
      <div style={styles.phone}>
        {screen === "home" && (
          <>
            <h2 style={styles.logo}>Ski-nted</h2>

            <input placeholder="Search ski gear..." style={styles.search} />

            <div style={styles.grid}>
              {items.map((item) => (
                <div key={item.id} style={styles.card}>
                  <img src={item.image} style={styles.image} />
                  <div style={styles.cardText}>
                    <p>{item.title}</p>
                    <b>{item.price}</b>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {screen === "sell" && (
          <div style={styles.page}>
            <h2>Sell your gear</h2>
            <input placeholder="Item name" style={styles.input} />
            <input placeholder="Price" style={styles.input} />
            <button style={styles.primary}>List item</button>
          </div>
        )}

        {screen === "profile" && (
          <div style={styles.page}>
            <h2>Your profile</h2>
            <p>Listings, reviews, stats</p>
          </div>
        )}

        <div style={styles.nav}>
          <button onClick={() => setScreen("home")}>Buy</button>
          <button onClick={() => setScreen("sell")}>Sell</button>
          <button onClick={() => setScreen("profile")}>Me</button>
        </div>
      </div>
    </div>
  );
}

const styles: any = {
  wrapper: {
    background: "#cbd5e1",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  phone: {
    width: 390,
    background: "#f8fafc",
    borderRadius: 30,
    padding: 15,
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    position: "relative",
    overflow: "hidden",
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
  },
  search: {
    width: "100%",
    padding: 10,
    borderRadius: 12,
    border: "1px solid #ccc",
    margin: "10px 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  card: {
    background: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
    objectFit: "cover",
  },
  cardText: {
    padding: 8,
  },
  nav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#fff",
    display: "flex",
    justifyContent: "space-around",
    padding: 10,
    borderTop: "1px solid #ddd",
  },
  page: {
    paddingBottom: 60,
  },
  input: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    border: "1px solid #ccc",
  },
  primary: {
    width: "100%",
    padding: 12,
    marginTop: 10,
    background: "#0ea5e9",
    color: "#fff",
    border: "none",
    borderRadius: 10,
  },
};
