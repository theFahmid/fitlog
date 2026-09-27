"use client";

import { SavedExerciseContextType, WorkoutDataType } from "@/types/workout";
import { createContext, useContext, useEffect, useState } from "react";
import { Flip, toast } from "react-toastify";

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
    if (savedExerciseData.some((e) => e.id === exercise.id)) {
      toast.warning(`${exercise.name} has been already added your saved list`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    } else {
      setSavedExerciseData((prev) =>
        prev.some((e) => e.id === exercise.id) ? prev : [...prev, exercise],
      );
      toast.success(`${exercise.name} is saved for later`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    }
  }

  function removeSavedExercise(exercise: WorkoutDataType) {
    setSavedExerciseData((prev) => prev.filter((e) => e.id !== exercise.id));
    toast.info(`${exercise.name} removed from your saved list`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });
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
    throw new Error(
      "useSavedExercise must be used inside SavedExerciseProvider",
    );
  }
  return ctx;
}
