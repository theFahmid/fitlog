"use client";
import { usePlannedExercise } from "@/contexts/plannedExercise";
import { useSavedExercise } from "@/contexts/savedExercise";
import { WorkoutDataType } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";
import { Flip, toast } from "react-toastify";

export default function SelectedCard({
  data,
  tab,
}: {
  data: WorkoutDataType;
  tab: string;
}) {
  const { removeSavedExercise } = useSavedExercise();
  const { removePlannedExercise } = usePlannedExercise();
  return (
    <div className="border border-slate-500 rounded-xl grid grid-cols-[100px_1fr_auto] gap-4 p-4">
      <div>
        <Image src={data.image} alt={data.name} width={100} height={20}></Image>
      </div>
      <div>
        <h4>{data.name}</h4>
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
      <div className="flex items-center gap-4">
        <button className="btn">
          <Link href={`/exercise/${data.id}`}>View Details</Link>
        </button>
        {tab === "planned" && (
          <button
            className="btn btn-accent"
            onClick={() => {
              removePlannedExercise(data);
            }}
          >
            Mark as Done
          </button>
        )}
        <button
          className="btn"
          onClick={() => {
            if (tab === "planned") {
              removePlannedExercise(data);
              toast.info(`${data.name} removed from your planned`, {
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
              removeSavedExercise(data);
              toast.info(`${data.name} removed from your stack`, {
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
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
