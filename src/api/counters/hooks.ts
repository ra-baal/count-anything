import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchCounters,
  createCounter,
  deleteCounter,
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "./endpoints";

export const useGetCounters = () => {
  return useQuery({
    queryKey: ["counters"],
    queryFn: fetchCounters,
  });
};

export const useCreateCounter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCounter,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["counters"] }),
  });
};

export const useIncrementCounter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => incrementCounter(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["counters"] }),
  });
};

export const useDecrementCounter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => decrementCounter(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["counters"] }),
  });
};

export const useResetCounter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => resetCounter(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["counters"] }),
  });
};

export const useRemoveCounter = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCounter,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["counters"] }),
  });
};
