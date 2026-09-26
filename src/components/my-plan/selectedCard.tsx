import { WorkoutDataType } from "@/types/workout";

export default function SelectedCard({data}: {data: WorkoutDataType}) {
    return (
        <div className="border border-slate-500 rounded-xl">
            {data.name}
        </div>
    )
}