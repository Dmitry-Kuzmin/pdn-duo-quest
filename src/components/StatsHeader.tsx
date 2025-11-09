import { Flame, Gem, Heart, Trophy } from "lucide-react";

export const StatsHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-card shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Обучение ПДД</h1>
          
          <div className="flex items-center gap-4">
            <StatItem icon={<Trophy className="w-5 h-5" />} value="10" color="text-warning" />
            <StatItem icon={<Flame className="w-5 h-5" />} value="0" color="text-muted-foreground" />
            <StatItem icon={<Gem className="w-5 h-5" />} value="4539" color="text-info" />
            <StatItem icon={<Heart className="w-5 h-5" />} value="∞" color="text-danger" />
          </div>
        </div>
      </div>
    </header>
  );
};

const StatItem = ({ icon, value, color }: { icon: React.ReactNode; value: string; color: string }) => {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-border">
      <span className={color}>{icon}</span>
      <span className="font-bold text-sm text-foreground">{value}</span>
    </div>
  );
};
