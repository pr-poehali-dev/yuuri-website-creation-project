import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MinecraftHeader = () => {
  return (
    <header className="w-full bg-stone-700 border-b-4 border-stone-900">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 border-2 border-green-800 flex items-center justify-center">
              <Icon name="Mountain" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-wider">
              MineCraft Web
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              className="text-white hover:bg-stone-600 font-bold px-4 py-2 border-2 border-transparent hover:border-stone-400"
            >
              Играть
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-stone-600 font-bold px-4 py-2 border-2 border-transparent hover:border-stone-400"
            >
              Миры
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-stone-600 font-bold px-4 py-2 border-2 border-transparent hover:border-stone-400"
            >
              Мультиплеер
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-stone-600 font-bold px-4 py-2 border-2 border-transparent hover:border-stone-400"
            >
              Настройки
            </Button>
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="border-2 border-stone-600 text-white bg-stone-800 hover:bg-stone-700 font-bold"
            >
              <Icon name="User" size={16} className="mr-2" />
              Игрок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MinecraftHeader;
