import { Counter } from "@/common/types";
import { fetchDelete, fetchGet, fetchPost } from "../_base/fetch";

export const fetchCounters = async (): Promise<Counter[]> => {
  const response = await fetchGet("/counters");
  if (!response.ok) throw new Error("Failed to fetch counters");
  return response.json();
};

export const createCounter = async (name: string): Promise<Counter> => {
  const response = await fetchPost("/counters", { name });
  if (!response.ok) throw new Error("Failed to create counter");
  return response.json();
};

export const incrementCounter = async (id: string): Promise<Counter> => {
  const response = await fetchPost(`/counters/${id}/increment`);
  if (!response.ok) throw new Error("Failed to increment counter");
  return response.json();
};

export const decrementCounter = async (id: string): Promise<Counter> => {
  const response = await fetchPost(`/counters/${id}/decrement`);
  if (!response.ok) throw new Error("Failed to decrement counter");
  return response.json();
};

export const resetCounter = async (id: string): Promise<Counter> => {
  const response = await fetchPost(`/counters/${id}/reset`);
  if (!response.ok) throw new Error("Failed to reset counter");
  return response.json();
};

export const deleteCounter = async (id: string): Promise<string> => {
  const response = await fetchDelete(`/counters/${id}/delete`);
  if (!response.ok) throw new Error("Failed to delete counter");
  return response.text();
};
