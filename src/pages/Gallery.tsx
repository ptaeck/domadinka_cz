import { useState, useEffect, useCallback } from "react";
import Layout from "@/components/layout/Layout";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import domaslavMap from "@/assets/domaslav-map-landscape.jpg";
import domadinkaBadge from "@/assets/domadinka-megaphone.png";

// Single path years (2008-2022)
const singleYears = Array.from({ length: 15 }, (_, i) => 2008 + i);
// Split path years (2023-2026) - two badges per year
const splitYears = [2023, 2024, 2025, 2026];
// All years for navigation
const allYears = [...singleYears, ...splitYears];

// Themes for single-path years (2008-2022)
const yearThemes: Record<number, string> = {
  2008: "Železná",
  2009: "Šukačka",
  2010: "?",
  2011: "Kytice",
  2012: "Historie českých zemí",
  2013: "Alenka",
  2014: "Hmyzno",
  2015: "Bluebear",
  2016: "Řemesla",
  2017: "Vesmír",
  2018: "Farales",
  2019: "Sirotčinec slečny Peregrinové",
  2020: "Řecko",
  2021: "Domadinka",
  2022: "Staré pověsti české",
};

// Themes for split-path years (2023-2026) - upper and lower branches
const splitYearThemes: Record<number, { upper: string; lower: string }> = {
  2023: { upper: "Domorka", lower: "Atlantslav" },
  2024: { upper: "Dobitín", lower: "Jumanji" },
  2025: { upper: "Doma-Kinkó", lower: "Agnes" },
  2026: { upper: "?", lower: "?" },
};

// Helper to get display title
const getYearTitle = (year: number, branch?: 'upper' | 'lower') => {
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
  return colors[(year - 2008) % colors.length];
};

// Natural path following green dots on the Kaiser map
// Row 1: 2008-2014 going RIGHT (top area)
// Row 2: 2015-2020 going LEFT (middle area)  
// Row 3: 2021-2022 + split 2023-2026 going RIGHT (bottom area)

const mainPathPoints = [
  // Row 1: going right (2008-2014) - following upper green dots
  { x: 6, y: 12 },     // 2008 - top left village
  { x: 14, y: 18 },    // 2009
  { x: 24, y: 14 },    // 2010 - Fürnitz area
  { x: 35, y: 10 },    // 2011
  { x: 48, y: 8 },     // 2012 - Hartosec area
  { x: 62, y: 12 },    // 2013 - near lake
  { x: 78, y: 8 },     // 2014 - Pollschütz - turn down
  // Row 2: going left (2015-2020) - following middle green dots
  { x: 82, y: 32 },    // 2015 - Tschetif area
  { x: 72, y: 30 },    // 2016 (moved up)
  { x: 58, y: 34 },    // 2017 - Schwan B. area (moved up)
  { x: 42, y: 38 },    // 2018 (moved up)
  { x: 28, y: 42 },    // 2019 - Leskau area (moved up)
  { x: 12, y: 40 },    // 2020 - turn down (moved up)
  // Row 3: going right (2021-2022) - following lower green dots
  { x: 8, y: 62 },     // 2021 - Brak area (moved up)
  { x: 22, y: 70 },    // 2022 - Boley Dornschlag - split point (moved up)
];

// Upper branch (2023-2026) - continues right on upper track
const upperBranchPoints = [
  { x: 38, y: 68 },    // 2023 upper (moved up)
  { x: 52, y: 62 },    // 2024 upper (moved up)
  { x: 68, y: 58 },    // 2025 upper (moved up)
  { x: 82, y: 52 },    // 2026 upper - Kokaschütz area (moved up)
];

// Lower branch (2023-2026) - continues right on lower track
const lowerBranchPoints = [
  { x: 38, y: 82 },    // 2023 lower (moved up)
  { x: 54, y: 78 },    // 2024 lower - Jumanji (moved up)
  { x: 72, y: 82 },    // 2025 lower (moved up)
  { x: 88, y: 78 },    // 2026 lower - Sczlur area (moved up)
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
  // Scale factor: dot is ~145px from center, badge is ~48px, container is ~1000px wide
  // So 145px / 48px badge * (48/1000) ≈ 0.145 or roughly 1.5-2% of container
  const scaleFactor = 1.4; // Adjusted for visual alignment
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
    return getRotation(mainPathPoints[14], points[0]);
  }
  if (index < points.length - 1) {
    return getRotation(points[index], points[index + 1]);
  }
  return getRotation(points[index - 1], points[index]);
};

// Build sequential slide list: single years + split years with upper/lower variants
type LightboxSlide = { year: number; branch?: 'upper' | 'lower' };
const allSlides: LightboxSlide[] = [
  ...singleYears.map(year => ({ year })),
  ...splitYears.flatMap(year => [
    { year, branch: 'upper' as const },
    { year, branch: 'lower' as const },
  ]),
];

