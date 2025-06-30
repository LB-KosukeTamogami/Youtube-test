import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import VideoGrid from '@/components/VideoGrid';
import VideoPlayer from '@/components/VideoPlayer';
import { mockVideos } from '@/data/videos';
import { Video } from '@/types';

function App() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleVideoSelect = (video: Video) => {
    setSelectedVideo(video);
  };

  const handleBackToHome = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Header 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        onLogoClick={handleBackToHome}
      />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'ml-60' : 'ml-20'
        }`}>
          {selectedVideo ? (
            <VideoPlayer 
              video={selectedVideo} 
              onBack={handleBackToHome}
              relatedVideos={mockVideos.filter(v => v.id !== selectedVideo.id)}
            />
          ) : (
            <VideoGrid 
              videos={mockVideos} 
              onVideoClick={handleVideoSelect}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;