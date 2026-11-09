import { describe, expect, it } from "vitest";
import { getRegistrationState } from "@/lib/registration";

describe("registration open/close state", () => {
  it("is open in January for the current year", () => {
    expect(getRegistrationState(new Date(2026, 0, 15))).toEqual({
      registrationYear: 2026,
      registrationsOpen: true,
    });
  });

  it("stays open through August", () => {
    expect(getRegistrationState(new Date(2026, 7, 31))).toEqual({
      registrationYear: 2026,
      registrationsOpen: true,
    });
  });

  it("disables on 1. September and rolls the year over", () => {
    expect(getRegistrationState(new Date(2026, 8, 1))).toEqual({
      registrationYear: 2027,
      registrationsOpen: false,
    });
  });

  it("stays closed for the next year through December", () => {
    expect(getRegistrationState(new Date(2026, 11, 20))).toEqual({
      registrationYear: 2027,
      registrationsOpen: false,
    });
  });
});
