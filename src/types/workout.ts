export interface WorkoutDataType {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

export interface PlannedExerciseContextType {
  plannedExerciseData: WorkoutDataType[];
  addPlannedExercise: (exercise: WorkoutDataType) => void;
  removePlannedExercise: (exercise: WorkoutDataType) => void;
}

export interface SavedExerciseContextType {
  savedExerciseData: WorkoutDataType[];
  addSavedExercise: (exercise: WorkoutDataType) => void;
  removeSavedExercise: (exercise: WorkoutDataType) => void;
}