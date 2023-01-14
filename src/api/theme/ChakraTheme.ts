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
  //pink
  am: "376px",
  // purple
  em: "426px",
  //blue
  sm: "769px",
  //yellow
  md: "1025px",
  //brown
  lg: "1441px",
  //green
  xl: "1731px",
  //orange
  "2xl": "1941px",
};

const theme = extendTheme({ ...config, ...customThemeConfig, breakpoints });

export default theme;
