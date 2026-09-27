"use client";
import { usePlannedExercise } from "@/contexts/plannedExercise";
import { useSavedExercise } from "@/contexts/savedExercise";
import { WorkoutDataType } from "@/types/workout";
import { FaBookmark, FaCalendar } from "react-icons/fa";
import { Flip, toast } from "react-toastify";

export default function ExerciseButtons({ data }: { data: WorkoutDataType }) {
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
        <FaCalendar/> Add to today's plan
      </button>
      <button
        className="btn btn-outline"
        onClick={() => {
          addSavedExercise(data);
        }}
      >
         <FaBookmark/> Save for later
      </button>
    </div>
  );
}
