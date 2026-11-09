import { describe, expect, it } from "vitest";
import { heroBannerText, registrationsOpen, sessionNoteText } from "@/lib/registration";

describe("registration open/close switch", () => {
  it("keeps the turnus buttons disabled while registrations are closed", () => {
    expect(registrationsOpen).toBe(false);
  });

  it("shows the homepage banner announcing the January opening", () => {
    expect(heroBannerText).toBe("Přihlášky na léto 2027 otevřeme v lednu!");
  });

  it("shows the opening-date note under the turnus boxes", () => {
    expect(sessionNoteText).toBe("Přihlášky otevíráme v lednu 2027 :-)");
  });
});