const Gallery = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number | null>(null);

  const openLightbox = (year: number, branch?: 'upper' | 'lower') => {
    const index = allSlides.findIndex(
      s => s.year === year && s.branch === branch
    );
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
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (currentSlideIndex === null) return;
    
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNextSlide();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeLightbox();
    }
  }, [currentSlideIndex]);

  useEffect(() => {
    if (currentSlideIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [currentSlideIndex, handleKeyDown]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-camp-grass/20 via-accent/30 to-background py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Časová osa Domadinky
            </h1>
            <p className="text-muted-foreground">
              Cesta 19 lety vzpomínek v Domaslavi (2008–2026)
            </p>
          </div>
        </div>
      </section>

      {/* Map Timeline */}
      <section className="py-6 md:py-10">
        <div className="container mx-auto px-4">
          <div className="relative max-w-6xl mx-auto">
            {/* Kaiser Map Background */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-4 border-camp-earth/30">
              <img
                src={domaslavMap}
                alt="Historická mapa Domaslavska"
                className="w-full h-auto"
              />
              
              {/* SVG Path overlay connecting the years with natural curves */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Main path (2008-2022) - organic winding trail */}
                <path
                  d={`M 6 12 
                      C 8 14, 11 19, 14 18 
                      C 17 17, 20 13, 24 14 
                      C 28 15, 31 11, 35 10 
                      C 40 9, 44 7, 48 8 
                      C 53 9, 57 14, 62 12 
                      C 67 10, 73 6, 78 8
                      C 84 10, 83 20, 82 32
                      C 80 28, 76 26, 72 30
                      C 68 34, 64 38, 58 34
                      C 52 30, 48 36, 42 38
                      C 36 40, 32 44, 28 42
                      C 22 40, 16 38, 12 40
                      C 6 42, 4 50, 8 62
                      C 12 68, 18 72, 22 70`}
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
                  d={`M 22 70 
                      C 26 66, 32 66, 38 68
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
                  d={`M 22 70 
                      C 26 76, 32 80, 38 82
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
                      <span className="mt-0.5 px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-bold bg-background/90 text-foreground shadow-sm border border-border opacity-80 group-hover:opacity-100 transition-opacity duration-200 text-center leading-tight max-w-[80px] sm:max-w-[100px]">
                        <span className="block">{year}</span>
                        <span className="block font-medium text-muted-foreground truncate">{yearThemes[year] || "?"}</span>
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
                      onClick={() => openLightbox(year, 'upper')}
                      className="relative flex flex-col items-center transition-all duration-300 hover:scale-110 z-10"
                    >
                      <img
                        src={domadinkaBadge}
                        alt=""
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                        style={{ transform: `rotate(${rotation}deg)` }}
                      />
                      <span className="mt-0.5 px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-bold bg-background/90 text-foreground shadow-sm border border-border opacity-80 group-hover:opacity-100 transition-opacity duration-200 text-center leading-tight max-w-[80px] sm:max-w-[100px]">
                        <span className="block">{year}</span>
                        <span className="block font-medium text-muted-foreground truncate">{splitYearThemes[year]?.upper || "?"}</span>
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
                      onClick={() => openLightbox(year, 'lower')}
                      className="relative flex flex-col items-center transition-all duration-300 hover:scale-110 z-10"
                    >
                      <img
                        src={domadinkaBadge}
                        alt=""
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                        style={{ transform: `rotate(${rotation}deg)` }}
                      />
                      <span className="mt-0.5 px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-bold bg-background/90 text-foreground shadow-sm border border-border opacity-80 group-hover:opacity-100 transition-opacity duration-200 text-center leading-tight max-w-[80px] sm:max-w-[100px]">
                        <span className="block">{year}</span>
                        <span className="block font-medium text-muted-foreground truncate">{splitYearThemes[year]?.lower || "?"}</span>
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
            <h3 className="font-display text-base font-semibold text-foreground mb-2">
              Přidejte své fotky
            </h3>
            <p className="text-sm text-muted-foreground">
              Klikněte na libovolný rok na mapě. Tyto zástupné obrázky nahraďte skutečnými fotkami z historie Domadinky.
            </p>
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
            onClick={(e) => { e.stopPropagation(); goToPrevSlide(); }}
            disabled={!hasPrev}
            className={`absolute left-4 p-3 rounded-full bg-white/10 backdrop-blur-sm transition-all ${
              hasPrev ? "text-white hover:bg-white/20" : "text-white/30 cursor-not-allowed"
            }`}
            aria-label="Předchozí"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image container */}
          <div 
            className="relative max-w-4xl w-full mx-16 aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${getYearColor(currentSlide.year)} flex flex-col items-center justify-center`}>
              <Camera className="w-16 h-16 text-foreground/30 mb-4" />
              <p className="text-lg text-foreground/50 text-center font-medium px-4">
                {getYearTitle(currentSlide.year, currentSlide.branch)}
              </p>
            </div>
            
            {/* Year and theme indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <span className="px-4 py-2 rounded-full bg-black/60 text-white font-display font-bold text-center">
                {getYearTitle(currentSlide.year, currentSlide.branch)}
              </span>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNextSlide(); }}
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
