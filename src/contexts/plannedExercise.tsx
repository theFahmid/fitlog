"use client";

import { PlannedExerciseContextType, WorkoutDataType } from "@/types/workout";
import { createContext, useContext, useEffect, useState } from "react";


const PlannedExerciseContext = createContext<PlannedExerciseContextType | null>(
  null,
);

export default function PlannedExerciseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
 const [isHydrated, setIsHydrated] = useState(false);
  const [plannedExerciseData, setPlannedExerciseData] = useState<WorkoutDataType[]>(
    [],
  );

  useEffect(() => {
    const saved = localStorage.getItem("plannedExercise");
    if (!saved) {
      setIsHydrated(true);
      return;
    }
    try {
      const parsedData = JSON.parse(saved);
      if (Array.isArray(parsedData)) {
        setPlannedExerciseData(parsedData);
      }
    } catch {
      setPlannedExerciseData([]);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }
    try {
      localStorage.setItem("plannedExercise", JSON.stringify(plannedExerciseData));
    } catch {}
  }, [plannedExerciseData, isHydrated]);

  function addPlannedExercise(exercise: WorkoutDataType) {
    setPlannedExerciseData((prev) =>
      prev.some((e) => e.id === exercise.id) ? prev : [...prev, exercise],
    );
  }

  function removePlannedExercise(exercise: WorkoutDataType) {
    setPlannedExerciseData((prev) => prev.filter((e) => e.id !== exercise.id));
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
  const ctx = useContext(PlannedExerciseContext);
    if (!ctx) {
      throw new Error("usePlannedExercise must be used inside PlannedExerciseProvider")
    }
    return ctx;
}
