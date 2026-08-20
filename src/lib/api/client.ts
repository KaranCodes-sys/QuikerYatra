export const apiRoutes = { auth: "/api/v1/auth", users: "/api/v1/users", rides: "/api/v1/rides", deliveries: "/api/v1/deliveries", riders: "/api/v1/riders", businesses: "/api/v1/businesses", payments: "/api/v1/payments", support: "/api/v1/support" } as const;
export type ApiDomain = keyof typeof apiRoutes;
export interface ApiClient { get<T>(path: string): Promise<T>; post<TResponse, TBody>(path: string, body: TBody): Promise<TResponse>; }
