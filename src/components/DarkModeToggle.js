import React from "react";

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "20px",
    },

    toggle: {
      width: "60px",
      height: "34px",
      borderRadius: "17px",
      backgroundColor: darkMode ? "#2196f3" : "#ccc",
      position: "relative",
    },
    circle: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      backgroundColor: darkMode ? "#fff" : "#000",
      position: "absolute",
      top: "2px",
      left: darkMode ? "calc(100% - 32px)" : "2px",
      transition: "left 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <span style={{ color: darkMode ? "#fff" : "#333" }}>Dark Mode:</span>
      <div style={styles.toggle} onClick={toggleDarkMode}>
        <div style={styles.circle}></div>
      </div>
    </div>
  );
}

export default DarkModeToggle;
