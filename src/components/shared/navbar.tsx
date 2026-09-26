"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useState } from "react";
import { useSavedExercise } from "@/contexts/savedExercise";
import { usePlannedExercise } from "@/contexts/planedExercise";

function NavItems() {
  const [active, setActive] = useState("workout");
  return (
    <>
      <li>
        <Link
          href="/"
          className={active === "workout" ? "bg-gray-700 font-bold" : ""}
          onClick={() => setActive("workout")}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={active === "plan" ? "bg-gray-700 font-bold" : ""}
          onClick={() => setActive("plan")}
        >
          My Plan
        </Link>
      </li>
    </>
  );
}

export default function Navbar() {
  const { savedExerciseData } = useSavedExercise();
  const { plannedExerciseData } = usePlannedExercise();
  return (
    <>
      <div className="bg-base-100 shadow-sm sticky z-10 left-0 right-0 top-0">
        <div className="wrapper navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <NavItems />
              </ul>
            </div>
            <Link className="btn btn-ghost text-xl" href="/">
              <Image
                src={logo}
                width={20}
                height={20}
                alt="FitLog Logo"
              ></Image>
              FitLog
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavItems />
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Plan ({plannedExerciseData.length})</a>
            <a className="btn">Saved ({savedExerciseData.length})</a>
          </div>
        </div>
      </div>
    </>
  );
}
