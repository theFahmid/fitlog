import Link from "next/link";

export default function Nothing() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-4 rounded my-4 border border-slate-700">
      <h2 className="text-3xl text-center">NOTHING HERE YET</h2>
      <p>Browse the library and add a lift to get today moving.</p>
      <button className="btn">
        <Link href="/">Go to workouts</Link>
      </button>
    </div>
  );
}
