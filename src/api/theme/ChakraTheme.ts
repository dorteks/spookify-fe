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
  colors: {
    primary: {
      "primary.1": "#F0EFF4",
      "primary.2": "#E8ECEB",
    },
  },
};

const breakpoints = {
  am: "376px",
  em: "426px",
  sm: "769px",
  md: "1025px",
  lg: "1441px",
  xl: "1731px",
  "2xl": "1941px",
};

const theme = extendTheme({ ...config, ...customThemeConfig, breakpoints });

export default theme;
