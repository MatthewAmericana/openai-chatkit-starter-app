import {
  ColorOption,
  StartScreenPrompt,
  ThemeOption,
} from "@openai/chatkit";

/**
 * Chat UI Configuration for the "images chatbot" look:
 * - Header title with online badge text
 * - Three quick-prompt chips
 * - Neutral gray bot bubbles, black user bubbles
 * - Generous rounding on surfaces and chips
 */

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

/** Header branding (title + small online badge text) */
export const BRAND = {
  title: "chatty-demo-store-apparel",
  onlineText: "We are online",
};

/** Start screen / quick-suggestion chips */
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Track my order",
    prompt: "Track my order",
    icon: "map-pin",
  },
];

/** Composer placeholder to match the screenshot */
export const PLACEHOLDER_INPUT = "Type your message";

/**
 * Color scheme tuned to the screenshot:
 * - Grays are neutral/cool.
 * - Accent is near-black in light mode and near-white in dark mode.
 */
export const getColorScheme = (theme: "light" | "dark"): ColorOption => ({
  grayscale: {
    hue: 220,               // cool slate-like gray
    tint: 0,                // neutral
    shade: theme === "dark" ? -1 : -4,
  },
  accent: {
    primary: theme === "dark" ? "#f1f5f9" : "#0f172a", // slate-50 vs slate-900
    level: 1,
  },
});

/**
 * Theme options. Keep generous rounding to match frame, chips, and bubbles.
 */
export const THEME = (theme: "light" | "dark"): ThemeOption => ({
  colorScheme: theme,
  color: getColorScheme(theme),
  radius: "round",
});

/**
 * Optional convenience map for rendering the bottom tab bar in your UI.
 * (Home / Message / Track / Help — “Message” selected)
 */
export const TABS = [
  { key: "home",    label: "Home",    icon: "home" },
  { key: "message", label: "Message", icon: "message-circle", active: true },
  { key: "track",   label: "Track",   icon: "package-search" },
  { key: "help",    label: "Help",    icon: "circle-help" },
] as const;

/**
 * Bubble styling tokens to ensure visual parity with the screenshot.
 * Map these in your component styles (Tailwind/CSS variables).
 */
export const BUBBLES = {
  user:   { bg: "#000000", fg: "#ffffff", corner: "br" }, // rounded-br-sm in UI
  bot:    { bg: "#f3f4f6", fg: "#111827", corner: "bl" }, // rounded-bl-sm in UI
  maxWidth: "80%", // keep similar line widths
} as const;
