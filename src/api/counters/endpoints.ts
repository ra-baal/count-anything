import { Counter } from "@/common/types";
import { buildApiUrl } from "@/utils/buildUrl";

export const fetchCounters = async (): Promise<Counter[]> => {
  const url = buildApiUrl("/counters");
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch counters");
  return response.json();
};

export const createCounter = async (name: string): Promise<Counter> => {
  const response = await fetch(buildApiUrl("/counters"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  if (!response.ok) throw new Error("Failed to create counter");
  return response.json();
};

export const incrementCounter = async (id: string): Promise<Counter> => {
  const response = await fetch(buildApiUrl(`/counters/${id}/increment`), {
    method: "POST",
  });
  if (!response.ok) throw new Error("Failed to increment counter");
  return response.json();
};

export const decrementCounter = async (id: string): Promise<Counter> => {
  const response = await fetch(buildApiUrl(`/counters/${id}/decrement`), {
    method: "POST",
  });
  if (!response.ok) throw new Error("Failed to decrement counter");
  return response.json();
};

export const resetCounter = async (id: string): Promise<Counter> => {
  const response = await fetch(buildApiUrl(`/counters/${id}/reset`), {
    method: "POST",
  });
  if (!response.ok) throw new Error("Failed to reset counter");
  return response.json();
};

export const deleteCounter = async (id: string): Promise<string> => {
  const response = await fetch(buildApiUrl(`/counters/${id}/delete`), {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete counter");
  return response.text();
};
