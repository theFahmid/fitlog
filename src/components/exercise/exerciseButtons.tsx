"use client";
import { usePlannedExercise } from "@/contexts/planedExercise";
import { useSavedExercise } from "@/contexts/savedExercise";
import { WorkoutDataType } from "@/types/workout";

export default function ExerciseButtons(data: { data: WorkoutDataType }) {
  const { addSavedExercise } = useSavedExercise();
  const { addPlannedExercise } = usePlannedExercise();
  return (
    <div className="flex gap-4">
      <button
        className="btn btn-primary"
        onClick={() => {
          addPlannedExercise(data);
        }}
      >
        Add to today's plan
      </button>
      <button
        className="btn btn-outline"
        onClick={() => {
          addSavedExercise(data);
        }}
      >
        Save for later
      </button>
    </div>
  );
}
