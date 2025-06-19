import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-800 bg-gray-950">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-semibold text-white">AuthFlow</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Продукт
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Решения
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Ресурсы
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Цены
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Поддержка
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
