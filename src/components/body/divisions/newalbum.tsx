import { Stack } from "@chakra-ui/react";
import { NewAlbum } from "../reusableComponents/albums";

export const NewAlbumBody = () => {
  return (
    <Stack
      bgColor="yellow"
      direction="row"
      pt="40px"
      pb="15px"
      pl={["20px", "40px", "80px", "80px", "80px", "80px"]}
      gap={["1", "5", "8", "8", "8", "8"]}
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
