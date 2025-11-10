import { LessonNode } from "@/components/LessonNode";
import { TrafficModule } from "@/data/trafficModules";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface ModuleSectionProps {
  module: TrafficModule;
  moduleIndex: number;
  isUnlocked: boolean;
  currentLesson: number;
  onLessonClick: (lessonIdx: number) => void;
}

const moduleColors = [
  "from-blue-500 to-blue-600",
  "from-green-500 to-green-600",
  "from-purple-500 to-purple-600",
  "from-orange-500 to-orange-600",
  "from-pink-500 to-pink-600",
  "from-red-500 to-red-600",
  "from-teal-500 to-teal-600",
  "from-indigo-500 to-indigo-600",
  "from-yellow-500 to-yellow-600",
  "from-cyan-500 to-cyan-600",
];

export const ModuleSection = ({
  module,
  moduleIndex,
  isUnlocked,
  currentLesson,
  onLessonClick,
}: ModuleSectionProps) => {
  const gradientColor = moduleColors[moduleIndex % moduleColors.length];
  
  return (
    <div className="relative mb-12">
      {/* Module Header Card */}
      <Card className={`p-6 mb-8 bg-gradient-to-r ${gradientColor} border-none shadow-[0_25px_80px_-20px_rgba(0,0,0,0.4)] relative overflow-hidden animate-scale-in`}>
        {/* Premium background effects */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <p className="text-sm font-bold text-white/90 uppercase tracking-wider">
                Модуль {moduleIndex + 1}
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
              {module.title}
            </h2>
            <p className="text-white/90 text-sm mt-2 font-medium">{module.description}</p>
          </div>
          <button className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-2xl text-sm font-bold text-white transition-all backdrop-blur-sm border border-white/30 shadow-lg hover:scale-105 hover:shadow-2xl flex items-center gap-2 group">
            <BookOpen className="w-4 h-4 group-hover:animate-bounce-subtle" />
            СПРАВОЧНИК
          </button>
        </div>
      </Card>

      <div className="relative">
        {/* Connection line with gradient */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-border via-primary/30 to-border -translate-x-1/2 -z-10 shadow-lg" />
        <div className="absolute left-1/2 top-0 bottom-0 w-3 bg-gradient-to-b from-transparent via-primary/10 to-transparent -translate-x-1/2 -z-10 blur-sm" />

        <div className="space-y-6">
          {module.lessons.map((lesson, lessonIdx) => {
            const isLessonUnlocked = isUnlocked && lessonIdx <= currentLesson + 1;
            const isActive = isUnlocked && lessonIdx === currentLesson;
            const isCompleted = isUnlocked && lessonIdx < currentLesson;

            return (
              <LessonNode
                key={lessonIdx}
                lesson={lesson}
                lessonIndex={lessonIdx}
                isUnlocked={isLessonUnlocked}
                isActive={isActive}
                isCompleted={isCompleted}
                onClick={() => isLessonUnlocked && onLessonClick(lessonIdx)}
                align={lessonIdx % 2 === 0 ? "left" : "right"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
