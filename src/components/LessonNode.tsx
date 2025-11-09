import { Star, Lock, Trophy, Dumbbell, CheckCircle2, BookOpen } from "lucide-react";
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
    if (lesson.type === "story") return <Star className="w-7 h-7" />;
    if (lesson.type === "practice") return <Dumbbell className="w-7 h-7" />;
    if (lesson.type === "checkpoint") return <Trophy className="w-7 h-7" />;
    return <Star className="w-7 h-7" />;
  };

  const getNodeStyle = () => {
    if (!isUnlocked) return "bg-gray-300 text-gray-500 cursor-not-allowed border-4 border-gray-200 opacity-60";
    if (isCompleted) return "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 text-white cursor-pointer hover:scale-110 shadow-2xl border-4 border-yellow-300 animate-bounce-in";
    if (isActive) return "bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 text-white cursor-pointer hover:scale-110 shadow-2xl border-4 border-blue-400 animate-pulse-glow";
    return "bg-gradient-to-br from-green-400 to-emerald-500 text-white cursor-pointer hover:scale-105 border-4 border-green-300 shadow-lg hover:shadow-xl";
  };

  const getCardStyle = () => {
    if (!isUnlocked) return "bg-gray-50 border-gray-200 opacity-60";
    if (isCompleted) return "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 shadow-lg";
    if (isActive) return "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-300 shadow-xl ring-2 ring-blue-300 animate-bounce-in";
    return "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-md hover:shadow-lg hover:border-green-300";
  };

  return (
    <div className="relative">
      {/* Start label for first lesson */}
      {lessonIndex === 0 && isActive && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 animate-bounce-in">
          <span className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-black rounded-full uppercase tracking-wider shadow-xl border-2 border-white animate-float">
            НАЧАТЬ
          </span>
        </div>
      )}

      {/* Sparkles for active lesson */}
      {isActive && (
        <>
          <div className="absolute -top-6 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-sparkle" style={{ animationDelay: "0s" }} />
          <div className="absolute -top-4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-sparkle" style={{ animationDelay: "0.5s" }} />
          <div className="absolute -bottom-6 left-1/3 w-2.5 h-2.5 bg-pink-400 rounded-full animate-sparkle" style={{ animationDelay: "1s" }} />
        </>
      )}

      {/* Fire trail for completed lessons */}
      {isCompleted && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-2 rounded-full animate-fire-trail opacity-60" />
      )}
      
      <div className={cn("flex items-center gap-6", align === "right" && "flex-row-reverse")}>
        {/* Info Card */}
        <Card className={cn(
          "flex-1 p-4 transition-all duration-300 hover:scale-[1.02]",
          getCardStyle(),
          align === "right" ? "text-right" : "text-left"
        )}>
          <div className="flex items-center gap-3" style={{ flexDirection: align === "right" ? "row-reverse" : "row" }}>
            <div className="flex-shrink-0">
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md",
                !isUnlocked && "bg-gray-200",
                isCompleted && "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 shadow-yellow-300/50",
                isActive && "bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 shadow-blue-300/50 animate-pulse",
                !isCompleted && !isActive && isUnlocked && "bg-gradient-to-br from-green-400 to-emerald-500 shadow-green-300/50"
              )}>
                {lesson.type === "story" && <BookOpen className="w-7 h-7 text-white drop-shadow-md" />}
                {lesson.type === "practice" && <Dumbbell className="w-7 h-7 text-white drop-shadow-md" />}
                {lesson.type === "checkpoint" && <Trophy className="w-7 h-7 text-white drop-shadow-md" />}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-black text-foreground truncate">{lesson.title}</p>
              <p className="text-sm font-medium text-muted-foreground truncate">{lesson.subtitle}</p>
            </div>
          </div>
        </Card>
        
        {/* Lesson node button */}
        <button
          onClick={onClick}
          disabled={!isUnlocked}
          className={cn(
            "relative w-28 h-28 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0",
            getNodeStyle()
          )}
        >
          {!isUnlocked && <Lock className="w-10 h-10 opacity-60" />}
          {isUnlocked && !isCompleted && getIcon()}
          {isCompleted && (
            <>
              <CheckCircle2 className="w-12 h-12 drop-shadow-lg" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-20 blur-xl" />
            </>
          )}
          
          {isActive && (
            <>
              <div className="absolute inset-0 rounded-full bg-blue-400/40 animate-pulse" />
              <div className="absolute -inset-3 rounded-full border-4 border-blue-400/50 animate-ping" style={{ animationDuration: "2s" }} />
              <div className="absolute -inset-6 rounded-full border-2 border-cyan-400/30 animate-ping" style={{ animationDuration: "3s" }} />
            </>
          )}

          {/* Glow effect for unlocked but not started */}
          {isUnlocked && !isActive && !isCompleted && (
            <div className="absolute inset-0 rounded-full bg-green-400/20 blur-md" />
          )}
        </button>
      </div>
    </div>
  );
};
