import { Gift, Flame } from "lucide-react";
import { useState } from "react";

const rewardData = [
  { day: 1, reward: 10, claimed: true },
  { day: 2, reward: 15, claimed: true },
  { day: 3, reward: 20, claimed: true },
  { day: 4, reward: 25, claimed: false },
  { day: 5, reward: 50, claimed: false },
  { day: 6, reward: 30, claimed: false },
  { day: 7, reward: 100, claimed: false },
];

export const DailyRewards = () => {
  const [currentStreak] = useState(3);

  return (
    <div className="relative rounded-3xl p-8 bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/20 shadow-xl">
      {/* Gradient background orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/20 to-warning/20 rounded-full blur-3xl -z-10" />
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-lg opacity-50" />
            <div className="relative p-3 bg-gradient-to-br from-primary to-secondary rounded-2xl">
              <Gift className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-1">Ежедневные награды</h2>
            <div className="flex items-center gap-2 text-sm">
              <Flame className="w-4 h-4 text-warning" />
              <span className="text-muted-foreground">Серия: <span className="font-semibold text-foreground">{currentStreak} дня</span></span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {rewardData[currentStreak - 1]?.reward || 0}
          </div>
          <div className="text-xs text-muted-foreground">гемов сегодня</div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 mb-6">
        {rewardData.map((item) => {
          const isToday = item.day === currentStreak + 1;
          const isClaimed = item.claimed;
          
          return (
            <div
              key={item.day}
              className={`relative group transition-all duration-300 ${
                isToday ? "scale-105" : ""
              }`}
            >
              {/* Glow effect for today */}
              {isToday && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-60 animate-pulse" />
              )}
              
              <div
                className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center p-4 backdrop-blur-xl border transition-all ${
                  isClaimed
                    ? "bg-success/20 border-success/30"
                    : isToday
                      ? "bg-gradient-to-br from-primary/20 to-secondary/20 border-white/30 cursor-pointer hover:scale-110"
                      : "bg-white/30 dark:bg-white/5 border-white/20"
                }`}
              >
                <div className={`text-2xl font-bold mb-2 ${
                  isClaimed ? "text-success" : isToday ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {item.day}
                </div>
                
                <div className={`flex items-center gap-1 text-xs font-semibold ${
                  isClaimed ? "text-success" : isToday ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {isClaimed ? (
                    <span className="text-lg">✓</span>
                  ) : (
                    <>
                      <Gift className="w-3 h-3" />
                      <span>{item.reward}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-3">
        <div className="relative h-3 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-xl overflow-hidden border border-white/20">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-700"
            style={{ width: `${(currentStreak / 7) * 100}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{currentStreak}/7 дней</span>
          <span className="font-medium text-foreground">Еще {7 - currentStreak} {7 - currentStreak === 1 ? "день" : "дня"} до бонуса</span>
        </div>
      </div>
    </div>
  );
};
