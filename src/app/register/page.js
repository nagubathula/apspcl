"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
    const { register } = useAuth();
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [captchaValue, setCaptchaValue] = useState(null);
  
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (captchaValue) {
        register({ ...formData, captcha: captchaValue });
      } else {
        console.error('Please complete the CAPTCHA');
      }
    };
  
    const handleCaptchaChange = (value) => {
      setCaptchaValue(value);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <ReCAPTCHA
          sitekey="6LdJPQoqAAAAAC2wOkaGRjE2XPx7qdmiO411QHwp" // Use the provided reCAPTCHA site key
          onChange={handleCaptchaChange}
        />
        <button type="submit">Register</button>
      </form>
    );
  };
  
  export default Register;