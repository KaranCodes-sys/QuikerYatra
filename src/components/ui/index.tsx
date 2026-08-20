import type { ReactNode } from "react";

export { Button } from "./Button";
export { Input } from "./Input";

export function Card({ children }: Readonly<{ children: ReactNode }>) {
  return <section className="rounded-lg border border-border bg-white p-4 shadow-sm">{children}</section>;
}

export function Badge({ children }: Readonly<{ children: ReactNode }>) {
  return <span className="rounded-sm border border-border px-2 py-1 text-xs">{children}</span>;
}

export function SearchInput() {
  return <input aria-label="Search" />;
}

export function LocationInput() {
  return <input aria-label="Location" />;
}

export function StatusIndicator() {
  return <span data-component="StatusIndicator" />;
}

export function Avatar() {
  return <span data-component="Avatar" />;
}

export function Rating() {
  return <span data-component="Rating" />;
}

export function Modal() {
  return <div data-component="Modal" />;
}

export function Drawer() {
  return <div data-component="Drawer" />;
}

export function BottomSheet() {
  return <div data-component="BottomSheet" />;
}

export function Tabs() {
  return <div data-component="Tabs" />;
}

export function Toast() {
  return <div data-component="Toast" />;
}

export function Navigation() {
  return <nav data-component="Navigation" />;
}

export function BottomNavigation() {
  return <nav data-component="BottomNavigation" />;
}

export function Timeline() {
  return <ol data-component="Timeline" />;
}

export function PriceBreakdown() {
  return <dl data-component="PriceBreakdown" />;
}

export function LoadingState() {
  return <div data-component="LoadingState" />;
}

export function EmptyState() {
  return <div data-component="EmptyState" />;
}

export function ErrorState() {
  return <div data-component="ErrorState" />;
}
