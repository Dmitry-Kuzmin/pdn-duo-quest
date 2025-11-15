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
  const todayReward = rewardData.find(r => r.day === currentStreak + 1)?.reward || 0;

  return (
    <div className="rounded-2xl p-6 bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-primary to-secondary rounded-xl">
            <Gift className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Ежедневные награды</h2>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Flame className="w-3.5 h-3.5 text-warning" />
              <span>{currentStreak} дня подряд</span>
            </div>
          </div>
        </div>
        {todayReward > 0 && (
          <div className="text-right">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              +{todayReward}
            </div>
            <div className="text-xs text-muted-foreground">сегодня</div>
          </div>
        )}
      </div>

      <div className="flex gap-2 mb-4">
        {rewardData.map((item) => {
          const isToday = item.day === currentStreak + 1;
          const isClaimed = item.claimed;
          
          return (
            <div
              key={item.day}
              className="flex-1 group"
            >
              <div
                className={`rounded-xl p-3 backdrop-blur-sm border transition-all ${
                  isClaimed
                    ? "bg-success/15 border-success/30"
                    : isToday
                      ? "bg-gradient-to-br from-primary/15 to-secondary/15 border-primary/30 cursor-pointer hover:scale-105"
                      : "bg-white/20 dark:bg-white/5 border-white/15"
                }`}
              >
                <div className={`text-center text-xs font-medium mb-1.5 ${
                  isClaimed ? "text-success" : isToday ? "text-foreground" : "text-muted-foreground"
                }`}>
                  День {item.day}
                </div>
                
                <div className={`text-center text-sm font-bold ${
                  isClaimed ? "text-success" : isToday ? "text-foreground" : "text-muted-foreground"
                }`}>
                  {isClaimed ? "✓" : `${item.reward}`}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative h-2 rounded-full bg-white/20 dark:bg-white/10 overflow-hidden">
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
          style={{ width: `${(currentStreak / 7) * 100}%` }}
        />
      </div>
      
      <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
        <span>{currentStreak}/7 дней</span>
        <span>До бонуса: {7 - currentStreak} дня</span>
      </div>
    </div>
  );
};
