import { LessonNode } from "@/components/LessonNode";
import { TrafficModule } from "@/data/trafficModules";

interface ModuleSectionProps {
  module: TrafficModule;
  moduleIndex: number;
  isUnlocked: boolean;
  currentLesson: number;
  onLessonClick: (lessonIdx: number) => void;
}

export const ModuleSection = ({
  module,
  moduleIndex,
  isUnlocked,
  currentLesson,
  onLessonClick,
}: ModuleSectionProps) => {
  return (
    <div className="relative">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
          Модуль {moduleIndex + 1}
        </h3>
        <h2 className="text-xl font-bold text-foreground">{module.title}</h2>
      </div>

      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 -z-10" />

        <div className="space-y-8">
          {module.lessons.map((lesson, lessonIdx) => {
            const isLessonUnlocked = isUnlocked && lessonIdx <= currentLesson + 1;
            const isActive = isUnlocked && lessonIdx === currentLesson;
            const isCompleted = isUnlocked && lessonIdx < currentLesson;

            return (
              <LessonNode
                key={lessonIdx}
                lesson={lesson}
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
