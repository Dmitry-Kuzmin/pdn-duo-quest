import { Star, Lock, Trophy, Dumbbell, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Lesson } from "@/data/trafficModules";

interface LessonNodeProps {
  lesson: Lesson;
  isUnlocked: boolean;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
  align: "left" | "right";
}

export const LessonNode = ({
  lesson,
  isUnlocked,
  isActive,
  isCompleted,
  onClick,
  align,
}: LessonNodeProps) => {
  const getIcon = () => {
    if (lesson.type === "story") return <Star className="w-6 h-6" />;
    if (lesson.type === "practice") return <Dumbbell className="w-6 h-6" />;
    if (lesson.type === "checkpoint") return <Trophy className="w-6 h-6" />;
    return <Star className="w-6 h-6" />;
  };

  const getNodeStyle = () => {
    if (!isUnlocked) return "bg-lesson-locked text-muted-foreground cursor-not-allowed";
    if (isCompleted) return "bg-lesson-completed text-primary-foreground cursor-pointer hover:scale-110";
    if (isActive) return "bg-lesson-active text-secondary-foreground cursor-pointer hover:scale-110 ring-4 ring-lesson-active/30";
    return "bg-card text-foreground cursor-pointer hover:scale-105 border-2 border-border";
  };

  return (
    <div className={cn("flex items-center gap-4", align === "right" && "flex-row-reverse")}>
      {/* Spacer for alignment */}
      <div className="flex-1" />
      
      {/* Lesson node */}
      <button
        onClick={onClick}
        disabled={!isUnlocked}
        className={cn(
          "relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg",
          getNodeStyle()
        )}
      >
        {!isUnlocked && <Lock className="w-6 h-6" />}
        {isUnlocked && !isCompleted && getIcon()}
        {isCompleted && <CheckCircle2 className="w-8 h-8" />}
        
        {isActive && (
          <div className="absolute inset-0 rounded-full bg-lesson-active/20 animate-pulse" />
        )}
      </button>

      {/* Lesson info */}
      <div className={cn("flex-1", align === "right" && "text-right")}>
        <p className="text-sm font-bold text-foreground">{lesson.title}</p>
        <p className="text-xs text-muted-foreground">{lesson.subtitle}</p>
      </div>
    </div>
  );
};
