import MinecraftHeader from "@/components/MinecraftHeader";
import GameInterface from "@/components/GameInterface";
import MinecraftFooter from "@/components/MinecraftFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-800 flex flex-col font-mono">
      <MinecraftHeader />

      <main className="flex-1 p-2">
        <GameInterface />
      </main>

      <MinecraftFooter />
    </div>
  );
};

export default Index;
