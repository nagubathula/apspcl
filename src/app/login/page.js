"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captchaValue) {
      try {
        const { token } = await login({ ...formData, captcha: captchaValue });
        localStorage.setItem("authToken", token); // Store the JWT token
      } catch (err) {
        console.error("Login failed:", err.message);
      }
    } else {
      console.error("Please complete the CAPTCHA");
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <ReCAPTCHA
        sitekey="6LdJPQoqAAAAAC2wOkaGRjE2XPx7qdmiO411QHwp" // Use the provided reCAPTCHA site key
        onChange={handleCaptchaChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
