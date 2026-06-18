import Hero from '../components/Hero';
import { teamMembers } from '../mockData';
import { FaTwitter, FaLinkedin, FaFacebookF } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <Hero
        title="About Catalog-Z"
        bgImage="https://picsum.photos/seed/about-banner/1920/600"
      />

      {/* Main Container */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Office Image */}
          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100 aspect-[4/3]">
            <img 
              src="https://picsum.photos/seed/office-space/800/600" 
              alt="Catalog-Z Workspace" 
              className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
            />
          </div>

          {/* Right: Mission Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight border-l-4 border-brand-teal pl-4">
              Our Mission & Journey
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2026, Catalog-Z has grown from a small passionate side project into a global destination for high-quality, free stock photography and professional stock footage. Our goal is to empower creators, developers, and designers around the world by giving them easy access to visual content that brings their ideas to life.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe that high-quality visuals should not be locked behind expensive paywalls. That is why our entire library is completely free to download and use under our generous license. Each day, our community of creators upload stunning new content, making sure our catalog stays fresh, trending, and inspiring.
            </p>
            <div className="pt-4 flex space-x-6">
              <div>
                <span className="block text-3xl font-black text-brand-teal">50M+</span>
                <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Active Downloads</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-brand-teal">10K+</span>
                <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Global Creators</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-brand-teal">100%</span>
                <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Free to Use</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Meet the Minds Behind Catalog-Z</h2>
            <p className="text-gray-500">Our team is composed of passionate photographers, experienced developers, and creative directors who work tirelessly to curate the best experience for our global community.</p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 text-center p-6 transition-all duration-300"
              >
                {/* Profile Pic */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow group-hover:border-brand-teal/30 transition-all duration-300">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-brand-teal text-sm font-semibold mb-4">{member.title}</p>
                
                {/* Social Icons */}
                <div className="flex justify-center space-x-3 text-gray-400 group-hover:text-gray-600 transition-colors">
                  <a href={member.socials.twitter} className="hover:text-brand-teal transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href={member.socials.linkedin} className="hover:text-brand-teal transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href={member.socials.facebook} className="hover:text-brand-teal transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
