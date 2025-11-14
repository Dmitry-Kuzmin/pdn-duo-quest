import { Card } from "@/components/ui/card";
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
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Gift className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Ежедневные награды</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Flame className="w-4 h-4 text-warning" />
              <span>Серия: {currentStreak} дня</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-foreground">{rewardData[currentStreak - 1]?.reward || 0}</div>
          <div className="text-xs text-muted-foreground">гемов сегодня</div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-3 mb-4">
        {rewardData.map((item) => {
          const isToday = item.day === currentStreak + 1;
          const isClaimed = item.claimed;
          
          return (
            <div
              key={item.day}
              className={`relative aspect-square rounded-xl flex flex-col items-center justify-center p-3 transition-all ${
                isClaimed
                  ? "bg-success/10 border-2 border-success/20"
                  : isToday
                    ? "bg-primary border-2 border-primary cursor-pointer hover:scale-105"
                    : "bg-muted/50 border border-border/50"
              }`}
            >
              <div className={`text-2xl font-bold mb-1 ${
                isClaimed || isToday ? "text-foreground" : "text-muted-foreground"
              }`}>
                {item.day}
              </div>
              
              <div className={`flex items-center gap-1 text-xs font-semibold ${
                isClaimed ? "text-success" : isToday ? "text-primary-foreground" : "text-muted-foreground"
              }`}>
                {isClaimed ? (
                  <span>✓</span>
                ) : (
                  <>
                    <Gift className="w-3 h-3" />
                    <span>{item.reward}</span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-2">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-success to-primary transition-all duration-500"
            style={{ width: `${(currentStreak / 7) * 100}%` }}
          />
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{currentStreak}/7 дней</span>
          <span>Еще {7 - currentStreak} {7 - currentStreak === 1 ? "день" : "дня"} до бонуса</span>
        </div>
      </div>
    </Card>
  );
};
