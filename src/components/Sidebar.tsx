import { 
  Home, 
  Compass, 
  Play, 
  Clock, 
  ThumbsUp, 
  Download, 
  History,
  PlaySquare,
  Music,
  Radio,
  Gamepad2,
  Trophy,
  Lightbulb,
  Shirt,
  Podcast
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'ホーム', active: true },
    { icon: Compass, label: '探索' },
    { icon: Play, label: 'ショート' },
    { icon: Radio, label: '登録チャンネル' },
  ];

  const libraryItems = [
    { icon: PlaySquare, label: 'ライブラリ' },
    { icon: History, label: '履歴' },
    { icon: Clock, label: '後で見る' },
    { icon: ThumbsUp, label: '高く評価した動画' },
    { icon: Download, label: 'オフライン' },
  ];

  const exploreItems = [
    { icon: Music, label: '音楽' },
    { icon: Trophy, label: 'スポーツ' },
    { icon: Gamepad2, label: 'ゲーム' },
    { icon: Lightbulb, label: '学習' },
    { icon: Shirt, label: 'ファッション・美容' },
    { icon: Podcast, label: 'ポッドキャスト' },
  ];

  if (!isOpen) {
    return (
      <aside className="fixed left-0 top-16 w-20 h-full bg-[#0f0f0f] border-r border-gray-800 z-40">
        <div className="py-4">
          {menuItems.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center py-4 px-2 hover:bg-gray-800 cursor-pointer transition-colors ${
                item.active ? 'bg-gray-800' : ''
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs mt-1 text-center leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className="fixed left-0 top-16 w-60 h-full bg-[#0f0f0f] border-r border-gray-800 overflow-y-auto z-40">
      <div className="py-4">
        <div className="mb-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-6 py-2 px-6 hover:bg-gray-800 cursor-pointer transition-colors ${
                item.active ? 'bg-gray-800' : ''
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-4 mb-4">
          <h3 className="px-6 py-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
            あなた
          </h3>
          {libraryItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-6 py-2 px-6 hover:bg-gray-800 cursor-pointer transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-4">
          <h3 className="px-6 py-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
            探索
          </h3>
          {exploreItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-6 py-2 px-6 hover:bg-gray-800 cursor-pointer transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;