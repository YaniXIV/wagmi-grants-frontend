import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import ethereumLogo from '../assets/cryptologos/ethereum-eth-logo.svg';
import polygonLogo from '../assets/cryptologos/polygon-matic-logo.svg';
import optimismLogo from '../assets/cryptologos/optimism-ethereum-op-logo.svg';
import solanaLogo from '../assets/cryptologos/solana-sol-logo.svg';
import aptosLogo from '../assets/cryptologos/aptos-apt-logo.svg';
import uniswapLogo from '../assets/cryptologos/uniswap-uni-logo.svg';

const Grants: React.FC = () => {
  const majorEcosystems = [
    {
      name: "Ethereum Foundation",
      grant: "Up to $250,000",
      logo: ethereumLogo,
      description: "Supporting innovative projects in the Ethereum ecosystem"
    },
    {
      name: "Polygon Village",
      grant: "Up to $100,000",
      logo: polygonLogo,
      description: "Building the future of Polygon ecosystem"
    },
    {
      name: "Optimism",
      grant: "Retroactive funding",
      logo: optimismLogo,
      description: "Rewarding past contributions to the Optimism ecosystem"
    },
    {
      name: "Solana",
      grant: "Ecosystem support",
      logo: solanaLogo,
      description: "Accelerating Solana ecosystem growth"
    },
    {
      name: "Aptos",
      grant: "Ecosystem support",
      logo: aptosLogo,
      description: "Building the next generation of Web3"
    },
    {
      name: "Uniswap",
      grant: "DeFi development",
      logo: uniswapLogo,
      description: "Advancing decentralized finance"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="backdrop-blur-lg bg-purple-900/10 rounded-3xl p-12 shadow-2xl border border-purple-200/10 mb-12">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
          Available Grants
        </h1>
        <p className="text-center text-purple-100/80 text-xl max-w-3xl mx-auto">
          Browse through our curated list of grants designed to support Web3 innovation and development.
        </p>
      </div>

      {/* Major Ecosystems Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">
          Find Grants From Major Web3 Ecosystems
        </h2>
        <p className="text-center text-purple-100/80 text-lg mb-12">
          We help you discover active and upcoming grants from leading platforms in the blockchain and AI space
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {majorEcosystems.map((ecosystem, index) => (
            <div key={index} className="backdrop-blur-lg bg-purple-900/10 rounded-2xl p-6 shadow-xl border border-purple-200/10 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-purple-900/20 flex items-center justify-center">
                <img 
                  src={ecosystem.logo} 
                  alt={ecosystem.name}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(ecosystem.name)}&background=8b5cf6&color=fff`;
                  }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-purple-300">{ecosystem.name}</h3>
                  <span className="text-sm text-purple-400">[✓]</span>
                </div>
                <p className="text-purple-100/80">{ecosystem.grant}</p>
                <p className="text-sm text-purple-100/60">{ecosystem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-purple-100/60 text-sm italic">
          Logos shown represent active or recent grant providers in the ecosystem. We're not officially affiliated with these organizations.
        </div>
      </div>

      {/* More Grants Section */}
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-purple-900/10 rounded-3xl p-12 shadow-2xl border border-purple-200/10 text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
          And Many More Opportunities
        </h2>
        <p className="text-purple-100/80 text-xl mb-8">
          We have access to over 500+ active grants from various Web3 ecosystems, with total funding exceeding $10M+.
          Our AI-powered matching system will help you find the perfect grant for your project.
        </p>
        <Link 
          to="/"
          className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-lg"
        >
          Find Your Perfect Grant Match
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Grants; 