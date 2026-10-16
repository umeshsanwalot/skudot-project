/**
 * Authenticated API transport only. Do not add guessed business routes here.
 * Populate route adapters after reviewing the live FastAPI OpenAPI schema.
 */
export const API_BASE_URL = (process.env.EXPO_PUBLIC_API_BASE_URL ?? "http://localhost:8000").replace(/\/$/, "");

export class ApiError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiRequest<T>(
  path: string,
  options: RequestInit & { accessToken?: string; tenantId?: string } = {},
): Promise<T> {
  if (!path.startsWith("/") || path.startsWith("//")) {
    throw new ApiError("API path must be a relative path beginning with /.");
  }
  const { accessToken, tenantId, headers, ...init } = options;
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init.body ? { "Content-Type": "application/json" } : {}),
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      ...(tenantId ? { "X-Tenant-ID": tenantId } : {}),
      ...headers,
    },
  });
  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new ApiError(message || `Request failed (${response.status})`, response.status);
  }
  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}
