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
    <div className="min-h-screen relative bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      {/* Animated gradient orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-accent/20 to-warning/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
