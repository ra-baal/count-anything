import {
  ApiResponse,
  ApiResponseError,
  ApiResponseSuccess,
} from "../_base/apiResponse";
import { fetchGet, fetchPost } from "../_base/fetch";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  userId: string;
  email: string;
};

export async function authLogin(request: LoginRequest): Promise<LoginResponse> {
  const response = await fetchPost("/auth/login", request);

  if (!response.ok) {
    const error: ApiResponseError = await response.json();
    throw new Error(error.error);
  }

  return response.json();
}

export async function authLogout(): Promise<ApiResponse<void>> {
  const response = await fetchGet("/auth/logout");

  if (!response.ok) {
    const error: ApiResponseError = await response.json();
    throw new Error(error.error);
  }

  const success: ApiResponseSuccess<void> = await response.json();

  return success;
}

type AccountInfoModel = {
  id: string;
  email: string;
  creationdate: string;
};

export async function authMe(): Promise<ApiResponse<AccountInfoModel>> {
  const response = await fetchGet("/auth/me");

  if (!response.ok) {
    const error: ApiResponseError = await response.json();
    throw new Error(error.error);
  }

  const success: ApiResponseSuccess<AccountInfoModel> = await response.json();

  return success;
}
