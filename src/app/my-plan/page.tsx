"use client";

import Nothing from "@/components/my-plan/nothing";
import SelectedCard from "@/components/my-plan/selectedCard";
import { usePlannedExercise } from "@/contexts/plannedExercise";
import { useSavedExercise } from "@/contexts/savedExercise";
import { WorkoutDataType } from "@/types/workout";
import { useState } from "react";

export default function PlanPage() {
  const { savedExerciseData }: { savedExerciseData: WorkoutDataType[] } =
    useSavedExercise();
  const { plannedExerciseData }: { plannedExerciseData: WorkoutDataType[] } =
    usePlannedExercise();
  const [tab, setTab] = useState("planned");
  return (
    <div className="wrapper py-8">
      <h1 className="text-3xl">My Plan</h1>
      <p>Cap of five lifts for today. Finish them, then load more.</p>
      <div className="grid grid-cols-3 border border-slate-600 bg-[#1a1d23] rounded-xl my-4 p-4">
        <div className="flex flex-col gap-2">
          <div className="font-bold">Exercise</div>
          <div className="text-accent font-bold text-4xl">
            {tab === "planned"
              ? plannedExerciseData.length
              : savedExerciseData.length}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Minutes</div>
          <div className="text-accent font-bold text-4xl">
            {tab === "planned"
              ? plannedExerciseData.reduce((total, item) => {
                  return (total += item.duration);
                }, 0)
              : savedExerciseData.reduce((total, item) => {
                  return (total += item.duration);
                }, 0)}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold">Calories</div>
          <div className="text-accent font-bold text-4xl">
            {tab === "planned"
              ? plannedExerciseData.reduce((total, item) => {
                  return (total += item.caloriesBurned);
                }, 0)
              : savedExerciseData.reduce((total, item) => {
                  return (total += item.caloriesBurned);
                }, 0)}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="rounded-xl p-1 inline-flex bg-[#1a1d23] gap-1">
          <button
            className={`btn rounded-xl ${tab === "planned" ? "btn-accent" : "btn-ghost"}`}
            onClick={() => {
              setTab("planned");
            }}
          >
            Today's Plan
          </button>
          <button
            className={`btn rounded-xl ${tab === "saved" ? "btn-accent" : "btn-ghost"}`}
            onClick={() => {
              setTab("saved");
            }}
          >
            Saved
          </button>
        </div>
        <div className="flex flex-col">
          <p>Sort by</p>
          <select defaultValue="Duration" className="select">
            <option>Duration</option>
            <option>Calories</option>
            <option>Rating</option>
          </select>
        </div>
      </div>
      {tab === "saved" && (
        <div className="flex flex-col gap-4 my-4">
          {savedExerciseData.length === 0 ? (
            <Nothing />
          ) : (
            savedExerciseData.map((item) => (
              <SelectedCard data={item} tab={tab} key={item.id} />
            ))
          )}
        </div>
      )}
      {tab === "planned" && (
        <div className="flex flex-col gap-4 my-4">
          {plannedExerciseData.length === 0 ? (
            <Nothing />
          ) : (
            plannedExerciseData.map((item) => (
              <SelectedCard data={item} tab={tab} key={item.id} />
            ))
          )}
        </div>
      )}
    </div>
  );
}
