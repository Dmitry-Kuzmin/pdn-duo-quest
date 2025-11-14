import { Lock, Trophy, Dumbbell, BookOpen, Check, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { Lesson } from "@/data/trafficModules";

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
    if (lesson.type === "practice") return Dumbbell;
    if (lesson.type === "checkpoint") return Trophy;
    return BookOpen;
  };

  const Icon = getIcon();

  return (
    <div className="relative">
      {/* Start badge */}
      {lessonIndex === 0 && isActive && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-60" />
            <div className="relative px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Начать</span>
            </div>
          </div>
        </div>
      )}
      
      <div className={cn("flex items-center gap-6", align === "right" && "flex-row-reverse")}>
        {/* Info Card */}
        <div className={cn(
          "flex-1 relative rounded-2xl p-5 transition-all duration-300",
          "bg-white/40 dark:bg-white/5 backdrop-blur-xl border shadow-lg",
          !isUnlocked && "opacity-50",
          isActive && "border-primary/50 shadow-primary/20",
          isCompleted && "border-success/50 shadow-success/20",
          !isActive && !isCompleted && isUnlocked && "border-white/20 hover:border-primary/30",
          align === "right" ? "text-right" : "text-left"
        )}>
          {/* Gradient overlay for active */}
          {isActive && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl" />
          )}
          {isCompleted && (
            <div className="absolute inset-0 bg-success/5 rounded-2xl" />
          )}
          
          <div className="relative flex items-center gap-4" style={{ flexDirection: align === "right" ? "row-reverse" : "row" }}>
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all",
              !isUnlocked && "bg-muted/50",
              isCompleted && "bg-gradient-to-br from-success to-success/80",
              isActive && "bg-gradient-to-br from-primary to-secondary",
              !isCompleted && !isActive && isUnlocked && "bg-gradient-to-br from-muted to-muted/80"
            )}>
              <Icon className={cn(
                "w-5 h-5",
                (isCompleted || isActive) ? "text-white" : "text-muted-foreground"
              )} />
            </div>
            <div className="flex-1 min-w-0">
              <p className={cn(
                "text-base font-semibold truncate",
                isActive && "text-foreground",
                isCompleted && "text-foreground",
                !isActive && !isCompleted && "text-foreground"
              )}>
                {lesson.title}
              </p>
              <p className="text-sm text-muted-foreground truncate">{lesson.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Node Button */}
        <button
          onClick={onClick}
          disabled={!isUnlocked}
          className={cn(
            "relative w-16 h-16 rounded-full flex items-center justify-center transition-all flex-shrink-0 z-10",
            "backdrop-blur-xl border-4",
            !isUnlocked && "bg-muted/30 border-border cursor-not-allowed",
            isCompleted && "bg-gradient-to-br from-success to-success/80 border-success/30 hover:scale-110 shadow-lg shadow-success/20",
            isActive && "bg-gradient-to-br from-primary via-secondary to-accent border-white/30 hover:scale-110 shadow-xl shadow-primary/30 animate-pulse",
            !isCompleted && !isActive && isUnlocked && "bg-white/40 dark:bg-white/10 border-white/30 hover:border-primary/50 hover:scale-110"
          )}
        >
          {/* Glow effect for active */}
          {isActive && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50 animate-pulse" />
          )}
          
          <div className="relative">
            {!isUnlocked && <Lock className="w-6 h-6 text-muted-foreground" />}
            {isCompleted && <Check className="w-7 h-7 text-white" strokeWidth={3} />}
            {isActive && <Play className="w-7 h-7 text-white" fill="white" />}
            {!isCompleted && !isActive && isUnlocked && <Icon className="w-6 h-6 text-foreground" />}
          </div>
        </button>
      </div>
    </div>
  );
};
