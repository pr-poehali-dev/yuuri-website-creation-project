import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white">
            Добро пожаловать
          </CardTitle>
          <CardDescription className="text-gray-400">
            Войдите в свой аккаунт для продолжения
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-gray-200">
                  Пароль
                </Label>
                <a
                  href="#"
                  className="text-sm text-purple-400 hover:text-purple-300"
                >
                  Забыли пароль?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
              />
            </div>
          </div>

          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            <Icon name="LogIn" size={16} className="mr-2" />
            Войти
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-900 px-2 text-gray-500">или</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              <Icon name="Github" size={16} className="mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              <Icon name="Mail" size={16} className="mr-2" />
              Google
            </Button>
          </div>

          <p className="text-center text-sm text-gray-400">
            Нет аккаунта?{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              Зарегистрироваться
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
