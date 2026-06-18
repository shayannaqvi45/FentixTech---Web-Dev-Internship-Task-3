import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Hero({ title, placeholder, onSearch, bgImage }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (onSearch) {
      onSearch(val);
    }
  };

  return (
    <div 
      className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.45)), url(${bgImage})` }}
    >
      <div className="w-full max-w-4xl px-4 text-center text-white">
        {title && (
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide drop-shadow-md animate-fadeIn">
            {title}
          </h1>
        )}

        {placeholder && (
          <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto flex items-center bg-white rounded-full overflow-hidden shadow-xl border border-white focus-within:border-brand-teal transition-all duration-300">
            <input
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={handleChange}
              className="flex-grow py-4 px-6 md:px-8 text-gray-800 text-base md:text-lg focus:outline-none placeholder-gray-400 font-medium bg-transparent"
            />
            <button
              type="submit"
              className="bg-brand-teal hover:bg-teal-600 text-white py-4 px-8 md:px-10 font-bold transition-all duration-300 flex items-center justify-center focus:outline-none"
              aria-label="Search Submit"
            >
              <FaSearch className="text-lg md:text-xl" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
