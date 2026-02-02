import { useState, useEffect, useCallback } from "react";
import Layout from "@/components/layout/Layout";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import domaslavMap from "@/assets/domaslav-map-landscape.jpg";
import domadinkaBadge from "@/assets/domadinka-megaphone.png";

// Gallery images imports
import img2009 from "@/assets/gallery/2009-sukacka.jpg";
import img2011 from "@/assets/gallery/2011-kytice.jpg";
import img2012 from "@/assets/gallery/2012-historie.jpg";
import img2013 from "@/assets/gallery/2013-alenka.jpg";
import img2014 from "@/assets/gallery/2014-hmyzno.jpg";
import img2015 from "@/assets/gallery/2015-bluebear.jpg";
import img2017 from "@/assets/gallery/2017-vesmir.jpg";
import img2018 from "@/assets/gallery/2018-farales.jpg";
import img2019 from "@/assets/gallery/2019-sirotcinec.jpg";
import img2020 from "@/assets/gallery/2020-domapolis.jpg";
import img2021 from "@/assets/gallery/2021-domadinka.jpg";
import img2022 from "@/assets/gallery/2022-pramaslav.jpg";
import img2023Upper from "@/assets/gallery/2023-domorka.jpg";
import img2024Upper from "@/assets/gallery/2024-dobitin.jpg";
import img2025Upper from "@/assets/gallery/2025-doma-kinko.jpg";

// Year to image mapping (single path years)
const yearImages: Record<number, string> = {
  2009: img2009,
  2011: img2011,
  2012: img2012,
  2013: img2013,
  2014: img2014,
  2015: img2015,
  2017: img2017,
  2018: img2018,
  2019: img2019,
  2020: img2020,
  2021: img2021,
  2022: img2022,
};

// Split year images (upper/lower branches)
const splitYearImages: Record<number, { upper?: string; lower?: string }> = {
  2023: { upper: img2023Upper },
  2024: { upper: img2024Upper },
  2025: { upper: img2025Upper },
};

// Helper to get image for year/branch
const getYearImage = (year: number, branch?: "upper" | "lower"): string | undefined => {
  if (branch && splitYearImages[year]) {
    return splitYearImages[year][branch];
  }
  return yearImages[year];
};

// Single path years (2006-2022, excluding 2010)
const singleYears = Array.from({ length: 17 }, (_, i) => 2006 + i).filter((y) => y !== 2010);
// Split path years (2023-2026) - two badges per year
const splitYears = [2023, 2024, 2025, 2026];
// All years for navigation
const allYears = [...singleYears, ...splitYears];

// Themes for single-path years (2006-2022)
const yearThemes: Record<number, string> = {
  2006: "Domalend",
  2007: "Kosmodom",
  2008: "Železná",
  2009: "Šukačka",
  2011: "Kytice",
  2012: "Historie českých zemí",
  2013: "Alenka",
  2014: "Hmyzno",
  2015: "Bluebear",
  2016: "Řemesla",
  2017: "Vesmír",
  2018: "Farales",
  2019: "Sirotčinec slečny Vorlové",
  2020: "Domapolis",
  2021: "Domadinka",
  2022: "Pramaslav",
};

// Themes for split-path years (2023-2026) - upper and lower branches
const splitYearThemes: Record<number, { upper: string; lower: string }> = {
  2023: { upper: "Domorka", lower: "Atlantslav" },
  2024: { upper: "Dobitín", lower: "Jumanji" },
  2025: { upper: "Doma-Kinkó", lower: "Agnes" },
  2026: { upper: "?", lower: "?" },
};

// Helper to get display title
const getYearTitle = (year: number, branch?: "upper" | "lower") => {
  if (branch && splitYearThemes[year]) {
    return `${year} – ${splitYearThemes[year][branch]}`;
  }
  return `${year} – ${yearThemes[year] || "?"}`;
};

// Color palette for placeholder images based on camp theme
const getYearColor = (year: number) => {
  const colors = [
    "from-camp-sun/50 to-camp-coral/40",
    "from-camp-grass/50 to-camp-sky/40",
    "from-camp-sky/50 to-accent/40",
    "from-camp-coral/50 to-camp-sun/40",
    "from-secondary to-camp-grass/30",
    "from-camp-earth/40 to-camp-sun/50",
  ];
  return colors[(year - 2006) % colors.length];
};

// Natural path following green dots on the Kaiser map
// Row 1: 2006-2014 going RIGHT (top area) - excluding 2010
// Row 2: 2015-2020 going LEFT (middle area)
// Row 3: 2021-2022 + split 2023-2026 going RIGHT (bottom area)

