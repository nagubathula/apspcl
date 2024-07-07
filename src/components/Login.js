"use client";
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import ReCAPTCHA from 'react-google-recaptcha';

const Login = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValue) {
      login({ ...formData, captcha: captchaValue });
    } else {
      console.error('Please complete the CAPTCHA');
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="my-4">
            <ReCAPTCHA
              sitekey="6LdJPQoqAAAAAC2wOkaGRjE2XPx7qdmiO411QHwp"
              onChange={handleCaptchaChange}
              className="flex justify-center"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
