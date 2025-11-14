import { LessonNode } from "@/components/LessonNode";
import { TrafficModule } from "@/data/trafficModules";

interface ModuleSectionProps {
  module: TrafficModule;
  moduleIndex: number;
  isUnlocked: boolean;
  currentLesson: number;
  onLessonClick: (lessonIdx: number) => void;
}

const moduleGradients = [
  "from-purple-500 via-blue-500 to-cyan-500",
  "from-pink-500 via-rose-500 to-orange-500",
  "from-green-500 via-teal-500 to-cyan-500",
  "from-yellow-500 via-orange-500 to-red-500",
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-cyan-500 via-blue-500 to-indigo-500",
  "from-rose-500 via-pink-500 to-fuchsia-500",
  "from-amber-500 via-yellow-500 to-lime-500",
  "from-teal-500 via-green-500 to-emerald-500",
  "from-violet-500 via-purple-500 to-indigo-500",
];

export const ModuleSection = ({
  module,
  moduleIndex,
  isUnlocked,
  currentLesson,
  onLessonClick,
}: ModuleSectionProps) => {
  const gradient = moduleGradients[moduleIndex % moduleGradients.length];
  
  return (
    <div className="relative">
      {/* Module Header */}
      <div className="relative rounded-3xl p-8 mb-12 bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/20 shadow-xl overflow-hidden">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`} />
        
        <div className="relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-xl border border-white/30 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">
              Модуль {moduleIndex + 1}
            </span>
          </div>
          <h2 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {module.title}
          </h2>
          <p className="text-muted-foreground">{module.description}</p>
        </div>
      </div>

      {/* Lessons */}
      <div className="relative space-y-8">
        {/* Connection line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-primary/30 to-border -translate-x-1/2 -z-10" />

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
  );
};
