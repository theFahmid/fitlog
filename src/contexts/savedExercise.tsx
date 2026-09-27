"use client";

import { SavedExerciseContextType, WorkoutDataType } from "@/types/workout";
import { createContext, useContext, useEffect, useState } from "react";

const SavedExerciseContext = createContext<SavedExerciseContextType | null>(
  null,
);

export default function SavedExerciseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [savedExerciseData, setSavedExerciseData] = useState<WorkoutDataType[]>(
    [],
  );

  useEffect(() => {
    const saved = localStorage.getItem("savedExercise");
    if (!saved) {
      setIsHydrated(true);
      return;
    }
    try {
      const parsedData = JSON.parse(saved);
      if (Array.isArray(parsedData)) {
        setSavedExerciseData(parsedData);
      }
    } catch {
      setSavedExerciseData([]);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }
    try {
      localStorage.setItem("savedExercise", JSON.stringify(savedExerciseData));
    } catch {}
  }, [savedExerciseData, isHydrated]);

  function addSavedExercise(exercise: WorkoutDataType) {
    setSavedExerciseData((prev) =>
      prev.some((e) => e.id === exercise.id) ? prev : [...prev, exercise],
    );
  }

  function removeSavedExercise(exercise: WorkoutDataType) {
    setSavedExerciseData((prev) => prev.filter((e) => e.id !== exercise.id));
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
  const ctx = useContext(SavedExerciseContext);
  if (!ctx) {
    throw new Error("useSavedExercise must be used inside SavedExerciseProvider")
  }
  return ctx;
}
