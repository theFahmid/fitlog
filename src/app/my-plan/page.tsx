"use client";

import { usePlannedExercise } from "@/contexts/planedExercise";
import { useSavedExercise } from "@/contexts/savedExercise";
import { WorkoutDataType } from "@/types/workout";

export default function PlanPage() {
  const { savedExerciseData }: { savedExerciseData: WorkoutDataType[] } =
    useSavedExercise();
  const { plannedExerciseData }: { plannedExerciseData: WorkoutDataType[] } =
    usePlannedExercise();
  return (
    <>
      <h1>My Plan</h1>
      <p>Cap of five lifts for today. Finish them, then load more.</p>
      <div>...</div>
      <div>
        {savedExerciseData.map((item, ind) => (
          <p key={ind}>{item.name}Hi</p>
        ))}
      </div>
      <div>
        {plannedExerciseData.length === 0 ? (
          <p>No exercises planned yet.</p>
        ) : (
          plannedExerciseData.map((item, ind) => <p key={ind}>{JSON.stringify(item)}</p>)
        )}
      </div>
    </>
  );
}
