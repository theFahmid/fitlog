import { WorkoutDataType } from "@/types/workout";

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 wrapper">
      <div>
        <img src={data.image} alt={data.name} className="rounded-xl" />
      </div>
      <div>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <div className="flex gap-2">
          {data.muscleGroups.map((item, ind) => (
            <div className="badge text-sm bg-slate-300 rounded-full" key={ind}>
              {item}
            </div>
          ))}
        </div>
        <div className="border border-slate-300">
          <p>Equipment: {data.equipment}</p>
          <p>Difficulty: {data.difficulty}</p>
          <p>Sets: {data.sets}</p>
          <p>Reps: {data.reps}</p>
          <p>Duration: {data.duration}</p>
          <p>Calories: {data.caloriesBurned}</p>
          <p>Rating: {data.rating}</p>
        </div>
        <h3>Instructions</h3>
        <ol className="list-decimal list-inside">
          {data.instructions.map((item, ind) => (
            <li key={ind}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
