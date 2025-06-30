import { Video } from '@/types';
import VideoCard from './VideoCard';

interface VideoGridProps {
  videos: Video[];
  onVideoClick: (video: Video) => void;
}

const VideoGrid = ({ videos, onVideoClick }: VideoGridProps) => {
  return (
    <div className="pt-20 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onClick={() => onVideoClick(video)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;