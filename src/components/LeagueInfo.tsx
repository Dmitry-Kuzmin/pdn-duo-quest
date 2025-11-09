import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export const LeagueInfo = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">Золотая лига</h2>
        <button className="text-sm font-bold text-info hover:text-info/80 transition-colors">
          ОБЗОР ЛИГИ
        </button>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center">
          <Trophy className="w-8 h-8 text-warning" />
        </div>
        <p className="text-sm text-muted-foreground">
          Пройдите урок, чтобы войти в недельный рейтинг и сразиться с другими учащимися
        </p>
      </div>
    </Card>
  );
};
