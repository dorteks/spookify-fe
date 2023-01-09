import {
  extendTheme,
  type ThemeOverride,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customThemeConfig: ThemeOverride = {
  components: {
    Button: {},
  },
  colors: {},
};

const breakpoints = {
  sm: "320px",
  smd: "420px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ ...config, ...customThemeConfig });

export default theme;
