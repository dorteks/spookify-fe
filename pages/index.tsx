import Body from "../src/components/body";
import Topbar from "../src/components/topbar";
import Sidebar from "../src/components/sidebar";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Grid
        templateColumns={[
          "0px 1fr",
          "0px 1fr",
          "0px 1fr",
          "260px 1fr",
          "260px 1fr",
          "300px 1fr",
        ]}
      >
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
