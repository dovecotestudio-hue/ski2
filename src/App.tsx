import React, { useState } from "react";

const items = [
  {
    id: 1,
    title: "Atomic Redster Skis",
    price: "£180",
    location: "Birmingham",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Salomon Ski Boots",
    price: "£95",
    location: "Leeds",
    image:
      "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Oakley Goggles",
    price: "£60",
    location: "Manchester",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
  },
];

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selected, setSelected] = useState<any>(null);

  return (
    <div style={styles.app}>
      {/* HEADER */}
      <div style={styles.header}>
        <h2 style={{ margin: 0 }}>Ski-nted</h2>
        <span>🔔</span>
      </div>

      {/* SEARCH */}
      <div style={styles.searchWrap}>
        <input placeholder="Search skis, boots, jackets..." style={styles.search} />
      </div>

      {/* HOME */}
      {screen === "home" && (
        <>
          <div style={styles.categories}>
            {["Skis", "Boots", "Clothing", "Safety"].map((c) => (
              <div key={c} style={styles.cat}>{c}</div>
            ))}
          </div>

          <h3 style={styles.section}>Recommended</h3>

          <div style={styles.grid}>
            {items.map((item) => (
              <div
                key={item.id}
                style={styles.card}
                onClick={() => {
                  setSelected(item);
                  setScreen("product");
                }}
              >
                <img src={item.image} style={styles.image} />
                <div style={styles.cardBody}>
                  <p style={styles.title}>{item.title}</p>
                  <p style={styles.price}>{item.price}</p>
                  <p style={styles.meta}>{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* PRODUCT */}
      {screen === "product" && selected && (
        <div>
          <button onClick={() => setScreen("home")}>← Back</button>

          <img src={selected.image} style={styles.productImg} />

          <h2>{selected.title}</h2>
          <h3>{selected.price}</h3>
          <p>{selected.location}</p>

          <button style={styles.primary}>Buy now</button>
          <button style={styles.secondary}>Message seller</button>
        </div>
      )}

      {/* SELL */}
      {screen === "sell" && (
        <div>
          <h2>Sell your gear</h2>
          <input placeholder="Title" style={styles.input} />
          <input placeholder="Price" style={styles.input} />
          <button style={styles.primary}>List item</button>
        </div>
      )}

      {/* PROFILE */}
      {screen === "profile" && (
        <div>
          <h2>Your profile</h2>
          <p>Listings, reviews, stats</p>
        </div>
      )}

      {/* NAV */}
      <div style={styles.nav}>
        <button onClick={() => setScreen("home")}>🏠</button>
        <button onClick={() => setScreen("sell")}>➕</button>
        <button onClick={() => setScreen("profile")}>👤</button>
      </div>
    </div>
  );
}

const styles: any = {
  app: {
    maxWidth: 420,
    margin: "0 auto",
    padding: 15,
    fontFamily: "Arial",
    background: "#f1f5f9",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchWrap: {
    margin: "10px 0",
  },
  search: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "1px solid #ccc",
  },
  categories: {
    display: "flex",
    gap: 10,
    marginBottom: 10,
  },
  cat: {
    background: "#fff",
    padding: "8px 12px",
    borderRadius: 10,
    fontSize: 12,
  },
  section: {
    marginTop: 10,
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
  cardBody: {
    padding: 8,
  },
  title: {
    fontSize: 13,
    margin: 0,
  },
  price: {
    fontWeight: "bold",
    margin: "4px 0",
  },
  meta: {
    fontSize: 11,
    color: "#555",
  },
  productImg: {
    width: "100%",
    borderRadius: 10,
  },
  primary: {
    width: "100%",
    padding: 12,
    background: "#0ea5e9",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    marginTop: 10,
  },
  secondary: {
    width: "100%",
    padding: 12,
    background: "#e5e7eb",
    border: "none",
    borderRadius: 10,
    marginTop: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    border: "1px solid #ccc",
  },
  nav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#fff",
    display: "flex",
    justifyContent: "space-around",
    padding: 10,
    borderTop: "1px solid #ddd",
  },
};
