import React from "react";

const UnderConstruction = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>yanlima.com</div>
      <h1 style={styles.title}>Estamos construindo algo incrível.</h1>
      <p style={styles.text}>Volte em breve para ver as novidades!</p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Helvetica Neue', sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#333",
    height: "70vh",
    margin: 0,
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.25rem",
    color: "#000",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    color: "#666",
  },
};

export default UnderConstruction;
