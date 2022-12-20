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
    colors: {},
  },
};

const theme = extendTheme({ ...config, ...customThemeConfig });

export default theme;
