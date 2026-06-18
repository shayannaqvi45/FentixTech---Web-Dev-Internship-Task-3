import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { photos } from '../mockData';
import ImageCard from '../components/ImageCard';
import { FaArrowLeft, FaDownload, FaEye, FaCalendarAlt, FaFileAlt, FaCompress } from 'react-icons/fa';

export default function PhotoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on page load or ID change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const photo = photos.find((p) => p.id === id);

  if (!photo) {
    return (
      <div className="max-w-[1800px] mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Photo Not Found</h2>
        <p className="text-gray-500 mb-6">The photo you are looking for does not exist or has been removed.</p>
        <Link to="/" className="inline-flex items-center space-x-2 bg-brand-teal hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200">
          <FaArrowLeft />
          <span>Back to Catalog</span>
        </Link>
      </div>
    );
  }

  // Get 4 related photos (excluding current photo)
  const relatedPhotos = photos
    .filter((p) => p.id !== id)
    .slice(0, 4);

  const handleDownload = () => {
    // Open high-res image in a new tab
    window.open(photo.detailUrl, '_blank');
  };

  return (
    <div className="bg-white">
      {/* Detail Content Container */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center space-x-2 text-gray-500 hover:text-brand-teal font-semibold mb-8 group transition-colors duration-200"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Go Back</span>
        </button>

        {/* Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 mb-16">
          {/* Left: 70% (7 cols out of 10) */}
          <div className="lg:col-span-7 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center p-4">
            <img 
              src={photo.detailUrl} 
              alt={photo.title}
              className="max-h-[700px] w-auto object-contain rounded-lg shadow-sm"
            />
          </div>

          {/* Right: 30% (3 cols out of 10) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4 leading-tight">
                {photo.title}
              </h2>
              
              {/* Author Row */}
              <div className="flex items-center space-x-3 mb-8 pb-6 border-b border-gray-100">
                <img 
                  src={photo.authorAvatar} 
                  alt={photo.author}
                  className="w-12 h-12 rounded-full border-2 border-brand-teal/20 object-cover"
                />
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Uploaded by</p>
                  <p className="text-gray-800 font-bold">{photo.author}</p>
                </div>
              </div>

              {/* Metadata Details */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm py-2 border-b border-gray-50">
                  <span className="text-gray-400 font-medium flex items-center space-x-2">
                    <FaCompress className="text-gray-300" />
                    <span>Resolution</span>
                  </span>
                  <span className="text-gray-700 font-bold">{photo.resolution}</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-gray-50">
                  <span className="text-gray-400 font-medium flex items-center space-x-2">
                    <FaFileAlt className="text-gray-300" />
                    <span>Format</span>
                  </span>
                  <span className="text-gray-700 font-bold">{photo.format}</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-gray-50">
                  <span className="text-gray-400 font-medium flex items-center space-x-2">
                    <FaCalendarAlt className="text-gray-300" />
                    <span>Date Added</span>
                  </span>
                  <span className="text-gray-700 font-bold">{photo.date}</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2 border-b border-gray-50">
                  <span className="text-gray-400 font-medium flex items-center space-x-2">
                    <FaEye className="text-gray-300" />
                    <span>Views</span>
                  </span>
                  <span className="text-gray-700 font-bold">{photo.views}</span>
                </div>
                <div className="flex justify-between items-center text-sm py-2">
                  <span className="text-gray-400 font-medium flex items-center space-x-2">
                    <FaDownload className="text-gray-300" />
                    <span>Downloads</span>
                  </span>
                  <span className="text-gray-700 font-bold">{photo.downloads}</span>
                </div>
              </div>
            </div>

            {/* Action Download CTA */}
            <button
              onClick={handleDownload}
              className="w-full bg-brand-teal hover:bg-teal-600 text-white py-4 px-6 rounded-lg font-bold flex items-center justify-center space-x-2 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:shadow-teal-500/30 transform active:scale-95"
            >
              <FaDownload />
              <span>Download High-Res</span>
            </button>
          </div>
        </div>

        {/* Related Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-brand-teal pl-3">
            Related Photos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {relatedPhotos.map((p) => (
              <ImageCard key={p.id} photo={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
