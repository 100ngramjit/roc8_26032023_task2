import React, { useState } from "react";
import { generateCaptcha } from "./CaptchaGenerator";
import DarkModeToggle from "./DarkModeToggle";

function SignInForm() {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredEmail = formData.get("email");
    const enteredPassword = formData.get("password");
    const enteredCaptcha = formData.get("captcha");
    if (enteredCaptcha !== captcha) {
      alert("Incorrect CAPTCHA");
      setCaptcha(generateCaptcha());
      setCaptchaValue("");
    } else {
      alert(
        `Captcha Verified!!\nEmail: ${enteredEmail}\nPassword: ${enteredPassword}`
      );
      setEmail("");
      setPassword("");
      setCaptcha(generateCaptcha());
      setCaptchaValue("");
    }
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  const styles = {
    form: {
      maxWidth: "500px",
      margin: "0 auto",
      background: darkMode ? "#222" : "#fff",
      color: darkMode ? "#fff" : "#000",
      padding: "20px",
      borderRadius: "5px",
      border: "2px solid #ccc",
    },
    input: {
      flex: 1,
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      background: darkMode ? "#444" : "#fff",
      color: darkMode ? "#fff" : "#000",
    },
    label: {
      marginRight: "10px",
      color: darkMode ? "#fff" : "#000",
    },
    captchaContainer: {
      padding: "10px",
      display: "flex",
      alignItems: "center",
      background: darkMode ? "#444" : "#fff",
      color: darkMode ? "#fff" : "#000",
    },
    captchaText: {
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginRight: "5px",
      textDecoration: "line-through",
    },
    captchaLine: {
      flex: 1,
      height: "1px",
      background: "#ccc",
      margin: "0 5px",
    },
    button: {
      padding: "10px 20px",
      background: darkMode ? "#008CBA" : "#008CBA",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    toggle: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "10px",
    },
    toggleLabel: {
      display: "inline-block",
      marginRight: "10px",
      color: darkMode ? "#fff" : "#000",
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <DarkModeToggle
        styles={styles}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <h2>Sign in with CAPTCHA</h2>

      <div style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="email" style={styles.label}>
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={styles.input}
          required
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
        <label htmlFor="password" style={styles.label}>
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.captchaContainer}>
        <div>Enter the captcha :</div>
        <div style={styles.captchaText}> {captcha}</div>

        <input
          type="text"
          name="captcha"
          value={captchaValue}
          onChange={(event) => setCaptchaValue(event.target.value)}
          style={styles.input}
          required
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button type="submit" style={styles.button}>
          Sign In
        </button>
      </div>
    </form>
  );
}

export default SignInForm;
