import { describe, expect, it } from "vitest";
import { canTransitionDelivery, canTransitionRide } from "./state-transitions";

describe("state transitions", () => {
  it("allows valid ride progression and blocks terminal transitions", () => {
    expect(canTransitionRide("REQUESTED", "SEARCHING")).toBe(true);
    expect(canTransitionRide("RATED", "SEARCHING")).toBe(false);
  });
  it("allows delivery returns through explicit states", () => {
    expect(canTransitionDelivery("IN_TRANSIT", "RETURN_REQUESTED")).toBe(true);
    expect(canTransitionDelivery("CONFIRMED", "RETURNED")).toBe(false);
  });
});
