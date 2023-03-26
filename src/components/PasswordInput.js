import React from "react";

function PasswordInput({ password, setPassword, darkMode }) {
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
      <label htmlFor="password" style={styles.label}>
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        style={styles.input}
      />
    </div>
  );
}

export default PasswordInput;
