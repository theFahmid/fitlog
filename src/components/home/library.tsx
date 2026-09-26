import Workouts from "./workouts";

export default function Library() {
  return (
    <div className="wrapper" id="library">
      <h2>The Library</h2>
      <p>Twelve lifts covering every major muscle group.</p>
      <Workouts />
    </div>
  );
}
