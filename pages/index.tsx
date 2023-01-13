import Body from "../src/components/body";
import Topbar from "../src/components/topbar";
import Sidebar from "../src/components/sidebar";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { SwipeLeft } from "../src/components/swiper";

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
          <Heading>
            <title>Spookify</title>
          </Heading>
          <Sidebar />
        </GridItem>
        <GridItem>
          <Topbar />
          <Body />
          {/* <SwipeLeft /> */}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
