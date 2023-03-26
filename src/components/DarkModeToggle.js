import React from "react";

const DarkModeToggle = ({ styles, darkMode, toggleDarkMode }) => {
  return (
    <div style={styles.toggle}>
      <label htmlFor="darkMode" style={styles.toggleLabel}>
        Dark Mode:
      </label>
      <input
        type="checkbox"
        id="darkMode"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
    </div>
  );
};

export default DarkModeToggle;
