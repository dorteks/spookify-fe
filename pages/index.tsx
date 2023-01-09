import { Box, Grid, GridItem } from "@chakra-ui/react";
import Body from "../src/components/body";
import Sidebar from "../src/components/sidebar";
import Topbar from "../src/components/topbar";

const Home = () => {
  return (
    <Box>
      <Grid
        templateColumns={[
          "200px 1fr",
          "200px 1fr",
          "200px 1fr",
          "250px 1fr",
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
