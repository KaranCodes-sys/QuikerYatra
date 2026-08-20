import type { DeliveryStatus, RideStatus } from "@/types/domain";

const rideTransitions: Record<RideStatus, readonly RideStatus[]> = {
  REQUESTED: ["SEARCHING", "CANCELLED"], SEARCHING: ["DRIVER_ASSIGNED", "CANCELLED", "FAILED"], DRIVER_ASSIGNED: ["DRIVER_ARRIVING", "CANCELLED"], DRIVER_ARRIVING: ["DRIVER_ARRIVED", "CANCELLED"], DRIVER_ARRIVED: ["RIDE_STARTED", "CANCELLED"], RIDE_STARTED: ["RIDE_COMPLETED", "FAILED"], RIDE_COMPLETED: ["PAYMENT_COMPLETED"], PAYMENT_COMPLETED: ["RATED"], RATED: [], CANCELLED: [], FAILED: [],
};
const deliveryTransitions: Record<DeliveryStatus, readonly DeliveryStatus[]> = {
  CREATED: ["SEARCHING_RIDER", "CANCELLED"], SEARCHING_RIDER: ["RIDER_ASSIGNED", "CANCELLED", "FAILED"], RIDER_ASSIGNED: ["RIDER_ARRIVING", "CANCELLED"], RIDER_ARRIVING: ["PICKED_UP", "CANCELLED"], PICKED_UP: ["IN_TRANSIT", "FAILED", "RETURN_REQUESTED"], IN_TRANSIT: ["ARRIVING", "FAILED", "RETURN_REQUESTED"], ARRIVING: ["DELIVERED", "FAILED"], DELIVERED: ["CONFIRMED"], CONFIRMED: [], CANCELLED: [], FAILED: ["RETURN_REQUESTED"], RETURN_REQUESTED: ["RETURNED"], RETURNED: [],
};
export function canTransitionRide(from: RideStatus, to: RideStatus): boolean { return rideTransitions[from].includes(to); }
export function canTransitionDelivery(from: DeliveryStatus, to: DeliveryStatus): boolean { return deliveryTransitions[from].includes(to); }
