import { LessonNode } from "@/components/LessonNode";
import { TrafficModule } from "@/data/trafficModules";
import { Card } from "@/components/ui/card";

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
    <div className="relative">
      <Card className={`p-6 mb-8 bg-gradient-to-r ${gradientColor} border-none`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
              Модуль {moduleIndex + 1}
            </p>
            <h2 className="text-2xl font-bold text-white">
              {module.title}
            </h2>
            <p className="text-white/90 text-sm mt-1">{module.description}</p>
          </div>
        </div>
      </Card>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 -z-10" />

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
