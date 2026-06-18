import { Link } from 'react-router-dom';
import { FaDownload, FaEye } from 'react-icons/fa';

export default function ImageCard({ photo }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100">
      {/* Thumbnail */}
      <div className="overflow-hidden aspect-[4/3]">
        <img
          src={photo.imageUrl}
          alt={photo.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Hover Overlay */}
      <Link 
        to={`/photo/${photo.id}`}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white"
      >
        <h4 className="text-base font-semibold truncate mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {photo.title}
        </h4>
        <div className="flex items-center justify-between mt-2">
          {/* Author info */}
          <div className="flex items-center space-x-2">
            <img 
              src={photo.authorAvatar} 
              alt={photo.author}
              className="w-6 h-6 rounded-full border border-white/80 object-cover"
            />
            <span className="text-xs font-medium truncate max-w-[120px]">{photo.author}</span>
          </div>

          {/* Stats & Actions */}
          <div className="flex items-center space-x-3 text-xs">
            <span className="flex items-center space-x-1">
              <FaEye className="text-gray-300" />
              <span>{photo.views}</span>
            </span>
            <span className="p-1 bg-brand-teal/80 hover:bg-brand-teal text-white rounded transition-colors" aria-label="Download">
              <FaDownload className="text-xs" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