const mainPathPoints = [
  // Row 1: going right (2006-2014, no 2010) - following upper green dots
  { x: 5, y: 6 }, // 2006 - Domalend
  { x: 12, y: 10 }, // 2007 - Kosmodom
  { x: 20, y: 16 }, // 2008
  { x: 26, y: 20 }, // 2009
  { x: 38, y: 16 }, // 2011
  { x: 50, y: 12 }, // 2012
  { x: 62, y: 10 }, // 2013
  { x: 74, y: 12 }, // 2014
  // Row 2: going left (2015-2020) - following middle green dots
  { x: 88, y: 14 }, // 2015 - upper right corner
  { x: 72, y: 38 }, // 2016
  { x: 56, y: 44 }, // 2017
  { x: 42, y: 48 }, // 2018
  { x: 28, y: 50 }, // 2019
  { x: 14, y: 48 }, // 2020
  // Row 3: going right (2021-2022) - following lower green dots
  { x: 12, y: 62 }, // 2021 - Brak area
  { x: 24, y: 70 }, // 2022 - Boley Dornschlag - split point (moved in)
];

// Upper branch (2023-2026) - continues right on upper track
const upperBranchPoints = [
  { x: 38, y: 68 }, // 2023 upper (moved up)
  { x: 52, y: 62 }, // 2024 upper (moved up)
  { x: 68, y: 58 }, // 2025 upper (moved up)
  { x: 82, y: 52 }, // 2026 upper - Kokaschütz area (moved up)
];

// Lower branch (2023-2026) - continues right on lower track
const lowerBranchPoints = [
  { x: 38, y: 88 }, // 2023 lower - Atlantslav (moved down to avoid overlap)
  { x: 54, y: 78 }, // 2024 lower - Jumanji (moved up)
  { x: 72, y: 82 }, // 2025 lower (moved up)
  { x: 88, y: 78 }, // 2026 lower - Sczlur area (moved up)
];

// Calculate rotation angle between two points (in degrees)
const getRotation = (from: { x: number; y: number }, to: { x: number; y: number }) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  return Math.atan2(dy, dx) * (180 / Math.PI);
};

// Black dot position on badge image (relative to badge center, in pixels)
// x: 40px right, y: -140px up (negative because it's above center)
const DOT_OFFSET_X = 40;
const DOT_OFFSET_Y = -140;
// Calculate the angle of the dot from badge center
const DOT_BASE_ANGLE = Math.atan2(DOT_OFFSET_Y, DOT_OFFSET_X); // ≈ -74° in radians
// Distance from center to dot (for percentage calculation)
const DOT_DISTANCE = Math.sqrt(DOT_OFFSET_X ** 2 + DOT_OFFSET_Y ** 2); // ≈ 145.6px

// Get offset to place black dot on path point (as percentage of container)
// Badge is roughly 48px at md size, so dot distance as % of container width
const getOffsetForRotation = (rotationDeg: number) => {
  // Convert rotation to radians
  const rotationRad = rotationDeg * (Math.PI / 180);
  // After rotating the badge, the dot moves. Calculate new dot position relative to center
  // CSS rotation is clockwise, so we use standard rotation matrix
  const newDotAngle = DOT_BASE_ANGLE + rotationRad;
  // We need to offset the badge center by the NEGATIVE of the rotated dot position
  // Reduce scale factor to keep badges within map bounds
  const scaleFactor = 1.0;
  const offsetX = -Math.cos(newDotAngle) * scaleFactor;
  const offsetY = -Math.sin(newDotAngle) * scaleFactor;
  return { offsetX, offsetY };
};

// Get rotation for main path points
const getMainPathRotation = (index: number) => {
  if (index < mainPathPoints.length - 1) {
    return getRotation(mainPathPoints[index], mainPathPoints[index + 1]);
  }
  // Last point uses direction from previous
  return getRotation(mainPathPoints[index - 1], mainPathPoints[index]);
};

// Get rotation for branch points
const getBranchRotation = (points: typeof upperBranchPoints, index: number) => {
  if (index === 0) {
    // First branch point - direction from split point to first branch
    return getRotation(mainPathPoints[15], points[0]);
  }
  if (index < points.length - 1) {
    return getRotation(points[index], points[index + 1]);
  }
  return getRotation(points[index - 1], points[index]);
};

// Build sequential slide list: single years + split years with upper/lower variants
type LightboxSlide = { year: number; branch?: "upper" | "lower" };
const allSlides: LightboxSlide[] = [
  ...singleYears.map((year) => ({ year })),
  ...splitYears.flatMap((year) => [
    { year, branch: "upper" as const },
    { year, branch: "lower" as const },
  ]),
];

