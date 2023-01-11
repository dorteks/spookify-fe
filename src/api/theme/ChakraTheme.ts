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
  em: "490px",
  sm: "768px",
  md: "1024px",
  lg: "1440px",
  xl: "1730px",
  "2xl": "1940px",
};

const theme = extendTheme({ ...config, ...customThemeConfig, breakpoints });

export default theme;
