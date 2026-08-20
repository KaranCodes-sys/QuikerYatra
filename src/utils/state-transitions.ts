import type { DeliveryStatus, RideStatus, TaskStatus } from "@/types/domain";

type TransitionMap<TState extends string> = Record<TState, readonly TState[]>;

const rideTransitions: TransitionMap<RideStatus> = {
  REQUESTED: ["SEARCHING", "CANCELLED"],
  SEARCHING: ["DRIVER_ASSIGNED", "CANCELLED", "FAILED"],
  DRIVER_ASSIGNED: ["DRIVER_ARRIVING", "CANCELLED"],
  DRIVER_ARRIVING: ["DRIVER_ARRIVED", "CANCELLED"],
  DRIVER_ARRIVED: ["RIDE_STARTED", "CANCELLED"],
  RIDE_STARTED: ["RIDE_COMPLETED", "FAILED"],
  RIDE_COMPLETED: ["PAYMENT_COMPLETED"],
  PAYMENT_COMPLETED: ["RATED"],
  RATED: [],
  CANCELLED: [],
  FAILED: [],
};

const deliveryTransitions: TransitionMap<DeliveryStatus> = {
  CREATED: ["SEARCHING_RIDER", "CANCELLED"],
  SEARCHING_RIDER: ["RIDER_ASSIGNED", "CANCELLED", "FAILED"],
  RIDER_ASSIGNED: ["RIDER_ARRIVING", "CANCELLED"],
  RIDER_ARRIVING: ["PICKED_UP", "CANCELLED"],
  PICKED_UP: ["IN_TRANSIT", "FAILED", "RETURN_REQUESTED"],
  IN_TRANSIT: ["ARRIVING", "FAILED", "RETURN_REQUESTED"],
  ARRIVING: ["DELIVERED", "FAILED"],
  DELIVERED: ["CONFIRMED"],
  CONFIRMED: [],
  CANCELLED: [],
  FAILED: ["RETURN_REQUESTED"],
  RETURN_REQUESTED: ["RETURNED"],
  RETURNED: [],
};

const taskTransitions: TransitionMap<TaskStatus> = {
  CREATED: ["SEARCHING_RIDER", "CANCELLED"],
  SEARCHING_RIDER: ["RIDER_ASSIGNED", "CANCELLED", "FAILED"],
  RIDER_ASSIGNED: ["IN_PROGRESS", "CANCELLED"],
  IN_PROGRESS: ["COMPLETED", "FAILED"],
  COMPLETED: ["CONFIRMED"],
  CONFIRMED: [],
  CANCELLED: [],
  FAILED: [],
};

function canTransition<TState extends string>(
  transitions: TransitionMap<TState>,
  from: TState,
  to: TState,
): boolean {
  return transitions[from].includes(to);
}

export function canTransitionRide(from: RideStatus, to: RideStatus): boolean {
  return canTransition(rideTransitions, from, to);
}

export function canTransitionDelivery(from: DeliveryStatus, to: DeliveryStatus): boolean {
  return canTransition(deliveryTransitions, from, to);
}

export function canTransitionTask(from: TaskStatus, to: TaskStatus): boolean {
  return canTransition(taskTransitions, from, to);
}
