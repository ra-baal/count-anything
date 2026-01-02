import { buildApiUrl } from "@/utils/buildUrl";

export async function fetchPost(path: string, bodyValue?: any) {
  return await fetch(buildApiUrl(path), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: bodyValue === undefined ? undefined : JSON.stringify(bodyValue),
    credentials: "include",
  });
}

export async function fetchDelete(path: string, bodyValue?: any) {
  return await fetch(buildApiUrl(path), {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: bodyValue === undefined ? undefined : JSON.stringify(bodyValue),
    credentials: "include",
  });
}

export async function fetchGet(
  path: string,
  queryParams: Record<string, string | number | boolean> = {}
) {
  return await fetch(buildApiUrl(path, queryParams), {
    credentials: "include",
  });
}
