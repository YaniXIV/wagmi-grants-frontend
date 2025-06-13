import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSignIn = () => {
    if (location.pathname === '/') {
      const signInSection = document.querySelector('.backdrop-blur-lg.bg-purple-900\\/10.rounded-3xl');
      if (signInSection) {
        const headerOffset = 100; // Adjust this value based on your header height
        const elementPosition = signInSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - (window.innerHeight / 2) + (signInSection.clientHeight / 2);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = '/';
    }
  };

  return (
    <header className="py-4">
      <div className="container mx-auto px-4">
        {/* Navigation Bar */}
        <nav className="backdrop-blur-lg bg-purple-900/10 rounded-2xl p-4 mb-8 shadow-xl border border-purple-200/10">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Wagmi Grants
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="text-purple-100/80 hover:text-purple-300 transition-colors">Home</Link>
              <Link to="/about" className="text-purple-100/80 hover:text-purple-300 transition-colors">About</Link>
              <Link to="/contact" className="text-purple-100/80 hover:text-purple-300 transition-colors">Contact</Link>
              <Link 
                to="/grants"
                className="text-purple-100/80 hover:text-purple-300 transition-colors"
              >
                Grants
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section - Only show on home page */}
        {isHomePage && (
          <>
            <div className="backdrop-blur-lg bg-purple-900/10 rounded-3xl p-12 shadow-2xl border border-purple-200/10 mb-12">
              <h1 className="text-6xl font-bold text-center mb-6">
                <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">Find Your </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent relative z-10">Perfect</span>
                  <span className="absolute -inset-6 blur-xl bg-gradient-to-r from-purple-500/40 to-pink-700/40 rounded-full animate-[pulse_6s_ease-in-out_infinite]"></span>
                </span>
                <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent"> Web3 Grant</span>
              </h1>
              <p className="text-center text-purple-100/80 text-xl max-w-3xl mx-auto mb-8">
                Connect your project with the right funding opportunities. Our AI-powered platform matches your Web3 innovation with the perfect grant program.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/submit" className="btn rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Get Started
                </Link>
                <Link to="/about" className="btn rounded-xl bg-purple-900/10 hover:bg-purple-900/15 text-purple-100 border border-purple-200/10 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section - Only show on home page */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { number: "500+", label: "Active Grants" },
                { number: "$10M+", label: "Total Funding" },
                { number: "1000+", label: "Projects Funded" }
              ].map((stat, index) => (
                <div key={index} className="backdrop-blur-lg bg-purple-900/10 rounded-2xl p-6 shadow-xl border border-purple-200/10 text-center">
                  <div className="text-3xl font-bold text-purple-300 mb-2">{stat.number}</div>
                  <div className="text-purple-100/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header; 