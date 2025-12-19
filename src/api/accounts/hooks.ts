import { useMutation } from "@tanstack/react-query";
import {
  registerAccount,
  RegisterAccountInput,
  RegisterAccountResponse,
} from "./endpoints";

export function useRegisterAccount() {
  return useMutation<RegisterAccountResponse, Error, RegisterAccountInput>({
    mutationFn: registerAccount,
  });
}
