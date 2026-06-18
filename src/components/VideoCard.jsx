import { Link } from 'react-router-dom';
import { FaPlay, FaEye, FaClock } from 'react-icons/fa';

export default function VideoCard({ video }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100">
      {/* Thumbnail */}
      <div className="overflow-hidden aspect-[4/3] relative">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Static Play Icon Indicator (visible when not hovered, disappears or transitions on hover) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-black/55 flex items-center justify-center text-white border border-white/20">
            <FaPlay className="text-sm ml-1" />
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <Link 
        to={`/video/${video.id}`}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white"
      >
        {/* Mid Play Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          <div className="w-14 h-14 rounded-full bg-brand-teal flex items-center justify-center text-white shadow-lg shadow-brand-teal/40 border border-teal-300/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <FaPlay className="text-base ml-1" />
          </div>
        </div>

        <h4 className="text-base font-semibold truncate mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {video.title}
        </h4>
        
        <div className="flex items-center justify-between mt-2 z-10">
          {/* Author info */}
          <div className="flex items-center space-x-2">
            <img 
              src={video.authorAvatar} 
              alt={video.author}
              className="w-6 h-6 rounded-full border border-white/80 object-cover"
            />
            <span className="text-xs font-medium truncate max-w-[120px]">{video.author}</span>
          </div>

          {/* Stats & Duration */}
          <div className="flex items-center space-x-3 text-xs">
            <span className="flex items-center space-x-1">
              <FaEye className="text-gray-300" />
              <span>{video.views}</span>
            </span>
            <span className="flex items-center space-x-1 bg-black/40 px-2 py-0.5 rounded text-[10px] font-semibold border border-white/10">
              <FaClock className="text-[10px]" />
              <span>{video.duration}</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
