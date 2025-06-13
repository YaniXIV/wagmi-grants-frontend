import React from 'react';
import Footer from './Footer';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "YaniXIV.Dev@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "mailto:YaniXIV.Dev@gmail.com"
    },
    {
      title: "Discord",
      value: "Join our community",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
      link: "https://discord.gg/wxktp76J"
    },
    {
      title: "Twitter",
      value: "@Yani_XIV",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      link: "https://x.com/Yani_XIV"
    },
    {
      title: "GitHub",
      value: "YaniXIV",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      link: "https://github.com/YaniXIV/wagmi-grants-frontend"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="backdrop-blur-lg bg-purple-900/10 rounded-3xl p-12 shadow-2xl border border-purple-200/10 mb-12">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-300 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
          Get in Touch
        </h1>
        <p className="text-center text-purple-100/80 text-xl max-w-3xl mx-auto">
          Have questions about Wagmi Grants? We're here to help. Reach out to us through any of the channels below.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-lg bg-purple-900/10 rounded-2xl p-6 shadow-xl border border-purple-200/10 hover:bg-purple-900/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-900/20 text-purple-300 group-hover:bg-purple-900/30 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-1">{info.title}</h3>
                  <p className="text-purple-100/80">{info.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 backdrop-blur-lg bg-purple-900/10 rounded-3xl p-8 shadow-xl border border-purple-200/10">
          <h2 className="text-2xl font-semibold text-purple-300 mb-4">Response Time</h2>
          <p className="text-purple-100/80 mb-4">
            We typically respond to all inquiries within 24 hours. For urgent matters, please reach out through Twitter for the fastest response.
          </p>
          <div className="flex items-center gap-2 text-purple-100/60">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Available Monday - Friday, 9:00 AM - 5:00 PM MST</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 