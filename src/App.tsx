import React, { useState } from "react";

const items = [
  {
    id: 1,
    title: "Atomic Redster Skis",
    price: 180,
    images: [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&w=800&q=80",
    ],
    desc: "Excellent condition, 1 season use",
  },
  {
    id: 2,
    title: "Salomon Ski Boots",
    price: 95,
    images: [
      "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
    ],
    desc: "Comfortable, great fit",
  },
];

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selected, setSelected] = useState<any>(null);
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div style={styles.phone}>
      {screen === "home" && (
        <>
          <h2 style={styles.logo}>Ski-nted</h2>

          <input placeholder="Search gear..." style={styles.search} />

          <div style={styles.grid}>
            {items.map((item) => (
              <div
                key={item.id}
                style={styles.card}
                onClick={() => {
                  setSelected(item);
                  setImgIndex(0);
                  setScreen("product");
                }}
              >
                <img src={item.images[0]} style={styles.img} />
                <p>{item.title}</p>
                <b>£{item.price}</b>
              </div>
            ))}
          </div>
        </>
      )}

      {screen === "product" && selected && (
        <>
          <button onClick={() => setScreen("home")}>← Back</button>

          <img
            src={selected.images[imgIndex]}
            style={styles.bigImg}
            onClick={() =>
              setImgIndex((imgIndex + 1) % selected.images.length)
            }
          />

          <h2>{selected.title}</h2>
          <p>{selected.desc}</p>
          <h3>£{selected.price}</h3>

          <button style={styles.buy}>Buy</button>
          <button style={styles.msg}>Message</button>
        </>
      )}

      {screen === "sell" && (
        <>
          <h2>Sell your gear</h2>
          <input placeholder="Title" style={styles.input} />
          <input placeholder="Price" style={styles.input} />
          <button style={styles.buy}>List Item</button>
        </>
      )}

      {screen === "profile" && (
        <>
          <h2>Profile</h2>
          <p>Your listings</p>
        </>
      )}

      <div style={styles.nav}>
        <button onClick={() => setScreen("home")}>Buy</button>
        <button onClick={() => setScreen("sell")}>Sell</button>
        <button onClick={() => setScreen("profile")}>Profile</button>
      </div>
    </div>
  );
}

const styles: any = {
  phone: {
    maxWidth: 390,
    margin: "0 auto",
    background: "#f8fafc",
    minHeight: "100vh",
    padding: 15,
    boxSizing: "border-box",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  search: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
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
    padding: 10,
    borderRadius: 12,
  },
  img: {
    width: "100%",
    height: 120,
    objectFit: "cover",
    borderRadius: 8,
  },
  bigImg: {
    width: "100%",
    borderRadius: 10,
  },
  buy: {
    width: "100%",
    padding: 12,
    background: "#0ea5e9",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    marginTop: 10,
  },
  msg: {
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
