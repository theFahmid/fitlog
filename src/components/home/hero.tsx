import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 wrapper gap-8 bg-slate-400 my-8 p-12 rounded-xl">
        <div className="flex flex-col gap-4  justify-center">
          <p>Workout Library</p>
          <h2 className="font-bold text-5xl uppercase">
            Train with intent. Log every set.
          </h2>
          <p>
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <Link href="#library">
            <button>Browser Workouts</button>
          </Link>
        </div>
        <div className="flex ">
          <Image
            src="/banner.png"
            alt="Hero Image"
            width={100}
            height={100}
            className="w-full h-auto"
          ></Image>
        </div>
      </div>
    </>
  );
}
