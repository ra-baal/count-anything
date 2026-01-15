import { authLogout, authMe } from "@/api/auth/endpoints";
import Path from "@/common/path";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface Me {
  id: string;
  email: string;
  creationdate: string;
}

interface UseAuthResult {
  me: Me;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => Promise<void>;
}

export function useAuth(): UseAuthResult {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const meQuery = useQuery<Me>({
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

  const logoutMutation = useMutation({
    mutationFn: async (): Promise<void> => {
      await authLogout();
    },
    onSuccess: async () => {
      queryClient.removeQueries({ queryKey: ["me"] });
      navigate(Path.Home);
    },
  });

  const logout = useCallback(async (): Promise<void> => {
    await logoutMutation.mutateAsync();
  }, [logoutMutation]);

  return {
    me: meQuery.data ?? {
      id: "",
      email: "",
      creationdate: "",
    },
    isAuthenticated: meQuery.isSuccess,
    isLoading:
      meQuery.isLoading || meQuery.isPending || logoutMutation.isPending,
    logout,
  };
}
