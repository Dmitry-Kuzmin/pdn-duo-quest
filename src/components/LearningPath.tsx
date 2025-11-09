import { Card } from "@/components/ui/card";
import { ModuleSection } from "@/components/ModuleSection";
import { trafficModules } from "@/data/trafficModules";

interface LearningPathProps {
  currentModule: number;
  currentLesson: number;
  onLessonClick: (moduleIdx: number, lessonIdx: number) => void;
}

export const LearningPath = ({ currentModule, currentLesson, onLessonClick }: LearningPathProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-6 mb-6 bg-gradient-to-r from-secondary to-secondary/80">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-secondary-foreground/80 mb-1">
              МОДУЛЬ {currentModule + 1}
            </p>
            <h2 className="text-2xl font-bold text-secondary-foreground">
              {trafficModules[currentModule].title}
            </h2>
          </div>
          <button className="px-4 py-2 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded-xl text-sm font-bold text-secondary-foreground transition-colors backdrop-blur-sm">
            СПРАВОЧНИК
          </button>
        </div>
      </Card>

      <div className="space-y-8">
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

      <div className="mt-12 text-center py-8">
        <p className="text-muted-foreground text-sm">
          Используйте настоящее время для привычек
        </p>
      </div>
    </div>
  );
};
