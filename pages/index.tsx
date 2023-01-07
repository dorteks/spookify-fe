import { Box, Grid, GridItem, HStack, Stack, VStack } from "@chakra-ui/react";
import Body from "../src/components/body";
import Sidebar from "../src/components/sidebar";
import Topbar from "../src/components/topbar";

const Home = () => {
  return (
    <Box>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={1}
      >
        <GridItem rowSpan={2} colSpan={1} h="auto">
          <Sidebar />
        </GridItem>

        <GridItem colSpan={6} h="auto">
          <Stack direction="column">
            <Topbar />
            <Body />
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
