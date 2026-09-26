"use client";

import { WorkoutDataType } from "@/types/workout";
import { stringify } from "querystring";
import { createContext, useContext, useEffect, useState } from "react";

const PlannedExerciseContext = createContext<any>([]);

export default function PlannedExerciseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [plannedExerciseData, setPlannedExerciseData] = useState<WorkoutDataType[]>(
    [],
  );

  // useEffect(()=>{
  //   localStorage.setItem("plannedExercise", JSON.stringify(plannedExerciseData));
  // },[plannedExerciseData])

  function addPlannedExercise(exercise: WorkoutDataType) {
    setPlannedExerciseData((prev) =>
      prev.some((e) => e.id === exercise.id) ? prev : [...prev, exercise],
    );
    console.log(plannedExerciseData);
  }

  function removePlannedExercise(exercise: WorkoutDataType) {
    setPlannedExerciseData((prev) => prev.filter((e) => e.id !== exercise.id));
    console.log(plannedExerciseData);
  }

  return (
    <PlannedExerciseContext
      value={{ plannedExerciseData, addPlannedExercise, removePlannedExercise }}
    >
      {children}
    </PlannedExerciseContext>
  );
}

export function usePlannedExercise() {
  return useContext(PlannedExerciseContext);
}
