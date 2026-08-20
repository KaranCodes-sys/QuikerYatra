import type { Location, Route } from "@/types/domain";
export type MapProvider = "google" | "mapbox";
export interface MapMarker { id: string; location: Location; label?: string; }
export interface MapViewport { center: Location; zoom: number; }
export interface MapAdapter { provider: MapProvider; geocode(query: string): Promise<Location[]>; calculateRoute(origin: Location, destination: Location): Promise<Route>; }
