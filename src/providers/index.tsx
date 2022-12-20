import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/ChakraTheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
  pageProps: any;
};

const AppProvider = ({ children, pageProps }: Props) => {
  const queryClient = React.useRef<any>(null);

  if (!queryClient.current)
    queryClient.current = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          retryOnMount: false,
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
        },
      },
    });

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient.current}>
        {children}
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default AppProvider;
