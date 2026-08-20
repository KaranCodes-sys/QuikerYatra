import { describe, expect, it } from "vitest";
import { canTransitionDelivery, canTransitionRide, canTransitionTask } from "./state-transitions";

describe("state transitions", () => {
  it("allows valid ride progression and blocks terminal transitions", () => {
    expect(canTransitionRide("REQUESTED", "SEARCHING")).toBe(true);
    expect(canTransitionRide("RATED", "SEARCHING")).toBe(false);
  });

  it("allows delivery returns through explicit states", () => {
    expect(canTransitionDelivery("IN_TRANSIT", "RETURN_REQUESTED")).toBe(true);
    expect(canTransitionDelivery("CONFIRMED", "RETURNED")).toBe(false);
  });

  it("keeps local task jobs on the shared rider-job path", () => {
    expect(canTransitionTask("CREATED", "SEARCHING_RIDER")).toBe(true);
    expect(canTransitionTask("COMPLETED", "IN_PROGRESS")).toBe(false);
  });
});
