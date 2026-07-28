---
name: Heritage Opulence
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#5a403c'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#8e706b'
  outline-variant: '#e3beb8'
  surface-tint: '#b52619'
  primary: '#610000'
  on-primary: '#ffffff'
  primary-container: '#8b0000'
  on-primary-container: '#ff907f'
  inverse-primary: '#ffb4a8'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#2c2c28'
  on-tertiary: '#ffffff'
  tertiary-container: '#43423e'
  on-tertiary-container: '#b0aea9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#920703'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e5e2dc'
  tertiary-fixed-dim: '#c9c6c1'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474743'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  heritage-red: '#630D16'
  antique-gold: '#B38B45'
  silk-cream: '#FDFBF7'
  charcoal-ink: '#121212'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  price-display:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies the essence of high-end heritage jewelry: timeless, majestic, and meticulously crafted. It is designed for a discerning global audience that appreciates the intersection of traditional Indian artistry and modern luxury. 

The visual style is **Modern Luxury**, characterized by a sophisticated balance of rich textures and expansive whitespace. It draws inspiration from editorial high-fashion layouts, utilizing "quiet luxury" principles where the quality of the materials (typography and color) speaks louder than decorative flourishes. The interface should feel like an invitation to a private viewing, evoking feelings of exclusivity, trust, and cultural pride.

## Colors
The palette is rooted in the "Trimurti" of heritage luxury: Deep Red, Gold, and Cream. 

- **Primary (Heritage Red):** A deep, regal crimson used sparingly for high-impact accents, call-to-actions, and brand moments. It symbolizes passion and the roots of Indian jewelry.
- **Secondary (Antique Gold):** A refined, non-metallic gold used for iconography, borders, and subtle highlights. It should never appear "yellow," but rather maintain an earthy, metallic depth.
- **Tertiary (Silk Cream):** The primary canvas. This near-white, warm neutral provides a softer, more premium feel than pure white, reducing eye strain and enhancing the warmth of gemstone photography.
- **Neutral (Charcoal Ink):** Used for typography and deep structural elements to ensure high legibility and a grounded feel.

## Typography
The typography strategy pairings a high-contrast, elegant serif with a clean, contemporary sans-serif to bridge the gap between tradition and modern e-commerce.

**Headlines:** Utilize *Playfair Display*. Its delicate hairlines and heavy stems mimic the precision of jewelry engraving. Use "display-lg" for hero sections and "headline-lg" for collection titles.

**Body & Interface:** Utilize *Hanken Grotesk*. This provides a neutral, highly legible counterpoint to the expressive serif. Its openness ensures that technical details and descriptions remain clear even at smaller sizes.

**Labels:** Small caps with increased letter spacing should be used for category labels, breadcrumbs, and metadata to create a sense of organized luxury.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain the "editorial" feel of a high-end catalog, transitioning to a fluid model on mobile. 

- **Desktop (1440px+):** A 12-column grid with generous 80px outer margins. This creates a "frame" around the content, focusing the user's eye on the products.
- **Rhythm:** Use an 8px base unit. Section vertical spacing should be aggressive (96px to 128px) to allow the high-resolution photography to "breathe."
- **Reflow:** On tablet, reduce margins to 40px. On mobile, use a 4-column grid with 20px margins. Product cards should primarily occupy 2 columns on mobile to maintain visual detail.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surface Strategy:** The base layer is "Silk Cream." Overlays and cards use a pure "White" or a slightly lighter tint of cream to create a subtle lift.
- **Borders:** Use thin (1px) borders in "Antique Gold" (at 30% opacity) or light grey to define zones without adding visual clutter.
- **Interactive Depth:** Only the most critical interactive elements (like a "Buy Now" button) should use a soft, ambient shadow (15% opacity Heritage Red) to suggest a slight physical lift.
- **Glassmorphism:** Use a very subtle backdrop blur (8px) for navigation headers and modal overlays to maintain context while highlighting the active layer.

## Shapes
The shape language is "Soft" (0.25rem), prioritizing structural integrity over playfulness.

- **Primary Elements:** Buttons and Input fields use a subtle 4px radius. This is enough to soften the edges without losing the professional, "architectural" feel of the brand.
- **Image Containers:** Product photography should remain sharp (0px) to mimic the precision of a cut gemstone, or use a very slight 2px radius for a softer editorial look.
- **Secondary Elements:** Search bars and tags can utilize the "rounded-lg" (8px) setting to differentiate them from the primary structural grid.

## Components

- **Buttons:**
  - *Primary:* Solid "Heritage Red" with "Silk Cream" text. No icons, just centered caps typography.
  - *Secondary:* "Silk Cream" background with a 1px "Antique Gold" border.
  - *Text:* Underlined "Charcoal Ink" for low-priority actions.
- **Input Fields:** Bottom-border only (1px Antique Gold) to mimic elegant stationary. Labels should be small-caps above the line.
- **Cards:** No shadows. Use a "Silk Cream" background and a subtle 1px border. The product image should be the focal point, occupying 70% of the card height.
- **Chips/Tags:** Small, pill-shaped with "Antique Gold" text on a 10% opacity Gold background.
- **Checkboxes/Radios:** Custom styled with "Heritage Red" accents. Use a thin "Antique Gold" ring for the unselected state.
- **Navigation:** A centered, minimalist header. Navigation links in "Label-caps" style. Use a thin gold line for the active state.
- **Product Detail:** High-resolution zoom functionality is a core component. Use a "Gold" accented carousel indicator.
