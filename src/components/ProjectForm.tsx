import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProjectFormData {
  githubUrl: string;
  title: string;
  description: string;
}

const ProjectForm: React.FC = () => {
  const [formData, setFormData] = useState<ProjectFormData>({
    githubUrl: '',
    title: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Features Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-12">
          Why Choose Wagmi Grants?
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              title: "AI-Powered Matching",
              description: "Our advanced AI algorithm analyzes your project and finds the most suitable grants based on your needs and goals."
            },
            {
              title: "Web3 Focused",
              description: "Specialized in blockchain and Web3 projects, we understand the unique requirements of decentralized applications."
            },
            {
              title: "Fast Processing",
              description: "Get matched with potential grants within minutes, not days. Our streamlined process saves you time and effort."
            }
          ].map((feature, index) => (
            <div key={index} className="backdrop-blur-lg bg-purple-900/10 rounded-2xl p-6 shadow-xl border border-purple-200/10">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">{feature.title}</h3>
              <p className="text-purple-100/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto mb-16">
        <form onSubmit={handleSubmit} className="space-y-6 backdrop-blur-lg bg-purple-900/10 p-8 rounded-3xl shadow-2xl border border-purple-200/10">
          <h2 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Submit Your Project
          </h2>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-100/90 text-lg">Project Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered w-full bg-purple-900/5 border-purple-200/10 text-purple-100 placeholder-purple-200/40 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl"
              placeholder="Enter your project title"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-100/90 text-lg">GitHub Repository URL</span>
            </label>
            <input
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              className="input input-bordered w-full bg-purple-900/5 border-purple-200/10 text-purple-100 placeholder-purple-200/40 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl"
              placeholder="https://github.com/username/repo"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-100/90 text-lg">Project Description</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered h-32 bg-purple-900/5 border-purple-200/10 text-purple-100 placeholder-purple-200/40 focus:border-purple-400 focus:ring-purple-400/20 rounded-xl"
              placeholder="Describe your project and what you're looking to achieve..."
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn w-full rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none shadow-lg hover:shadow-purple-500/25 transition-all duration-300 mt-8"
          >
            Find Matching Grants
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto backdrop-blur-lg bg-purple-900/10 rounded-3xl p-8 shadow-xl border border-purple-200/10">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-purple-300 mb-4">Wagmi Grants</h3>
            <p className="text-purple-100/80">Empowering Web3 innovation through smart grant matching.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-purple-100/80 hover:text-purple-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-purple-100/80 hover:text-purple-300 transition-colors">About</Link></li>
              <li><Link to="/grants" className="text-purple-100/80 hover:text-purple-300 transition-colors">Grants</Link></li>
              <li><Link to="/contact" className="text-purple-100/80 hover:text-purple-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://x.com/Yani_XIV" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-100/80 hover:text-purple-300 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/wxktp76J" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-100/80 hover:text-purple-300 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/YaniXIV/wagmi-grants-frontend" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-100/80 hover:text-purple-300 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-200/10 text-center text-purple-100/60">
          © 2025 Wagmi Grants. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ProjectForm; 