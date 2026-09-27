import Workouts from "./workouts";

export default function Library() {
  return (
    <div className="wrapper space-y-4 my-8" id="library">
      <h2 className="text-3xl ">The Library</h2>
      <p>Twelve lifts covering every major muscle group.</p>
      <Workouts />
    </div>
  );
}
