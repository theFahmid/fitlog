import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import SavedExercise from "@/contexts/savedExercise";


export const metadata: Metadata = {
  title: "FitLog",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
     <SavedExercise>
       <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <footer className="py-8 bg-pink-500">
          <div className="flex justify-between items-center wrapper">
            <div>FitLog</div>
            <div>© 2026 FitLog — Workout Library. Train hard, log honest.</div>
          </div>
        </footer>
      </body>
     </SavedExercise>
    </html>
  );
}
