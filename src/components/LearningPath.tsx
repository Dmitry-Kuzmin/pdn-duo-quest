import { ModuleSection } from "@/components/ModuleSection";
import { trafficModules } from "@/data/trafficModules";

interface LearningPathProps {
  currentModule: number;
  currentLesson: number;
  onLessonClick: (moduleIdx: number, lessonIdx: number) => void;
}

export const LearningPath = ({ currentModule, currentLesson, onLessonClick }: LearningPathProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {trafficModules.map((module, moduleIdx) => (
        <ModuleSection
          key={moduleIdx}
          module={module}
          moduleIndex={moduleIdx}
          isUnlocked={moduleIdx <= currentModule}
          currentLesson={moduleIdx === currentModule ? currentLesson : -1}
          onLessonClick={(lessonIdx) => onLessonClick(moduleIdx, lessonIdx)}
        />
      ))}
    </div>
  );
};
