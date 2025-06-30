import { Video } from '@/types';

interface VideoCardProps {
  video: Video;
  onClick: () => void;
}

const VideoCard = ({ video, onClick }: VideoCardProps) => {
  return (
    <div
      className="cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full aspect-video object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-sm px-1 py-0.5 rounded">
          {video.duration}
        </div>
      </div>
      
      <div className="flex mt-3 space-x-3">
        <img
          src={video.channelAvatar}
          alt={video.channel}
          className="w-9 h-9 rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-white text-sm line-clamp-2 leading-5 group-hover:text-gray-300">
            {video.title}
          </h3>
          <p className="text-gray-400 text-sm mt-1 hover:text-white cursor-pointer">
            {video.channel}
          </p>
          <div className="flex items-center text-gray-400 text-sm mt-1 space-x-1">
            <span>{video.views}</span>
            <span>•</span>
            <span>{video.uploadTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;