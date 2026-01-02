import { buildApiUrl } from "@/utils/buildUrl";
import { ApiResponseError } from "../_base/apiResponse";
import { fetchPost } from "../_base/fetch";

export type RegisterAccountInput = {
  email: string;
  password: string;
};

export type RegisterAccountResponse = {
  id: string;
};

export async function registerAccount(
  payload: RegisterAccountInput
): Promise<RegisterAccountResponse> {
  const response = await fetchPost("/accounts/register", payload);

  if (!response.ok) {
    const error: ApiResponseError = await response.json();
    throw new Error(error.error);
  }

  return response.json();
}
