import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0a0a0a",     // near-black
          fg: "#e5e7eb",     // slate-200
          accent: "#1d4ed8"  // NAVY/blue-600 accent
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Rajdhani", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        // swapped amber glow -> navy glow
        "mesh":
          "radial-gradient(60% 50% at 10% 0%, rgba(29,78,216,0.10) 0%, transparent 60%), radial-gradient(50% 40% at 90% 10%, rgba(255,255,255,0.05) 0%, transparent 60%)"
      }
    }
  },
  plugins: []
} satisfies Config;
