import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

interface AuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
}

const Auth: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate form
    if (!isSignIn && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch(`/api/auth/${isSignIn ? 'signin' : 'signup'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const data = await response.json();
      // Store the token in localStorage or your preferred storage method
      localStorage.setItem('authToken', data.token);
      
      // Navigate to the project form page
      navigate('/submit-project');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
    setError('');
    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="py-8">
      <div className="max-w-md mx-auto">
        <div className="backdrop-blur-lg bg-purple-900/10 rounded-3xl p-8 shadow-2xl border border-purple-200/10">
          <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            {isSignIn ? 'Sign In' : 'Create Account'}
          </h2>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-purple-100/90 text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full bg-purple-900/5 border-purple-200/10 text-purple-100 placeholder-purple-200/40 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-purple-100/90 text-lg">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input input-bordered w-full bg-purple-900/5 border-purple-200/10 text-purple-100 placeholder-purple-200/40 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl"
                placeholder="Enter your password"
                required
              />
            </div>

            {!isSignIn && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-purple-100/90 text-lg">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-purple-900/5 border-purple-200/10 text-purple-100 placeholder-purple-200/40 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            <button 
              type="submit" 
              className="btn w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              {isSignIn ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button 
              onClick={toggleAuthMode}
              className="text-purple-300 hover:text-purple-200 transition-colors"
            >
              {isSignIn ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth; 