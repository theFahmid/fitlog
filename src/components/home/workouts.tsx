"use server";

import { WorkoutDataType } from "@/types/workout";
import WorkoutCard from "./workoutCard";

async function getWorkoutData(): Promise<WorkoutDataType[]> {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  return res.json();
}

export default async function Workouts() {
  const workoutData = await getWorkoutData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {workoutData.map((item) => (
        <WorkoutCard key={item.id} data={item} />
      ))}
    </div>
  );
}
