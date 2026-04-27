# Design System Strategy: The Urban Pulse

## 1. Overview & Creative North Star
This design system is built to transform a digital interface into a high-end editorial experience. Our Creative North Star is **"The Urban Pulse"**—a visual language that captures the high-contrast energy of a midnight city street and the refined, tactile nature of a luxury café. 

To move beyond the "template" look, this system rejects the standard rigid grid in favor of **Intentional Asymmetry**. We utilize oversized typography that bleeds off-canvas, overlapping elements that create depth through physical layers, and a high-contrast palette that prioritizes bold brand statements over generic utility. Every screen should feel like a curated page from a street-style fashion lookbook: stylish, premium, and inherently Instagram-ready.

---

## 2. Colors
The color palette is rooted in a "Noir-Premium" foundation, utilizing deep blacks and vibrant yellows to command attention.

*   **Primary Foundation:** Use `background` (#0e0e0e) for 90% of the canvas. This creates a dark, expansive void that makes the `primary` yellow (#fed74c) pop with electric intensity.
*   **The "No-Line" Rule:** To maintain a high-end feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit on top of a `surface` background to create a subtle, borderless distinction.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of stacked physical layers. 
    *   Base: `surface-dim`
    *   Secondary Content: `surface-container`
    *   Interactive Elements: `surface-container-highest`
*   **The "Glass & Gradient" Rule:** Floating elements (like navigation bars or modal headers) must use **Glassmorphism**. Combine `surface-variant` at 60% opacity with a 16px backdrop-blur. 
*   **Signature Textures:** Apply a subtle radial gradient on primary buttons, transitioning from `primary` (#fed74c) at the center to `primary_container` (#bf9d09) at the edges. This adds "soul" and prevents the yellow from feeling flat or "plastic."

---

## 3. Typography
Typography is our primary tool for storytelling. We pair the architectural weight of **Epilogue** with the modern utility of **Inter**.

*   **Display & Headlines (Epilogue):** These are the "hero" elements. Use `display-lg` and `display-md` with tight letter spacing (-0.02em). Headlines should often be used in all-caps to reinforce the "Urban Pulse" aesthetic.
*   **Body & Labels (Inter):** For readability, `body-lg` and `body-md` provide a clean, neutral contrast to the aggressive headlines. Ensure generous line-height (1.6) to allow the text to breathe against the dark background.
*   **Hierarchy:** Create extreme scale shifts. Placing a `display-lg` headline next to a `label-sm` creates an editorial tension that feels intentional and high-design.

---

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering**, mimicking the way light hits different surfaces in a dimly lit café.

*   **The Layering Principle:** Place `surface-container-lowest` cards on a `surface-container-low` section to create a soft, natural lift. No shadows are required for standard cards.
*   **Ambient Shadows:** For floating menus or buttons, use "Neon Shadows." These must be extra-diffused (blur: 24px) and low-opacity (8%). Use the `primary` color (#fed74c) for the shadow tint instead of black to mimic the glow of a neon sign.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at **15% opacity**. This creates a "Ghost Border" that suggests a boundary without breaking the dark aesthetic.
*   **Glassmorphism:** Use semi-transparent `surface` colors to allow background elements to bleed through. This integrates the layout, making it feel like one cohesive piece of glass rather than "pasted-on" components.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` fill with `on_primary` text. Use `md` (0.75rem) roundedness. 
*   **Hover State:** Apply a **Neon-style glow** using `box-shadow: 0px 0px 15px rgba(254, 215, 76, 0.5)`.
*   **Tertiary:** No fill, no border. Underlined text using the `primary` color.

### Cards & Lists
*   **Rule:** **No Divider Lines.** Separate list items using `vertical white space` (24px - 32px) or alternating background shifts between `surface-container-low` and `surface-container`.
*   **Cards:** Use `surface-container-high` for card backgrounds to make them "pop" against the `surface-dim` background.

### Inputs
*   **Text Fields:** Use a `surface-container-lowest` fill. The bottom border should be a 2px stroke of `outline_variant` that transitions to `primary` on focus.
*   **Glow Effect:** On focus, the entire input field should emit a subtle `primary` outer glow.

### Signature Component: The "Social Card"
A specific component for this system: An oversized image card with `display-sm` text overlapping the bottom-left corner, utilizing a `surface-bright` glassmorphism overlay for the text container. This is designed specifically for "Instagram-friendly" menu item showcases.

---

## 6. Do's and Don'ts

### Do
*   **DO** use oversized imagery that spans the full width of the screen.
*   **DO** mix font weights—pairing a bold headline with a light body creates a premium feel.
*   **DO** use "Negative Space" as a structural element. Let the dark background dominate.
*   **DO** utilize the `tertiary` (#f7ffbc) color for tiny accents, like notification dots or price tags, to add a "designer" touch.

### Don't
*   **DON'T** use 100% white (#ffffff) for long-form body text; use `on_surface_variant` (#adaaaa) to reduce eye strain on dark backgrounds.
*   **DON'T** use standard "Drop Shadows" (Black/Gray). Always tint shadows with the surface color.
*   **DON'T** use default Material Design "roundness" for everything. Keep edges at `md` (0.75rem) or `none` for a sharper, more urban edge.
*   **DON'T** use dividers. If you feel you need a line, use white space instead.