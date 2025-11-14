import { Trophy, ChevronRight } from "lucide-react";

export const LeagueInfo = () => {
  return (
    <div className="relative rounded-2xl p-6 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-lg">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl -z-10" />
      
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">Золотая лига</h2>
        <button className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
          ОБЗОР
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl blur-lg opacity-40" />
          <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
            <Trophy className="w-8 h-8 text-white" />
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Пройдите урок, чтобы войти в недельный рейтинг и сразиться с другими учащимися
        </p>
      </div>
    </div>
  );
};
