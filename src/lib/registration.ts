// Single switch for whether camp registrations are open right now.
// Flip `registrationsOpen` to true when the Google Forms go live;
// the homepage banner, the turnus buttons and the note under them all follow it.
export const registrationsOpen = false;
export const registrationYear = 2027;
export const openWhen = "v lednu";

export const heroBannerText = registrationsOpen
  ? `Přihlášky na léto ${registrationYear} spuštěny!`
  : `Přihlášky na léto ${registrationYear} otevřeme ${openWhen}!`;

export const sessionNoteText = registrationsOpen
  ? "Budete přesměrováni na přihlašovací formulář"
  : `Přihlášky otevíráme ${openWhen} ${registrationYear} :-)`;
