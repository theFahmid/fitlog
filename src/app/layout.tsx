import type { Metadata } from "next";
import "./globals.css";
import logo from "@/assets/logo.png";
import Navbar from "@/components/shared/navbar";
import Image from "next/image";
import SavedExerciseProvider from "@/contexts/savedExercise";
import PlannedExerciseProvider from "@/contexts/plannedExercise";
import { Flip, ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <PlannedExerciseProvider>
        <SavedExerciseProvider>
          <body className="min-h-full flex flex-col">
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <footer className="py-8 bg-[#1a1d23]">
              <div className="flex justify-between items-center wrapper">
                <div className="flex gap-4">
                  <Image src={logo} alt={"Logo"} width={20} height={20}></Image>
                  FitLog
                </div>
                <div>
                  © 2026 FitLog — Workout Library. Train hard, log honest.
                </div>
              </div>
            </footer>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition={Flip}
            />
          </body>
        </SavedExerciseProvider>
      </PlannedExerciseProvider>
    </html>
  );
}
