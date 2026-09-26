import ExerciseButtons from "@/components/exercise/exerciseButtons";
import { useSavedExercise } from "@/contexts/savedExercise";
import { WorkoutDataType } from "@/types/workout";
import Image from "next/image";

async function getWorkoutData(id: string): Promise<WorkoutDataType> {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  return res.json();
}

export default async function ExercisePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getWorkoutData(id);
  const tableData = [
    ["Equipment", data.equipment],
    ["Difficulty", data.difficulty],
    ["Sets", data.sets],
    ["Reps", data.reps],
    ["Duration", data.duration],
    ["Calories", data.caloriesBurned],
    ["Rating", data.rating],
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 wrapper my-12 gap-8">
      <div>
        <Image
          src={data.image}
          alt={data.name}
          height={1200}
          width={1200}
          className="rounded-xl h-full w-full"
        />
      </div>
      <div className="space-y-2">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <div className="flex gap-2">
          {data.muscleGroups.map((item, ind) => (
            <div className="badge text-sm bg-mycolor rounded-full" key={ind}>
              {item}
            </div>
          ))}
        </div>
        <div className="border border-slate-300 rounded-3xl grid grid-cols-1">
          {tableData.map((item, ind) => {
            return (
              <div key={ind} className="grid grid-cols-2 p-4">
                <div className="uppercase">{item[0]}</div>
                <div>{item[1]}</div>
              </div>
            );
          })}
        </div>
        <h3>Instructions</h3>
        <ol className="list-decimal list-inside">
          {data.instructions.map((item, ind) => (
            <li key={ind}>{item}</li>
          ))}
        </ol>
        <ExerciseButtons data={data} />
      </div>
    </div>
  );
}
