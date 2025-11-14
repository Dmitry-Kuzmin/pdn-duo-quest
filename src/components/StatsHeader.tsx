import { Flame, Gem, Heart, Trophy } from "lucide-react";

export const StatsHeader = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/40 dark:bg-gray-900/40 border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Обучение ПДД
          </h1>
          
          <div className="flex items-center gap-3">
            <StatItem icon={<Trophy className="w-4 h-4" />} value="10" gradient="from-yellow-500 to-orange-500" />
            <StatItem icon={<Flame className="w-4 h-4" />} value="0" gradient="from-orange-500 to-red-500" />
            <StatItem icon={<Gem className="w-4 h-4" />} value="4539" gradient="from-cyan-500 to-blue-500" />
            <StatItem icon={<Heart className="w-4 h-4" />} value="∞" gradient="from-pink-500 to-rose-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

const StatItem = ({ icon, value, gradient }: { icon: React.ReactNode; value: string; gradient: string }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
      <span className={`bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}>{icon}</span>
      <span className="font-bold text-sm text-foreground">{value}</span>
    </div>
  );
};
