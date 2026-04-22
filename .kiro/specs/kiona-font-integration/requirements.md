# Requirements Document

## Introduction

This feature integrates the Kiona font (from dafont.com) as the sole display typeface across the entire LexHire frontend (React + Vite). The integration replaces the current Azonix/Inter/Playfair Display font stack with Kiona, applying it globally via CSS custom properties. The constraints are strict: no italic variant is used anywhere, and only font-weight normal (400) and medium (500) are permitted site-wide.

## Glossary

- **Font_System**: The CSS layer responsible for loading and applying typefaces across the application, defined in `client/src/index.css`.
- **Kiona**: The target display font sourced from dafont.com, available as a web font file to be self-hosted under `client/public/fonts/`.
- **Font_Weight_Normal**: CSS `font-weight: 400`.
- **Font_Weight_Medium**: CSS `font-weight: 500`.
- **Global_Stylesheet**: The file `client/src/index.css`, which is the single entry point for all base styles and CSS custom properties.
- **Theme_Variables**: The `@theme` block in `Global_Stylesheet` that defines design tokens consumed by Tailwind and component styles.
- **Page**: Any of the six route-level components — LandingPage, LoginPage, RegisterPage, SearchPage, DashboardPage, LawyerProfile.
- **Component**: Any reusable UI element under `client/src/components/`, including Button, Card, Input, Preloader, CustomCursor, ScrollProgressBar, and layout components.

---

## Requirements

### Requirement 1: Self-Host the Kiona Font Files

**User Story:** As a developer, I want the Kiona font files hosted within the project, so that the site does not depend on an external CDN and the font loads reliably in all environments.

#### Acceptance Criteria

1. THE Font_System SHALL load Kiona from font files placed in `client/public/fonts/`.
2. THE Font_System SHALL declare a `@font-face` rule for Kiona with `font-weight: 400` (Font_Weight_Normal).
3. THE Font_System SHALL declare a `@font-face` rule for Kiona with `font-weight: 500` (Font_Weight_Medium).
4. THE Font_System SHALL set `font-style: normal` on every `@font-face` declaration for Kiona.
5. IF a Kiona font file is missing at the declared `src` path, THEN THE Font_System SHALL fall back to a system sans-serif font so that text remains readable.

---

### Requirement 2: Apply Kiona as the Global Typeface

**User Story:** As a designer, I want Kiona applied to every text element on the site, so that the visual identity is consistent across all pages and components.

#### Acceptance Criteria

1. THE Font_System SHALL update the `--font-headline`, `--font-body`, and `--font-label` Theme_Variables to reference `"Kiona"` as the primary font family.
2. THE Global_Stylesheet SHALL set `font-family: "Kiona", sans-serif` on the `body` selector so that all text inherits Kiona by default.
3. THE Global_Stylesheet SHALL set `font-family: "Kiona", sans-serif` on the `h1, h2, h3, h4, h5, h6` selector so that all headings use Kiona.
4. WHEN a Page or Component renders text, THE Font_System SHALL apply Kiona to that text through CSS inheritance from the `body` rule.
5. THE Font_System SHALL remove references to `"Azonix"`, `"Playfair Display"`, `"Inter"`, and any other previously declared body or headline font families from Theme_Variables.

---

### Requirement 3: Restrict Font Weight to Normal and Medium Only

**User Story:** As a designer, I want only font-weight 400 and 500 used across the site, so that the typography remains controlled and consistent with the Kiona design intent.

#### Acceptance Criteria

1. THE Global_Stylesheet SHALL declare a CSS rule that sets `font-weight: 400` as the default on the `body` selector.
2. THE Global_Stylesheet SHALL define a utility class (e.g., `.font-medium`) that applies `font-weight: 500` for intentional medium-weight usage.
3. THE Font_System SHALL NOT load or declare any `@font-face` for Kiona with font-weight values other than 400 or 500.
4. IF any Page or Component currently applies a font-weight other than 400 or 500 via an inline style or Tailwind class (e.g., `font-bold`, `font-semibold`, `font-light`), THEN THE Font_System SHALL override those weights to the nearest permitted value (400 or 500) via a global CSS reset rule.

---

### Requirement 4: Prohibit Italic Styles Site-Wide

**User Story:** As a designer, I want italic text completely disabled across the site, so that the Kiona font is never rendered in a synthesized or oblique style.

#### Acceptance Criteria

1. THE Global_Stylesheet SHALL include a CSS reset rule that sets `font-style: normal` on all elements (`*`) to prevent any italic rendering.
2. THE Font_System SHALL NOT declare any `@font-face` for Kiona with `font-style: italic` or `font-style: oblique`.
3. IF a Page or Component applies `font-style: italic` or `font-style: oblique` via inline style or utility class, THEN THE Global_Stylesheet reset rule SHALL override it to `font-style: normal`.

---

### Requirement 5: Preserve Existing Non-Font Styles

**User Story:** As a developer, I want all non-typography styles (colors, spacing, layout, animations) to remain unchanged after the font integration, so that the visual design is not unintentionally broken.

#### Acceptance Criteria

1. WHEN the Kiona font integration is applied, THE Global_Stylesheet SHALL retain all existing color tokens, radius tokens, utility classes, and media queries defined in the `@theme` block.
2. WHEN the Kiona font integration is applied, THE Global_Stylesheet SHALL retain the `.material-symbols-outlined` font-variation-settings rules unchanged, as those rules apply to an icon font, not Kiona.
3. THE Font_System SHALL NOT modify `client/src/App.css` or any Page/Component file as part of the font integration; all changes SHALL be confined to `client/src/index.css` and the addition of font files under `client/public/fonts/`.
