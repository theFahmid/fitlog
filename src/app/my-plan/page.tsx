"use client";

import SelectedCard from "@/components/my-plan/selectedCard";
import { usePlannedExercise } from "@/contexts/planedExercise";
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
      <h1>My Plan</h1>
      <p>Cap of five lifts for today. Finish them, then load more.</p>
      <div className="grid grid-cols-3 border border-slate-600 bg-slate-950 rounded-xl my-4 p-4">
        <div className="flex flex-col gap-2">
          <div>Exercise</div>
          <div>{tab === "planned" ? plannedExerciseData.length : savedExerciseData.length}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Minutes</div>
          <div>{tab === "planned" ? plannedExerciseData.length : savedExerciseData.length}</div>
        </div>
        <div className="flex flex-col gap-2">
          <div>Calories</div>
          <div>{tab === "planned" ? plannedExerciseData.length : savedExerciseData.length}</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="rounded p-1 inline-flex bg-slate-500 gap-1">
          <button
            className={`btn ${tab === "planned" && "btn-accent"}`}
            onClick={() => {
              setTab("planned");
            }}
          >
            Today's Plan
          </button>
          <button
            className={`btn ${tab === "saved" && "btn-accent"}`}
            onClick={() => {
              setTab("saved");
            }}
          >
            Saved
          </button>
        </div>
        <div>
          <select defaultValue="Pick a color" className="select">
            <option disabled={true}>Pick a color</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
      </div>
      {tab === "saved" && (
        <div>
          {savedExerciseData.length === 0 ? (
            <p>No exercises selected yet.</p>
          ) : (
            savedExerciseData.map((item, ind) => (
              <p key={ind}>
                <SelectedCard data={item} />
              </p>
            ))
          )}
        </div>
      )}
      {tab === "planned" && (
        <div>
          {plannedExerciseData.length === 0 ? (
            <p>No exercises planned yet.</p>
          ) : (
            plannedExerciseData.map((item, ind) => (
              <p key={ind}>
                <SelectedCard data={item} />
              </p>
            ))
          )}
        </div>
      )}
    </div>
  );
}
