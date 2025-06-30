import { ArrowLeft, ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal } from 'lucide-react';
import { Video } from '@/types';
import VideoCard from './VideoCard';

interface VideoPlayerProps {
  video: Video;
  onBack: () => void;
  relatedVideos: Video[];
}

const VideoPlayer = ({ video, onBack, relatedVideos }: VideoPlayerProps) => {
  return (
    <div className="pt-16 px-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 mb-4 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>戻る</span>
          </button>
          
          <div className="bg-black rounded-lg aspect-video mb-4 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-gray-400">動画プレイヤー（デモ）</p>
              <p className="text-sm text-gray-500 mt-2">実際の動画ファイルを追加してください</p>
            </div>
          </div>

          <div className="mb-4">
            <h1 className="text-xl font-bold text-white mb-3">{video.title}</h1>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={video.channelAvatar}
                  alt={video.channel}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-white">{video.channel}</p>
                  <p className="text-sm text-gray-400">123万人のチャンネル登録者</p>
                </div>
                <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
                  チャンネル登録
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex bg-gray-800 rounded-full">
                  <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded-l-full transition-colors">
                    <ThumbsUp size={20} />
                    <span>1.2万</span>
                  </button>
                  <div className="w-px bg-gray-600"></div>
                  <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 rounded-r-full transition-colors">
                    <ThumbsDown size={20} />
                  </button>
                </div>
                
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Share size={20} />
                  <span>共有</span>
                </button>
                
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <Download size={20} />
                  <span>保存</span>
                </button>
                
                <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-4 text-sm text-gray-300 mb-3">
                <span>{video.views}</span>
                <span>{video.uploadTime}</span>
              </div>
              <p className="text-white">{video.description}</p>
            </div>
          </div>
        </div>

        <div className="lg:w-96">
          <h2 className="text-lg font-semibold text-white mb-4">関連動画</h2>
          <div className="space-y-4">
            {relatedVideos.slice(0, 8).map((relatedVideo) => (
              <div key={relatedVideo.id} className="flex space-x-3">
                <div className="relative flex-shrink-0">
                  <img
                    src={relatedVideo.thumbnail}
                    alt={relatedVideo.title}
                    className="w-40 aspect-video object-cover rounded cursor-pointer hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    {relatedVideo.duration}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-white text-sm line-clamp-2 leading-5 cursor-pointer hover:text-gray-300">
                    {relatedVideo.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 hover:text-white cursor-pointer">
                    {relatedVideo.channel}
                  </p>
                  <div className="flex items-center text-gray-400 text-sm mt-1 space-x-1">
                    <span>{relatedVideo.views}</span>
                    <span>•</span>
                    <span>{relatedVideo.uploadTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;