import React from 'react';
import Footer from './Footer';
import yanixivImage from '../assets/yanixiv.jpeg';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="backdrop-blur-lg bg-purple-900/10 rounded-3xl p-12 shadow-2xl border border-purple-200/10 mb-12">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
          About Wagmi Grants
        </h1>
        <p className="text-center text-purple-100/80 text-xl max-w-3xl mx-auto">
          Empowering the next generation of Web3 innovators through intelligent grant matching and community support.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-lg bg-purple-900/10 rounded-3xl p-8 shadow-xl border border-purple-200/10">
          <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-purple-100/80 text-lg mb-8">
            We're a team of blockchain enthusiasts and AI experts passionate about supporting the Web3 ecosystem. Our combined experience in technology and community building allows us to provide comprehensive support to projects at every stage of their journey.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {[
              {
                name: "Omar Mohamed",
                role: "Co-Founder & CEO",
                bio: "Passionate about Web3 and building the future of decentralized technology",
                github: "YaniXIV",
                image: yanixivImage
              },
              {
                name: "Your Name",
                role: "Co-Founder & CTO",
                bio: "Expert in blockchain technology and AI systems",
                github: "your-github",
                image: "https://ui-avatars.com/api/?name=Your+Name&background=8b5cf6&color=fff"
              }
            ].map((member, index) => (
              <div key={index} className="backdrop-blur-lg bg-purple-900/5 rounded-2xl p-6 border border-purple-200/10 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-purple-300/20 bg-purple-900/20">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=8b5cf6&color=fff`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-purple-300 mb-2">{member.name}</h3>
                <p className="text-purple-200/80 mb-2">{member.role}</p>
                <p className="text-purple-100/60 text-sm text-center mb-4">{member.bio}</p>
                <a 
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About; 