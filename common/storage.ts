import AsyncStorage from "@react-native-async-storage/async-storage";
import { Counter } from "./types";

const StorageKeys = {
  counters: "counters",
} as const;

type StorageKey = (typeof StorageKeys)[keyof typeof StorageKeys];

const storage = {
  async addCounter(name: string): Promise<void> {
    const counters = await storage.getCounters();
    const newCounter: Counter = {
      id: Date.now().toString(),
      name: name,
      count: 0,
    };

    await AsyncStorage.setItem(
      StorageKeys.counters,
      JSON.stringify([...counters, newCounter])
    );
  },

  async getCounters(): Promise<Counter[]> {
    const stored = await AsyncStorage.getItem(StorageKeys.counters);
    const counters: Counter[] = stored ? JSON.parse(stored) : [];
    return counters;
  },

  async setCounters(counters: Counter[]) {
    await AsyncStorage.setItem(StorageKeys.counters, JSON.stringify(counters));
  },
} as const;

export default storage;
