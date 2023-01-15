import { Box } from "@chakra-ui/react";
import { NewAlbumBody } from "./body/divisions/newalbum";
import { TopChartsBody } from "./body/divisions/topCharts";
import { NewReleaseBody } from "./body/divisions/newRelease";
import { RecommendedAlbumsBody } from "./body/divisions/recommendedAlbums";
import { TopSinglesTopAlbumsBody } from "./body/divisions/topSinglestopAlbums";

const Body = () => {
  return (
    <Box
      h="auto"
      bgColor="#E8ECEB"
      width={["31.5%", "21%", "34.5%", "42%", "43%", "57%", "61.5%"]}
    >
      <NewAlbumBody />
      <RecommendedAlbumsBody />
      <TopSinglesTopAlbumsBody />
      <NewReleaseBody />
      <TopChartsBody />
    </Box>
  );
};

export default Body;
