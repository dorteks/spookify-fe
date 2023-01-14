import { Box } from "@chakra-ui/react";
import { NewAlbumBody } from "./body/divisions/newalbum";
import { TopChartsBody } from "./body/divisions/topCharts";
import { NewReleaseBody } from "./body/divisions/newRelease";
import { RecommendedAlbumsBody } from "./body/divisions/recommendedAlbums";
import { TopSinglesTopAlbumsBody } from "./body/divisions/topSinglestopAlbums";
import { TopbarSmall } from "./topbar/topbarsmall";

const Body = () => {
  return (
    <Box
      h="auto"
      bgColor="gray.50"
      // width={["42%", "34.5%", "42%", "43%", "57%", "61.5%"]}
      width={["31.5%", "21%", "34.5%", "42%", "43%", "57%", "61.5%"]}
    >
      {/* <TopbarSmall /> */}
      <NewAlbumBody />
      <RecommendedAlbumsBody />
      <TopSinglesTopAlbumsBody />
      <NewReleaseBody />
      <TopChartsBody />
    </Box>
  );
};

export default Body;
