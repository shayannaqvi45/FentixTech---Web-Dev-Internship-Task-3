import { useState, useMemo } from 'react';
import { videos } from '../mockData';
import Hero from '../components/Hero';
import VideoCard from '../components/VideoCard';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 8;

export default function VideosCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All'); // 'All', 'Latest', 'Trending', 'Most Viewed'
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when search or tab changes
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  // Filter videos
  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesSearch = 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTab = 
        activeTab === 'All' || 
        video.category === activeTab;

      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  // Paginated videos
  const paginatedVideos = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredVideos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredVideos, currentPage]);

  const totalPages = Math.max(Math.ceil(filteredVideos.length / ITEMS_PER_PAGE), 1);

  return (
    <div className="bg-white">
      {/* Hero Search Banner */}
      <Hero
        title="Breathtaking motion clips."
        placeholder="Search free videos..."
        onSearch={handleSearch}
        bgImage="https://picsum.photos/seed/herovideos/1920/600"
      />

      {/* Catalog Grid Area */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter / Info Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-100 pb-6 mb-8 gap-4">
          {/* Category Tabs */}
          <div className="flex space-x-2 bg-gray-50 p-1.5 rounded-lg border border-gray-200/50">
            {['All', 'Latest', 'Trending', 'Most Viewed'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-brand-teal text-white shadow'
                    : 'text-gray-600 hover:text-brand-teal'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Pagination status */}
          <div className="text-gray-500 text-sm font-medium">
            Page {currentPage} of {totalPages}
          </div>
        </div>

        {/* Gallery Grid */}
        {paginatedVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {paginatedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No videos found matching your search criteria.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}
