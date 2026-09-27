import { WorkoutDataType } from "@/types/workout";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

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
              <div
                className="badge text-sm text-black bg-accent rounded-full"
                key={ind}
              >
                {item}
              </div>
            ))}
          </div>
          <h2 className="card-title">{data.name}</h2>
          <p>{data.equipment}</p>
          <div className="flex gap-2 items-center">
            <div className="flex item-center gap-1 justify-center">
              <FaClock/>
              {data.duration} min
            </div>
            <div className="flex item-center gap-1 justify-center">
              <FaFire />
              {data.caloriesBurned} kcal
            </div>
            <div className="flex item-center gap-1 justify-center">
            <FaStar />
            {data.rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
