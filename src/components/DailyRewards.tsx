import { Card } from "@/components/ui/card";
import { Gift, Flame, Crown, Sparkles, Star, Zap } from "lucide-react";
import { useState } from "react";

const rewardData = [
  { day: 1, reward: 10, type: "gems", claimed: true },
  { day: 2, reward: 15, type: "gems", claimed: true },
  { day: 3, reward: 20, type: "gems", claimed: true },
  { day: 4, reward: 25, type: "gems", claimed: false },
  { day: 5, reward: 50, type: "special", claimed: false },
  { day: 6, reward: 30, type: "gems", claimed: false },
  { day: 7, reward: 100, type: "premium", claimed: false },
];

export const DailyRewards = () => {
  const [currentStreak] = useState(3);

  return (
    <Card className="p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-none shadow-[0_25px_80px_-20px_rgba(0,0,0,0.15)] relative overflow-hidden backdrop-blur-sm">
      {/* Premium background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-accent/5 via-transparent to-primary/5 animate-rotate-slow" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-warning rounded-2xl blur-xl opacity-60 animate-glow-pulse" />
              <div className="relative p-4 bg-gradient-to-br from-accent via-warning to-accent rounded-2xl shadow-2xl">
                <Gift className="w-8 h-8 text-white" />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-white animate-sparkle" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black text-foreground mb-1">Ежедневные награды</h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-warning/20 to-accent/20 rounded-full border border-warning/30">
                  <Flame className="w-4 h-4 text-warning animate-bounce-subtle" />
                  <span className="text-sm font-bold text-foreground">Серия: {currentStreak} дня</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-foreground">+{rewardData[currentStreak - 1]?.reward || 0} гемов</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-warning to-accent rounded-2xl blur-lg opacity-50" />
            <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-warning via-accent to-warning rounded-2xl border-2 border-white/20 shadow-2xl">
              <Crown className="w-5 h-5 text-white animate-bounce-subtle" />
              <span className="text-base font-black text-white">VIP СТАТУС</span>
            </div>
          </div>
        </div>

        {/* Rewards Grid - Larger, More Spacious */}
        <div className="grid grid-cols-7 gap-6 mb-8">
          {rewardData.map((item) => {
            const isToday = item.day === currentStreak + 1;
            const isClaimed = item.claimed;
            
            return (
              <div
                key={item.day}
                className={`relative group transition-all duration-500 ${
                  isClaimed ? "scale-100" : isToday ? "scale-105" : "scale-95 hover:scale-100"
                }`}
              >
                {/* Glow effect for active/claimed rewards */}
                {(isClaimed || isToday) && (
                  <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-40 ${
                    item.type === "premium"
                      ? "bg-gradient-to-br from-warning via-accent to-warning animate-glow-pulse" 
                      : item.type === "special"
                      ? "bg-gradient-to-br from-secondary to-primary animate-glow-pulse"
                      : "bg-gradient-to-br from-success to-primary"
                  }`} />
                )}
                
                <div
                  className={`relative aspect-square rounded-3xl flex flex-col items-center justify-center transition-all p-6 ${
                    isClaimed
                      ? "bg-gradient-to-br from-success/30 to-primary/30 border-4 border-success shadow-[0_20px_40px_-10px_rgba(34,197,94,0.4)]"
                      : isToday
                        ? item.type === "premium"
                          ? "bg-gradient-to-br from-warning via-accent to-warning shadow-[0_20px_60px_-10px_rgba(251,191,36,0.6)] border-4 border-white/30 cursor-pointer"
                          : item.type === "special"
                          ? "bg-gradient-to-br from-secondary via-primary to-secondary shadow-[0_20px_60px_-10px_rgba(59,130,246,0.6)] border-4 border-white/30 cursor-pointer"
                          : "bg-gradient-to-br from-primary via-success to-primary shadow-[0_20px_60px_-10px_rgba(34,197,94,0.6)] border-4 border-white/30 cursor-pointer"
                        : "bg-muted/50 border-2 border-border/50 hover:border-border"
                  }`}
                >
                  {/* Sparkles for active/claimed */}
                  {(isClaimed || isToday) && (
                    <>
                      <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-warning animate-sparkle" />
                      <Sparkles className="absolute -bottom-1 -left-1 w-4 h-4 text-warning animate-sparkle" style={{ animationDelay: "0.5s" }} />
                    </>
                  )}
                  
                  {/* Special badge for premium/special days */}
                  {(item.type === "premium" || item.type === "special") && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full shadow-lg">
                        {item.type === "premium" ? (
                          <>
                            <Crown className="w-3 h-3 text-warning fill-warning animate-sparkle" />
                            <span className="text-xs font-black text-warning">VIP</span>
                          </>
                        ) : (
                          <>
                            <Star className="w-3 h-3 text-secondary fill-secondary animate-sparkle" />
                            <span className="text-xs font-black text-secondary">БОНУС</span>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Day number */}
                  <div className={`text-4xl font-black mb-2 ${
                    isClaimed || isToday ? "text-white" : "text-muted-foreground"
                  }`}>
                    {item.day}
                  </div>
                  
                  {/* Day label */}
                  <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                    isClaimed || isToday ? "text-white/70" : "text-muted-foreground"
                  }`}>
                    День
                  </div>
                  
                  {/* Reward amount or checkmark */}
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                    isClaimed 
                      ? "bg-white/30 backdrop-blur-sm"
                      : isToday
                        ? "bg-white/30 backdrop-blur-sm"
                        : "bg-muted"
                  }`}>
                    {isClaimed ? (
                      <span className="text-2xl">✓</span>
                    ) : (
                      <>
                        <Gift className={`w-5 h-5 ${
                          isToday ? "text-white" : "text-muted-foreground"
                        }`} />
                        <span className={`text-xl font-black ${
                          isToday ? "text-white" : "text-muted-foreground"
                        }`}>
                          {item.reward}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Bar - Larger and More Premium */}
        <div className="space-y-4">
          <div className="relative h-4 bg-muted/50 rounded-full overflow-hidden border border-border/50 shadow-inner">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-success via-primary to-secondary rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-1000"
              style={{ 
                width: `${(currentStreak / 7) * 100}%`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" style={{ backgroundSize: "200% 100%" }} />
            </div>
            {/* Progress markers */}
            <div className="absolute inset-0 flex items-center justify-between px-1">
              {[...Array(7)].map((_, i) => (
                <div key={i} className={`w-1 h-full ${i < currentStreak ? "bg-transparent" : "bg-border/30"}`} />
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-muted-foreground">
              Прогресс: <span className="text-foreground">{currentStreak}/7 дней</span>
            </p>
            <p className="text-sm font-bold text-primary">
              Еще {7 - currentStreak} {7 - currentStreak === 1 ? "день" : "дня"} до VIP бонуса 🎁
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
