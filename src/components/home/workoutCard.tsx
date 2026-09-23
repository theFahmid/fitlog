import { WorkoutDataType } from "@/types/workout";
import Link from "next/link";

export default function WorkoutCard({ data }: { data: WorkoutDataType }) {
  return (
    <Link href={`/exercise/${data.id}`}>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={data.image} alt={data.name} />
        </figure>
        <div className="card-body">
          <div className="flex gap-2">
            {data.muscleGroups.map((item, ind) => (
            <div className="badge text-sm bg-slate-300 rounded-full" key={ind}>
              {item}
            </div>
          ))}
          </div>
          <h2 className="card-title">{data.name}</h2>
          <p>{data.equipment}</p>
        </div>
      </div>
    </Link>
  );
}
