import { Search, Menu, Mic, Video, Bell, User } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onLogoClick: () => void;
}

const Header = ({ onMenuClick, onLogoClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f] border-b border-gray-800 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <Menu size={20} />
          </button>
          
          <div 
            className="flex items-center space-x-1 cursor-pointer"
            onClick={onLogoClick}
          >
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <Video className="text-white" size={16} />
            </div>
            <span className="text-xl font-bold">YouTube</span>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex items-center">
            <div className="flex-1 flex">
              <input
                type="text"
                placeholder="検索"
                className="w-full px-4 py-2 bg-[#121212] border border-gray-600 rounded-l-full focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-[#222222] border border-l-0 border-gray-600 rounded-r-full hover:bg-gray-700 transition-colors">
                <Search size={20} />
              </button>
            </div>
            <button className="ml-4 p-2 bg-[#222222] rounded-full hover:bg-gray-700 transition-colors">
              <Mic size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <Video size={20} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;