export function buildApiUrl(
  path: string,
  queryParams: Record<string, string | number | boolean> = {}
): string {
  const baseUrl = import.meta.env.VITE_API || "http://localhost:3000";
  console.log(baseUrl);
  const url = new URL(path, baseUrl);

  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, String(value));
    }
  });

  return url.toString();
}