const Gallery = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number | null>(null);

  const openLightbox = (year: number, branch?: "upper" | "lower") => {
    const index = allSlides.findIndex((s) => s.year === year && s.branch === branch);
    setCurrentSlideIndex(index >= 0 ? index : null);
  };

  const closeLightbox = () => setCurrentSlideIndex(null);

  const goToPrevSlide = () => {
    if (currentSlideIndex === null) return;
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentSlideIndex === null) return;
    if (currentSlideIndex < allSlides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const currentSlide = currentSlideIndex !== null ? allSlides[currentSlideIndex] : null;
  const hasPrev = currentSlideIndex !== null && currentSlideIndex > 0;
  const hasNext = currentSlideIndex !== null && currentSlideIndex < allSlides.length - 1;

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (currentSlideIndex === null) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      }
    },
    [currentSlideIndex],
  );

  useEffect(() => {
    if (currentSlideIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [currentSlideIndex, handleKeyDown]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-camp-grass/20 via-accent/30 to-background py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Časová osa Domadinky</h1>
            <p className="text-muted-foreground">Cesta 20 lety vzpomínek v Domaslavi (2006–2026)</p>
          </div>
        </div>
      </section>

      {/* Map Timeline */}
      <section className="py-6 md:py-10">
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            {/* Kaiser Map Background */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-4 border-camp-earth/30">
              <img src={domaslavMap} alt="Historická mapa Domaslavska" className="w-full h-auto" />

              {/* SVG Path overlay connecting the years with natural curves */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Main path (2006-2022) - organic winding trail */}
                <path
                  d={`M 5 6 
                      C 6 8, 7 9, 8 10
                      C 10 13, 11 15, 12 16
                      C 15 18, 18 20, 20 20 
                      C 24 20, 27 18, 30 16 
                      C 35 14, 38 12, 42 12 
                      C 48 11, 52 10, 56 10 
                      C 62 10, 66 11, 70 12
                      C 80 10, 90 10, 92 12
                      C 90 20, 78 30, 68 34
                      C 62 35, 58 37, 54 38
                      C 48 40, 44 41, 40 42
                      C 34 44, 30 45, 26 46
                      C 20 47, 16 46, 14 44
                      C 10 42, 10 52, 12 62
                      C 14 66, 20 70, 24 70`}
                  fill="none"
                  stroke="hsl(var(--camp-coral))"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="1 0.8"
                  opacity="0.85"
                />
                {/* Upper branch (2023-2026) - winding ascending curve */}
                <path
                  d={`M 24 70 
                      C 28 68, 34 66, 38 68
                      C 44 67, 48 63, 52 62
                      C 58 61, 62 59, 68 58
                      C 74 57, 78 54, 82 52`}
                  fill="none"
                  stroke="hsl(var(--camp-coral))"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="1 0.8"
                  opacity="0.85"
                />
                {/* Lower branch (2023-2026) - winding descending curve */}
                <path
                  d={`M 24 70 
                      C 28 76, 34 80, 38 82
                      C 44 80, 50 77, 54 78
                      C 60 79, 66 81, 72 82
                      C 78 81, 84 79, 88 78`}
                  fill="none"
                  stroke="hsl(var(--camp-coral))"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="1 0.8"
                  opacity="0.85"
                />
              </svg>

              {/* Main path badges (2008-2022) */}
              {singleYears.map((year, index) => {
                const point = mainPathPoints[index];
                const rotation = getMainPathRotation(index);
                const { offsetX, offsetY } = getOffsetForRotation(rotation);

                return (
                  <div
                    key={year}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      left: `${point.x + offsetX}%`,
                      top: `${point.y + offsetY}%`,
                    }}
                  >
                    <button
                      onClick={() => openLightbox(year)}
                      className="relative flex flex-col items-center transition-all duration-300 hover:scale-110 z-10"
                    >
                      <img
                        src={domadinkaBadge}
                        alt=""
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                        style={{ transform: `rotate(${rotation}deg)` }}
                      />
                      <span className="mt-1 px-2 py-1 rounded-md text-[10px] sm:text-xs font-bold bg-background text-foreground shadow-md border border-border/50 group-hover:shadow-lg transition-all duration-200 text-center leading-snug">
                        <span className="block">{year}</span>
                        <span className="block font-semibold text-muted-foreground text-[9px] sm:text-[10px]">
                          {yearThemes[year] || "?"}
                        </span>
                      </span>
                    </button>
                  </div>
                );
              })}

              {/* Upper branch badges (2023-2026) */}
              {splitYears.map((year, index) => {
                const point = upperBranchPoints[index];
                const rotation = getBranchRotation(upperBranchPoints, index);
                const { offsetX, offsetY } = getOffsetForRotation(rotation);

                return (
                  <div
                    key={`${year}-upper`}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      left: `${point.x + offsetX}%`,
                      top: `${point.y + offsetY}%`,
                    }}
                  >
                    <button
                      onClick={() => openLightbox(year, "upper")}
                      className="relative flex flex-col items-center transition-all duration-300 hover:scale-110 z-10"
                    >
                      <img
                        src={domadinkaBadge}
                        alt=""
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                        style={{ transform: `rotate(${rotation}deg)` }}
                      />
                      <span className="mt-1 px-2 py-1 rounded-md text-[10px] sm:text-xs font-bold bg-background text-foreground shadow-md border border-border/50 group-hover:shadow-lg transition-all duration-200 text-center leading-snug">
                        <span className="block">{year}</span>
                        <span className="block font-semibold text-muted-foreground text-[9px] sm:text-[10px]">
                          {splitYearThemes[year]?.upper || "?"}
                        </span>
                      </span>
                    </button>
                  </div>
                );
              })}

              {/* Lower branch badges (2023-2026) */}
              {splitYears.map((year, index) => {
                const point = lowerBranchPoints[index];
                const rotation = getBranchRotation(lowerBranchPoints, index);
                const { offsetX, offsetY } = getOffsetForRotation(rotation);

                return (
                  <div
                    key={`${year}-lower`}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      left: `${point.x + offsetX}%`,
                      top: `${point.y + offsetY}%`,
                    }}
                  >
                    <button
                      onClick={() => openLightbox(year, "lower")}
                      className="relative flex flex-col items-center transition-all duration-300 hover:scale-110 z-10"
                    >
                      <img
                        src={domadinkaBadge}
                        alt=""
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                        style={{ transform: `rotate(${rotation}deg)` }}
                      />
                      <span className="mt-1 px-2 py-1 rounded-md text-[10px] sm:text-xs font-bold bg-background text-foreground shadow-md border border-border/50 group-hover:shadow-lg transition-all duration-200 text-center leading-snug">
                        <span className="block">{year}</span>
                        <span className="block font-semibold text-muted-foreground text-[9px] sm:text-[10px]">
                          {splitYearThemes[year]?.lower || "?"}
                        </span>
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <img src={domadinkaBadge} alt="" className="w-5 h-5 object-contain" />
                <span>Klikněte na rok pro zobrazení fotek</span>
              </div>
            </div>
          </div>

          {/* Note about adding photos */}
          <div className="mt-10 text-center p-6 bg-muted rounded-2xl max-w-xl mx-auto">
            <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
            {/*
            <h3 className="font-display text-base font-semibold text-foreground mb-2">Přidejte své fotky</h3>
            <p className="text-sm text-muted-foreground">
              Klikněte na libovolný rok na mapě. Tyto zástupné obrázky nahraďte skutečnými fotkami z historie Domadinky.
            </p>
            */}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {currentSlide && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Zavřít"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Left arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevSlide();
            }}
            disabled={!hasPrev}
            className={`absolute left-4 p-3 rounded-full bg-white/10 backdrop-blur-sm transition-all ${
              hasPrev ? "text-white hover:bg-white/20" : "text-white/30 cursor-not-allowed"
            }`}
            aria-label="Předchozí"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image container */}
          <div className="relative max-w-4xl w-full mx-16 aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            {getYearImage(currentSlide.year, currentSlide.branch) ? (
              <img
                src={getYearImage(currentSlide.year, currentSlide.branch)}
                alt={getYearTitle(currentSlide.year, currentSlide.branch)}
                className="w-full h-full rounded-2xl object-cover"
              />
            ) : (
              <div
                className={`w-full h-full rounded-2xl bg-gradient-to-br ${getYearColor(currentSlide.year)} flex flex-col items-center justify-center`}
              >
                <Camera className="w-16 h-16 text-foreground/30 mb-4" />
                <p className="text-lg text-foreground/50 text-center font-medium px-4">
                  {getYearTitle(currentSlide.year, currentSlide.branch)}
                </p>
              </div>
            )}

            {/* Year and theme indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <span className="px-4 py-2 rounded-full bg-black/60 text-white font-display font-bold text-center">
                {getYearTitle(currentSlide.year, currentSlide.branch)}
              </span>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNextSlide();
            }}
            disabled={!hasNext}
            className={`absolute right-4 p-3 rounded-full bg-white/10 backdrop-blur-sm transition-all ${
              hasNext ? "text-white hover:bg-white/20" : "text-white/30 cursor-not-allowed"
            }`}
            aria-label="Další"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
