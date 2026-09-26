"use client";

import { WorkoutDataType } from "@/types/workout";
import { createContext, useContext, useEffect, useState } from "react";

const SavedExerciseContext = createContext<any>([]);

export default function SavedExerciseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [savedExerciseData, setSavedExerciseData] = useState<WorkoutDataType[]>(
    [],
  );
  // const saved = localStorage.getItem("savedExercise");

  // if (saved) {
  //   try {
  //     setSavedExerciseData(JSON.parse(saved));
  //   } catch (error) {
  //     setSavedExerciseData([]);
  //   }
  // }

  useEffect(() => {
    localStorage.setItem("savedExercise", JSON.stringify(savedExerciseData));
  }, [savedExerciseData]);

  function addSavedExercise(exercise: WorkoutDataType) {
    setSavedExerciseData((prev) =>
      prev.some((e) => e.id === exercise.id) ? prev : [...prev, exercise],
    );
    console.log(savedExerciseData);
  }

  function removeSavedExercise(exercise: WorkoutDataType) {
    setSavedExerciseData((prev) => prev.filter((e) => e.id !== exercise.id));
    console.log(savedExerciseData);
  }

  return (
    <SavedExerciseContext
      value={{ savedExerciseData, addSavedExercise, removeSavedExercise }}
    >
      {children}
    </SavedExerciseContext>
  );
}

export function useSavedExercise() {
  return useContext(SavedExerciseContext);
}
