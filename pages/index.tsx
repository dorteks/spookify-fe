import {
  Box,
  Card,
  Grid,
  GridItem,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";
import Body from "../src/components/body";
import Sidebar from "../src/components/sidebar";
import Topbar from "../src/components/topbar";

const Home = () => {
  return (
    <Box>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        pr="5px"
      >
        <GridItem rowSpan={2} colSpan={1} bgColor="gray.700">
          <Sidebar />
        </GridItem>
        <GridItem colSpan={5}>
          <Topbar />
          <Body />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
