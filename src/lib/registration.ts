// Registration state is derived from the calendar, no manual flipping needed.
// From January to August the buttons are enabled for the current summer;
// on 1. September they disable and the year rolls over to the next one.
export function getRegistrationState(now: Date = new Date()) {
  const september = 8; // Date months are 0-indexed
  const year = now.getFullYear();
  const registrationYear = now.getMonth() >= september ? year + 1 : year;
  const registrationsOpen = now.getMonth() < september;
  return { registrationYear, registrationsOpen };
}

export const { registrationYear, registrationsOpen } = getRegistrationState();
export const openWhen = "v lednu";

export const heroBannerText = registrationsOpen
  ? `Přihlášky na léto ${registrationYear} spuštěny!`
  : `Přihlášky na léto ${registrationYear} otevřeme ${openWhen}!`;

export const sessionNoteText = registrationsOpen
  ? "Budete přesměrováni na přihlašovací formulář"
  : `Přihlášky otevíráme ${openWhen} ${registrationYear} :-)`;
