import { Card } from "@/components/ui/card";
import { Gift, Trophy, Flame, Gem, Star, Crown } from "lucide-react";
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

  const getRewardIcon = (type: string, claimed: boolean) => {
    const iconClass = claimed ? "w-8 h-8" : "w-10 h-10";
    
    if (type === "premium") return <Crown className={`${iconClass} text-yellow-400`} />;
    if (type === "special") return <Trophy className={`${iconClass} text-purple-400`} />;
    return <Gem className={`${iconClass} text-cyan-400`} />;
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 border-2 border-purple-300/50 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Gift className="w-8 h-8 text-purple-600 animate-bounce-subtle" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
            </div>
            <div>
              <h3 className="text-xl font-black text-foreground">Ежедневные награды</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-500 animate-glow-pulse" />
                Серия: {currentStreak} дня
              </p>
            </div>
          </div>
          <Star className="w-6 h-6 text-yellow-500 animate-spin-slow" />
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mb-4">
          {rewardData.map((item) => {
            const isToday = item.day === currentStreak + 1;
            const isClaimed = item.claimed;
            
            return (
              <button
                key={item.day}
                disabled={!isToday}
                className={`
                  relative aspect-square rounded-2xl p-2 transition-all duration-300
                  ${isClaimed 
                    ? "bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg" 
                    : isToday 
                      ? "bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl animate-glow-pulse scale-110" 
                      : "bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800"
                  }
                  ${isToday ? "ring-4 ring-purple-400/50 ring-offset-2 cursor-pointer hover:scale-115" : "cursor-not-allowed"}
                  flex flex-col items-center justify-center group
                `}
              >
                {/* Sparkle effects for today */}
                {isToday && (
                  <>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full animate-sparkle" style={{ animationDelay: "0.5s" }} />
                  </>
                )}
                
                <div className="text-[10px] font-bold text-white mb-1">
                  День {item.day}
                </div>
                
                <div className={`transition-transform ${isToday ? "group-hover:scale-110" : ""}`}>
                  {getRewardIcon(item.type, isClaimed)}
                </div>
                
                <div className="text-[10px] font-bold text-white mt-1">
                  {isClaimed ? "✓" : `+${item.reward}`}
                </div>

                {/* Premium badge for special days */}
                {(item.type === "premium" || item.type === "special") && !isClaimed && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-[8px] font-black text-white shadow-lg">
                    {item.type === "premium" ? "VIP" : "★"}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden mb-3">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full transition-all duration-500 relative overflow-hidden"
            style={{ width: `${(currentStreak / 7) * 100}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <p className="text-sm font-bold text-foreground mb-2">
            Приходи завтра за наградой! 🎁
          </p>
          <p className="text-xs text-muted-foreground">
            Не пропусти день, чтобы получить премиум награду на 7-й день!
          </p>
        </div>
      </div>
    </Card>
  );
};
