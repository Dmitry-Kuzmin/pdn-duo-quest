import { Lock, Trophy, Dumbbell, BookOpen, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Lesson } from "@/data/trafficModules";
import { Card } from "@/components/ui/card";

interface LessonNodeProps {
  lesson: Lesson;
  lessonIndex: number;
  isUnlocked: boolean;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
  align: "left" | "right";
}

export const LessonNode = ({
  lesson,
  lessonIndex,
  isUnlocked,
  isActive,
  isCompleted,
  onClick,
  align,
}: LessonNodeProps) => {
  const getIcon = () => {
    if (lesson.type === "practice") return <Dumbbell className="w-5 h-5" />;
    if (lesson.type === "checkpoint") return <Trophy className="w-5 h-5" />;
    return <BookOpen className="w-5 h-5" />;
  };

  return (
    <div className="relative">
      {lessonIndex === 0 && isActive && (
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            Начать
          </span>
        </div>
      )}
      
      <div className={cn("flex items-center gap-4", align === "right" && "flex-row-reverse")}>
        <Card className={cn(
          "flex-1 p-4 transition-all",
          !isUnlocked && "opacity-50",
          isActive && "border-primary shadow-lg",
          isCompleted && "bg-success/5 border-success/20",
          align === "right" ? "text-right" : "text-left"
        )}>
          <div className="flex items-center gap-3" style={{ flexDirection: align === "right" ? "row-reverse" : "row" }}>
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
              !isUnlocked && "bg-muted",
              isCompleted && "bg-success text-success-foreground",
              isActive && "bg-primary text-primary-foreground",
              !isCompleted && !isActive && isUnlocked && "bg-muted"
            )}>
              {getIcon()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">{lesson.title}</p>
              <p className="text-xs text-muted-foreground truncate">{lesson.subtitle}</p>
            </div>
          </div>
        </Card>

        <button
          onClick={onClick}
          disabled={!isUnlocked}
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center transition-all flex-shrink-0 border-4",
            !isUnlocked && "bg-muted border-border cursor-not-allowed",
            isCompleted && "bg-success border-success/30 hover:scale-110",
            isActive && "bg-primary border-primary/30 hover:scale-110",
            !isCompleted && !isActive && isUnlocked && "bg-card border-border hover:border-primary hover:scale-105"
          )}
        >
          {!isUnlocked && <Lock className="w-5 h-5 text-muted-foreground" />}
          {isCompleted && <Check className="w-6 h-6 text-success-foreground" />}
          {isActive && getIcon()}
          {!isCompleted && !isActive && isUnlocked && getIcon()}
        </button>
      </div>
    </div>
  );
};
