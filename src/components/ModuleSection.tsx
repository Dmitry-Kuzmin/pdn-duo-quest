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
      <Card className={`p-6 mb-8 bg-gradient-to-r ${gradientColor} border-none shadow-xl`}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-bold text-white/90 uppercase tracking-wider mb-2">
              Модуль {moduleIndex + 1}
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              {module.title}
            </h2>
            <p className="text-white/80 text-sm mt-2">{module.description}</p>
          </div>
          <button className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-2xl text-sm font-bold text-white transition-all backdrop-blur-sm border border-white/30 shadow-lg hover:scale-105 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            СПРАВОЧНИК
          </button>
        </div>
      </Card>

      <div className="relative">
        {/* Animated connection road */}
        <div className="absolute left-1/2 top-0 bottom-0 w-3 -translate-x-1/2 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-full animate-pulse" style={{ animationDuration: "3s" }} />
        </div>

        <div className="space-y-8">
          {module.lessons.map((lesson, lessonIdx) => {
            const isLessonUnlocked = isUnlocked && lessonIdx <= currentLesson + 1;
            const isActive = isUnlocked && lessonIdx === currentLesson;
            const isCompleted = isUnlocked && lessonIdx < currentLesson;

            return (
              <div key={lessonIdx} className="relative">
                <LessonNode
                  lesson={lesson}
                  lessonIndex={lessonIdx}
                  isUnlocked={isLessonUnlocked}
                  isActive={isActive}
                  isCompleted={isCompleted}
                  onClick={() => isLessonUnlocked && onLessonClick(lessonIdx)}
                  align={lessonIdx % 2 === 0 ? "left" : "right"}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
