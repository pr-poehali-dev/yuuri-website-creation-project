import Icon from "@/components/ui/icon";

const MinecraftFooter = () => {
  return (
    <footer className="w-full bg-stone-800 border-t-4 border-stone-900">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold text-green-400 mb-3">Игровые режимы</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors font-mono"
                >
                  Выживание
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors font-mono"
                >
                  Творчество
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors font-mono"
                >
                  Приключения
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-green-400 mb-3">Миры</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors font-mono"
                >
                  Мой мир
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors font-mono"
                >
                  Сервер друзей
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors font-mono"
                >
                  Публичные сервера
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-green-400 mb-3">Ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors font-mono"
                >
                  Гайды
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors font-mono"
                >
                  Моды
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors font-mono"
                >
                  Скины
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-green-400 mb-3">Сообщество</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors font-mono"
                >
                  Форум
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors font-mono"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors font-mono"
                >
                  Reddit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-stone-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-stone-900 p-2 border-2 border-stone-600 text-white font-mono">
              Координаты: X: 128, Y: 64, Z: -45
            </div>
            <div className="bg-stone-900 p-2 border-2 border-stone-600 text-white font-mono">
              Биом: Равнины
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-gray-400 font-mono">
              MineCraft Web © 2024
            </span>
            <Icon name="Mountain" size={16} className="text-green-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MinecraftFooter;
