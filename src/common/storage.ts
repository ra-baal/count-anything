import { Counter } from "./types";

const StorageKeys = {
  counters: "counters",
} as const;

type StorageKey = (typeof StorageKeys)[keyof typeof StorageKeys];

const storage = {
  addCounter(name: string): void {
    const counters = storage.getCounters();
    const newCounter: Counter = {
      id: Date.now().toString(),
      name,
      count: 0,
    };
    localStorage.setItem(
      StorageKeys.counters,
      JSON.stringify([...counters, newCounter])
    );
  },

  getCounters(): Counter[] {
    try {
      const stored = localStorage.getItem(StorageKeys.counters);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  setCounters(counters: Counter[]): void {
    localStorage.setItem(StorageKeys.counters, JSON.stringify(counters));
  },
};

export default storage;
