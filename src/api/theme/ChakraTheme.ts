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
  // am: "320px",
  em: "426px",
  sm: "769px",
  md: "1025px",
  lg: "1441px",
  xl: "1730px",
  "2xl": "1940px",
};

const theme = extendTheme({ ...config, ...customThemeConfig, breakpoints });

export default theme;
