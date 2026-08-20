export type EntityId = string;
export type ISODateTime = string;
export type CurrencyCode = "INR";

export interface Location { id?: EntityId; label?: string; address: string; latitude?: number; longitude?: number; }
export interface Route { origin: Location; destination: Location; stops?: Location[]; distanceMeters?: number; durationSeconds?: number; }
export interface User { id: EntityId; name: string; phone: string; role: "passenger" | "rider" | "business_staff" | "admin"; }
export interface Vehicle { id: EntityId; type: "bike" | "auto" | "cab"; registrationNumber: string; }
export interface Rider { id: EntityId; userId: EntityId; vehicleId?: EntityId; availability: "offline" | "rides" | "deliveries" | "both"; }
export interface Business { id: EntityId; name: string; type: "hotel" | "restaurant" | "retail" | "pharmacy" | "office" | "other"; }
export interface BusinessStaff { id: EntityId; businessId: EntityId; userId: EntityId; role: "owner" | "manager" | "dispatcher" | "staff" | "finance"; }
export type RideStatus = "REQUESTED" | "SEARCHING" | "DRIVER_ASSIGNED" | "DRIVER_ARRIVING" | "DRIVER_ARRIVED" | "RIDE_STARTED" | "RIDE_COMPLETED" | "PAYMENT_COMPLETED" | "RATED" | "CANCELLED" | "FAILED";
export type DeliveryStatus = "CREATED" | "SEARCHING_RIDER" | "RIDER_ASSIGNED" | "RIDER_ARRIVING" | "PICKED_UP" | "IN_TRANSIT" | "ARRIVING" | "DELIVERED" | "CONFIRMED" | "CANCELLED" | "FAILED" | "RETURN_REQUESTED" | "RETURNED";
export type JobKind = "RIDE" | "DELIVERY";
export interface Job { id: EntityId; kind: JobKind; riderId?: EntityId; route: Route; scheduledAt?: ISODateTime; createdAt: ISODateTime; }
export interface Ride extends Job { kind: "RIDE"; passengerId: EntityId; status: RideStatus; }
export interface Parcel { type: "document" | "small_parcel" | "food" | "clothing" | "electronics" | "fragile" | "other"; size: "small" | "medium" | "large"; declaredValue?: number; }
export interface Recipient { name: string; phone: string; whatsappPhone?: string; instructions?: string; }
export interface Delivery extends Job { kind: "DELIVERY"; senderId?: EntityId; businessId?: EntityId; parcel: Parcel; recipient: Recipient; status: DeliveryStatus; }
export interface Payment { id: EntityId; amount: number; currency: CurrencyCode; status: "pending" | "authorized" | "paid" | "failed" | "refunded"; }
export interface Transaction { id: EntityId; paymentId: EntityId; providerReference?: string; createdAt: ISODateTime; }
export interface Rating { id: EntityId; score: 1 | 2 | 3 | 4 | 5; targetId: EntityId; }
export interface Review { id: EntityId; ratingId: EntityId; comment?: string; }
export interface Coupon { code: string; discountType: "flat" | "percentage"; value: number; }
export interface Promotion { id: EntityId; name: string; couponCode?: string; }
export interface PricingRule { id: EntityId; domain: JobKind; baseFare: number; perKm?: number; }
export interface RiderDocument { id: EntityId; riderId: EntityId; type: "license" | "rc" | "insurance" | "identity"; status: "pending" | "verified" | "rejected"; }
export interface SupportTicket { id: EntityId; subject: string; status: "open" | "in_progress" | "resolved"; }
export interface Notification { id: EntityId; userId?: EntityId; title: string; readAt?: ISODateTime; }
export interface SavedLocation { id: EntityId; userId: EntityId; location: Location; }
export interface Subscription { id: EntityId; userId: EntityId; plan: "city_pass"; status: "active" | "paused" | "cancelled"; }
export interface BusinessInvoice { id: EntityId; businessId: EntityId; amount: number; currency: CurrencyCode; }
export interface DeliveryProof { id: EntityId; deliveryId: EntityId; type: "pin" | "signature" | "photo" | "recipient_confirmation"; }
