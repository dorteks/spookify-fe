import { Stack } from "@chakra-ui/react";
import { NewAlbum } from "../reusableComponents/albums";

export const NewAlbumBody = () => {
  return (
    <Stack
      bgColor="yellow"
      pt="40px"
      pb="15px"
      direction={["column", "column", "row", "row", "row", "row", "row"]}
      gap={["1", "5", "3", "5", "8", "8"]}
      pl={["15px", "30px", "20px", "50px", "50px", "80px", "80px"]}
    >
      <NewAlbum
        title="NEW ALBUM"
        newAlbumTitle="GOOD THINGS"
        newAlbumArtist="DAN + SHAY"
        bckImage={[
          "/images/dan+shay-small.jpg",
          "/images/dan+shay-small.jpg",
          "/images/dan+shay-small.jpg",
          "/images/dan+shay.jpg",
        ]}
      />
      <NewAlbum
        title="BILLIE EILISH"
        newAlbumTitle="NEW ALBUM"
        newAlbumArtist=""
        bckImage="/images/billie-eilish-large.jpeg"
      />
    </Stack>
  );
};
