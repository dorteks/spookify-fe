import {
  Box,
  Card,
  Grid,
  GridItem,
  HStack,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import Body from "../src/components/body";
import Sidebar from "../src/components/sidebar";
import Topbar from "../src/components/topbar";

const Home = () => {
  return (
    <Box>
      <Grid templateColumns={["300px 1fr"]}>
        <GridItem>
          <Sidebar />
        </GridItem>
        <GridItem>
          <Topbar />
          <Body />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
