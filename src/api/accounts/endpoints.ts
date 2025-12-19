import { buildApiUrl } from "@/utils/buildUrl";

export type RegisterAccountInput = {
  email: string;
  password: string;
};

export type RegisterAccountResponse = {
  id: string;
};

export type ApiError = {
  error: string;
};

export async function registerAccount(
  payload: RegisterAccountInput
): Promise<RegisterAccountResponse> {
  const url = await buildApiUrl("/accounts/register");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error: ApiError = await response.json();
    throw new Error(error.error);
  }

  return response.json();
}
