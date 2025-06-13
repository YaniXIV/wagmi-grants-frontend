import React, { useState } from 'react';
import Footer from './Footer';

interface ProjectFormData {
  githubUrl: string;
  title: string;
  description: string;
}

const ProjectSubmission: React.FC = () => {
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
      <Footer />
    </div>
  );
};

export default ProjectSubmission; 