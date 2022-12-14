import create from "zustand";
import { persist } from "zustand/middleware";
import {
  DataStateProps,
  DataStoreProps,
  TodoTaskPriority,
  TodoTask,
} from "./data.types";
import {
  addNewBookmark,
  removeABookmark,
  addTodoTask,
  updateTodoTask,
} from "./data.actions";

export const state: DataStateProps = {
  username: "",

  theme: "dark",
  backgroundImages: "",
  bookmarks: [],
  widgetsVisibility: {
    bookmarks: true,
    audioPlayer: true,
    clock: true,
    googleSearch: true,
    quotes: false,
    pomodoro: true,
    notes: false,
    todo: true,
  },
  notes: {
    data: "",
    fontSize: 16,
  },
  currentVersion: "",
  todoTasksList: [],
};

export type StateType = keyof typeof state;

export const useData = create<DataStoreProps>(
  persist(
    (set) => ({
      ...state,

      updateDataStore: (updates: DataStateProps) => set(updates),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "default" ? "dark" : "default",
        })),

      addBookmark: (newBookmark: string, bookmarkLabel?: string) =>
        set((state) => ({
          bookmarks: addNewBookmark(
            newBookmark,
            state.bookmarks,
            bookmarkLabel
          ),
        })),

      removeBookmark: (bookmarkId: string) =>
        set((state) => ({
          bookmarks: removeABookmark(bookmarkId, state.bookmarks),
        })),

      addTask: (description: string, priority: TodoTaskPriority) =>
        set((state) => ({
          todoTasksList: addTodoTask(
            description,
            priority,
            state.todoTasksList || []
          ),
        })),

      updateTask: (task: TodoTask) =>
        set((state) => ({
          todoTasksList: updateTodoTask(task, state.todoTasksList || []),
        })),

      clearTaskList: () => set(() => ({ todoTasksList: [] })),
    }),
    {
      name: "pdv-data",
    }
  )
);
