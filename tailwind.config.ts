import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      c1:"#e1e7ed",
      c2:"#4D317F",
      c3: "#E8D026",
      c4: "#FD584A",
      c5: "#D4D7D6",
      c6: "#F2F5F4",
      c7: "#22AFDC",
      c8: "#B50320",
      c9: "#3569A1",
      c10: "#54D4C9"

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionDuration: {
        "1500": "1500ms",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-animate")],
};
export default config;
