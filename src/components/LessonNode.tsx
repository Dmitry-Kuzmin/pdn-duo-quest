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
    if (!isUnlocked) return "bg-gray-300 text-gray-500 cursor-not-allowed border-4 border-gray-200";
    if (isCompleted) return "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 text-white cursor-pointer hover:scale-110 shadow-[0_20px_60px_-10px_rgba(251,191,36,0.6)] border-4 border-yellow-300 animate-glow-pulse";
    if (isActive) return "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white cursor-pointer hover:scale-110 ring-4 ring-blue-300 shadow-[0_25px_80px_-20px_rgba(59,130,246,0.7)] border-4 border-blue-400 animate-glow-pulse";
    return "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 cursor-pointer hover:scale-105 border-4 border-gray-300 shadow-lg hover:shadow-2xl transition-all duration-300";
  };

  const getCardStyle = () => {
    if (!isUnlocked) return "bg-gray-50 border-gray-200";
    if (isCompleted) return "bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 border-yellow-300 shadow-lg shadow-yellow-200/50";
    if (isActive) return "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-blue-300 shadow-xl shadow-blue-200/50 ring-2 ring-blue-300 animate-slide-up";
    return "bg-white border-gray-200 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300";
  };

  return (
    <div className="relative">
      {/* Start label for first lesson */}
      {lessonIndex === 0 && isActive && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
          <span className="px-4 py-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-[0_10px_30px_-5px_rgba(59,130,246,0.6)] animate-shimmer bg-[length:200%_100%]">
            Начать
          </span>
        </div>
      )}
      
      <div className={cn("flex items-center gap-6", align === "right" && "flex-row-reverse")}>
        {/* Info Card */}
        <Card className={cn(
          "flex-1 p-4 transition-all duration-300",
          getCardStyle(),
          align === "right" ? "text-right" : "text-left"
        )}>
          <div className="flex items-center gap-3" style={{ flexDirection: align === "right" ? "row-reverse" : "row" }}>
            <div className="flex-shrink-0">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center",
                !isUnlocked && "bg-gray-200",
                isCompleted && "bg-gradient-to-br from-yellow-400 to-orange-400",
                isActive && "bg-gradient-to-br from-blue-400 to-cyan-400",
                !isCompleted && !isActive && isUnlocked && "bg-gradient-to-br from-gray-200 to-gray-300"
              )}>
                {lesson.type === "story" && <BookOpen className="w-6 h-6 text-white" />}
                {lesson.type === "practice" && <Dumbbell className="w-6 h-6 text-white" />}
                {lesson.type === "checkpoint" && <Trophy className="w-6 h-6 text-white" />}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-foreground truncate">{lesson.title}</p>
              <p className="text-sm text-muted-foreground truncate">{lesson.subtitle}</p>
            </div>
          </div>
        </Card>
        
        {/* Lesson node button */}
        <button
          onClick={onClick}
          disabled={!isUnlocked}
          className={cn(
            "relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0",
            getNodeStyle()
          )}
        >
          {!isUnlocked && <Lock className="w-8 h-8" />}
          {isUnlocked && !isCompleted && getIcon()}
          {isCompleted && <CheckCircle2 className="w-10 h-10" />}
          
          {isActive && (
            <>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 animate-pulse" />
              <div className="absolute -inset-2 rounded-full border-4 border-blue-400/40 animate-ping" style={{ animationDuration: "2s" }} />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-sparkle shadow-lg" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-sparkle shadow-lg" style={{ animationDelay: "0.5s" }} />
            </>
          )}
          
          {isCompleted && (
            <>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-scale-in">
                <Star className="w-4 h-4 text-white" fill="currentColor" />
              </div>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
