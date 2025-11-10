import { useState } from "react";
import { LearningPath } from "@/components/LearningPath";
import { StatsHeader } from "@/components/StatsHeader";
import { DailyChallenges } from "@/components/DailyChallenges";
import { LeagueInfo } from "@/components/LeagueInfo";
import { DailyRewards } from "@/components/DailyRewards";

const Index = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <StatsHeader />
      
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Daily Rewards - Full Width Premium Section */}
        <div className="mb-8">
          <DailyRewards />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6">
          {/* Main learning path */}
          <div className="order-2 lg:order-1">
            <LearningPath 
              currentModule={currentModule}
              currentLesson={currentLesson}
              onLessonClick={(moduleIdx, lessonIdx) => {
                setCurrentModule(moduleIdx);
                setCurrentLesson(lessonIdx);
              }}
            />
          </div>

          {/* Sidebar */}
          <div className="order-1 lg:order-2 space-y-4">
            <LeagueInfo />
            <DailyChallenges />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
