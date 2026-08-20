import type { DeliveryStatus, RideStatus, TaskStatus } from "./domain";

export const rideStatuses: readonly RideStatus[] = [
  "REQUESTED",
  "SEARCHING",
  "DRIVER_ASSIGNED",
  "DRIVER_ARRIVING",
  "DRIVER_ARRIVED",
  "RIDE_STARTED",
  "RIDE_COMPLETED",
  "PAYMENT_COMPLETED",
  "RATED",
  "CANCELLED",
  "FAILED",
];

export const deliveryStatuses: readonly DeliveryStatus[] = [
  "CREATED",
  "SEARCHING_RIDER",
  "RIDER_ASSIGNED",
  "RIDER_ARRIVING",
  "PICKED_UP",
  "IN_TRANSIT",
  "ARRIVING",
  "DELIVERED",
  "CONFIRMED",
  "CANCELLED",
  "FAILED",
  "RETURN_REQUESTED",
  "RETURNED",
];

export const taskStatuses: readonly TaskStatus[] = [
  "CREATED",
  "SEARCHING_RIDER",
  "RIDER_ASSIGNED",
  "IN_PROGRESS",
  "COMPLETED",
  "CONFIRMED",
  "CANCELLED",
  "FAILED",
];
