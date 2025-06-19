import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const GameInterface = () => {
  const [health, setHealth] = useState(20);
  const [hunger, setHunger] = useState(20);

  const inventorySlots = Array(36).fill(null);
  const hotbarItems = [
    { name: "Кирка", icon: "Pickaxe" },
    { name: "Топор", icon: "Axe" },
    { name: "Меч", icon: "Sword" },
    { name: "Блок", icon: "Square" },
    null,
    null,
    null,
    null,
    null,
  ];

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-4 gap-4">
      {/* Основная игровая область */}
      <div className="lg:col-span-3 bg-sky-400 border-4 border-stone-600 relative overflow-hidden">
        <div className="w-full h-96 lg:h-full bg-gradient-to-b from-sky-400 via-green-300 to-green-600 relative">
          {/* Игровой мир */}
          <div className="absolute bottom-0 w-full h-32 bg-green-600 border-t-4 border-green-700"></div>
          <div className="absolute bottom-32 w-full h-16 bg-stone-600 border-t-2 border-stone-700"></div>
          <div className="absolute bottom-48 w-full h-8 bg-stone-800"></div>

          {/* Блоки */}
          <div className="absolute bottom-48 left-10 w-8 h-8 bg-stone-500 border border-stone-700"></div>
          <div className="absolute bottom-48 left-18 w-8 h-8 bg-stone-500 border border-stone-700"></div>
          <div className="absolute bottom-40 left-14 w-8 h-8 bg-green-500 border border-green-700"></div>

          {/* Игрок (простая фигурка) */}
          <div className="absolute bottom-48 left-32 w-6 h-12 bg-blue-600 border border-blue-800"></div>
          <div className="absolute bottom-54 left-33 w-4 h-4 bg-yellow-400 border border-yellow-600 rounded"></div>

          {/* Облака */}
          <div className="absolute top-10 left-20 w-16 h-8 bg-white opacity-80 rounded-full"></div>
          <div className="absolute top-16 right-32 w-20 h-6 bg-white opacity-80 rounded-full"></div>

          {/* Солнце */}
          <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-400 border-2 border-yellow-600 rounded-full"></div>
        </div>

        {/* HUD элементы */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 p-2 rounded text-white font-mono text-sm">
          <div>FPS: 60</div>
          <div>XYZ: 128, 64, -45</div>
          <div>Биом: Равнины</div>
        </div>

        {/* Здоровье и голод */}
        <div className="absolute bottom-20 left-4 flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <Icon
                  key={i}
                  name="Heart"
                  size={20}
                  className={i < health / 2 ? "text-red-500" : "text-gray-600"}
                />
              ))}
          </div>
          <div className="flex items-center space-x-1">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`w-5 h-5 border-2 border-yellow-800 ${i < hunger / 2 ? "bg-yellow-600" : "bg-yellow-900"}`}
                />
              ))}
          </div>
        </div>

        {/* Хотбар */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 bg-black bg-opacity-50 p-2 rounded">
          {hotbarItems.map((item, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-stone-700 border-2 border-stone-600 flex items-center justify-center hover:bg-stone-600 cursor-pointer"
            >
              {item && (
                <Icon
                  name={item.icon as any}
                  size={20}
                  className="text-white"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Боковая панель с инвентарем */}
      <div className="space-y-4">
        {/* Инвентарь */}
        <div className="bg-stone-700 border-4 border-stone-900 p-4">
          <h3 className="text-white font-bold mb-4 text-center">Инвентарь</h3>
          <div className="grid grid-cols-6 gap-1">
            {inventorySlots.map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-stone-600 border border-stone-500 hover:bg-stone-500 cursor-pointer"
              ></div>
            ))}
          </div>
        </div>

        {/* Управление */}
        <div className="bg-stone-700 border-4 border-stone-900 p-4">
          <h3 className="text-white font-bold mb-4 text-center">Управление</h3>
          <div className="space-y-2">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
              <Icon name="Play" size={16} className="mr-2" />
              Начать игру
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">
              <Icon name="Pause" size={16} className="mr-2" />
              Пауза
            </Button>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold">
              <Icon name="Square" size={16} className="mr-2" />
              Остановить
            </Button>
          </div>
        </div>

        {/* Статистика */}
        <div className="bg-stone-700 border-4 border-stone-900 p-4">
          <h3 className="text-white font-bold mb-4 text-center">Статистика</h3>
          <div className="space-y-2 text-white font-mono text-sm">
            <div>Время игры: 2:34:12</div>
            <div>Блоков добыто: 1,247</div>
            <div>Пройдено км: 15.6</div>
            <div>Уровень: 28</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInterface;
