import React from "react";

function EmailInput({ email, setEmail, darkMode }) {
  const styles = {
    input: {
      display: "block",
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: darkMode ? "#444" : "#f0f0f0",
      color: darkMode ? "#fff" : "#333",
    },
    label: {
      display: "block",
      marginBottom: "10px",
      fontWeight: "bold",
      color: darkMode ? "#fff" : "#333",
    },
  };

  return (
    <div>
      <label htmlFor="email" style={styles.label}>
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        style={styles.input}
      />
    </div>
  );
}

export default EmailInput;
