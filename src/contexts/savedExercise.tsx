"use client"

import { WorkoutDataType } from "@/types/workout";
import { stringify } from "querystring";
import { createContext, useContext, useEffect, useState } from "react";

const SavedExerciseContext = createContext<WorkoutDataType[]>([]);

export default function SavedExercise({
  children,
}: {
  children: React.ReactNode;
}) {
  const [savedExeciseData, setSavedExerciseData] = useState<WorkoutDataType[]>([]);
  useEffect(()=>{
    localStorage.setItem("savedExercise", JSON.stringify(savedExeciseData));
  },[savedExeciseData])

  return (
    <SavedExerciseContext value={savedExeciseData}>{children}</SavedExerciseContext>
  );
}

export function useSavedExercise() {
  return useContext(SavedExerciseContext);
}
