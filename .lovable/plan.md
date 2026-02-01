

## Implementation Plan

### Overview
This plan covers three updates:
1. **Gallery Page**: Use the Domaslav map as background for the curvy path, place years directly on the main line
2. **Font Verification**: Confirm Montserrat Black 900 is properly configured and used for titles
3. **About Page Team Section**: Replace placeholder team members with real team data from the CSV

---

### 1. Gallery Page Updates

**Current State**: The Gallery page has a curvy path timeline with years displayed in circular markers that alternate sides of the path.

**Changes**:
- Import the existing `domaslav-map.jpg` from `src/assets` as the background image
- Add the map as a semi-transparent background overlay behind the curvy path
- Reposition year markers to sit directly on the main SVG path line (centered)
- Photo cards will branch off to alternating sides from the central year markers
- Add subtle visual motifs from the logo (sun, nature elements) scattered around

**Layout Structure**:
```text
     [Photo 2008]
          |
    ------2008------  (on path)
          |
                      [Photo 2009]
                           |
              ------2009------  (on path)
                           |
     [Photo 2010]
          |
    ------2010------  (on path)
```

---

### 2. Font Verification (Montserrat Black 900)

**Current Configuration**:
- `src/main.tsx` imports `@fontsource/montserrat/900.css` (Black weight)
- `src/index.css` sets headings to `font-weight: 900`
- `tailwind.config.ts` defines `font-display` as Montserrat

**Status**: Font is already correctly configured for Black 900 weight. The CSS applies `font-weight: 900` and `text-transform: uppercase` to all headings (h1-h6).

**No changes needed** - the configuration is correct.

---

### 3. About Page Team Section

**Current State**: Uses placeholder data with fictional English names (Maria Johnson, David Chen, etc.)

**CSV Data to Use**:
| First Name | Last Name       | Email                           |
|------------|-----------------|----------------------------------|
| Ema        | Sosnova         | ema.sosnova@domadinka.cz        |
| Jan        | Sip             | jan.sip@domadinka.cz            |
| Krystof    | Kunc            | krystof.kunc@domadinka.cz       |
| Ondrej     | Sosna           | ondrej.sosna@domadinka.cz       |
| Tereza     | Pilna           | tereza.pilna@domadinka.cz       |
| Viktorie   | Sichingerova    | viktorie.sichingerova@domadinka.cz |

**Changes**:
- Update the `team` array to include 6 real team members from the CSV
- Display names with proper Czech diacritics
- Remove fictional bios (leave generic placeholders or remove bio section)
- Adjust grid to accommodate 6 members (3 columns on desktop)

---

### Technical Details

#### Files to Modify

**`src/pages/Gallery.tsx`**:
- Import `domaslavMap from "@/assets/domaslav-map.jpg"`
- Add map as background image with low opacity (10-20%)
- Restructure year markers to be centered on the path
- Adjust photo cards to connect from central year markers
- Keep decorative nature motifs (TreePine, Sun, Home icons)

**`src/pages/About.tsx`**:
- Replace `team` array with 6 members from CSV:
  - Ema Sosnova
  - Jan Sip
  - Krystof Kunc
  - Ondrej Sosna
  - Tereza Pilna
  - Viktorie Sichingerova
- Update grid layout to `lg:grid-cols-3` for 6 members
- Keep initials display in avatar circles

#### No Changes Needed
- `src/main.tsx` - Font imports are correct
- `src/index.css` - Font weights are correct
- `tailwind.config.ts` - Font family configuration is correct

