import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-auto border-t border-gray-800">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">About Catalog-Z</h3>
            <p className="text-sm leading-relaxed max-w-md">
              Catalog-Z is a leading platform providing premium quality, high-resolution free stock photos and videos for creators, designers, and developers. Our assets are free to download and use for your personal and commercial projects.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">Our Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-teal transition-colors">Photos</Link>
              </li>
              <li>
                <Link to="/videos" className="hover:text-brand-teal transition-colors">Videos</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-teal transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-teal transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Links & Support Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 uppercase tracking-wider">Stay Connected</h3>
            <div className="flex space-x-3 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-brand-teal transition-colors duration-200" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-brand-teal transition-colors duration-200" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-brand-teal transition-colors duration-200" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-brand-teal transition-colors duration-200" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-xs text-gray-500">
              Designed by TemplateMo. Rebuilt with React & Tailwind CSS.
            </p>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
          <p>© 2026 Catalog-Z Company. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-brand-teal transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-brand-teal transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
