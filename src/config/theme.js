import { mode } from "@chakra-ui/theme-tools";

export const colors = {
  brand: {
    primary: "#a32a29",
    secondary: "#d97d48",
    blackish: "#221f1f",
    primaryDark: "#8a2323",
    black: "#000",
    white: "#fff",
    whiteSmoke: "#F5F5F5",
    boxShadow: "rgba(0, 0, 0, 0.9)",
  },
  // ...

  button: {
    primary: "#BE5529",
    google: "#4285F4",
  },

  subtleBorderColor: {
    light: mode("gray.200", "gray.600"),
    dark: mode("gray.600", "gray.200"),
  },
};
