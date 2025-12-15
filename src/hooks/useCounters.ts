import {
  useDecrementCounter,
  useGetCounters,
  useIncrementCounter,
  useRemoveCounter,
  useResetCounter,
} from "@/api/counters/hooks";

export function useCounters() {
  const counters = useGetCounters();
  const increment = useIncrementCounter();
  const decrement = useDecrementCounter();
  const reset = useResetCounter();
  const remove = useRemoveCounter();

  return {
    counters: counters.data ?? [],
    increment: (id: string) => increment.mutate(id),
    decrement: (id: string) => decrement.mutate(id),
    reset: (id: string) => reset.mutate(id),
    remove: (id: string) => remove.mutate(id),
  };
}
