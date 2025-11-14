import { Progress } from "@/components/ui/progress";
import { Zap, Target, SmilePlus, ChevronRight } from "lucide-react";

export const DailyChallenges = () => {
  const challenges = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Получите 10 очков опыта",
      progress: 0,
      total: 10,
      reward: "🏆",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Пройдите 1 урок с результатом 90% или выше",
      progress: 0,
      total: 1,
      reward: "🎯",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <SmilePlus className="w-5 h-5" />,
      title: "Дайте 5 верных ответов подряд в 2 уроках",
      progress: 0,
      total: 2,
      reward: "🏅",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="relative rounded-2xl p-6 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg">
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl -z-10" />
      
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-bold text-foreground">Задания дня</h2>
        <button className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
          ВСЕ
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-4">
        {challenges.map((challenge, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className={`relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${challenge.gradient}`}>
              <span className="text-white">{challenge.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground mb-2 leading-tight">{challenge.title}</p>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <Progress value={(challenge.progress / challenge.total) * 100} className="h-2" />
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap font-semibold">
                  {challenge.progress}/{challenge.total}
                </span>
                <span className="text-lg">{challenge.reward}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
