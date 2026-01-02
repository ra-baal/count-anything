import { authMe } from "@/api/auth/endpoints";
import { useQuery } from "@tanstack/react-query";

interface Me {
  id: string;
  email: string;
  creationdate: string;
}

export function useAuth() {
  return useQuery<Me>({
    queryKey: ["me"],
    queryFn: async (): Promise<Me> => {
      const res = await authMe();
      if (res.isSuccess) {
        return res.data;
      }
      throw new Error("Not authenticated");
    },
    retry: false,
  });
}
