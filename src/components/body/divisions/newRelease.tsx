import { Stack } from "@chakra-ui/react";
import { NewAlbumNew } from "../reusableComponents/albums";

export const NewReleaseBody = () => {
  return (
    <Stack
      pt="50px"
      display="flex"
      direction="row"
      overflowX="auto"
      gap={["1", "1", "1", "2", "2", "4"]}
      // gap={["1","1", "1", "1", "2", "2", "4"]}

      w={["43%", "86%", "83%", "88%", "85%", "85%"]}
      // w={["43%","43%", "86%", "83%", "88%", "85%", "85%"]}

      // ml={["20px", "40px", "80px", "80px", "80px", "80px"]}
      ml={["15px", "30px", "40px", "80px", "80px", "80px", "80px"]}
    >
      <NewAlbumNew
        title={"THE RADIO SHOW"}
        artist={"LADY GAGA"}
        bckImage={["/images/lady-gaga.jpeg"]}
      />
      <NewAlbumNew
        title={"NEW ALBUM"}
        artist={"THE KILLERS"}
        bckImage={["/images/the-killers-small.jpeg"]}
      />
      <NewAlbumNew
        title={"TAYLOR SWIFT OFFICIAL"}
        artist={""}
        bckImage={["/images/taylor-swift.jpeg"]}
      />
      <NewAlbumNew
        title={"FEM"}
        artist={"DAVIDO"}
        bckImage={["/images/davido.jpeg"]}
      />
      <NewAlbumNew
        title={"THE RADIO SHOW"}
        artist={"LADY GAGA"}
        bckImage={["/images/lady-gaga.jpeg"]}
      />
      <NewAlbumNew
        title={"NEW ALBUM"}
        artist={"THE KILLERS"}
        bckImage={["/images/the-killers-small.jpeg"]}
      />
      <NewAlbumNew
        title={"TAYLOR SWIFT OFFICIAL"}
        artist={""}
        bckImage={["/images/taylor-swift.jpeg"]}
      />
      <NewAlbumNew
        title={"FEM"}
        artist={"DAVIDO"}
        bckImage={["/images/davido.jpeg"]}
      />
    </Stack>
  );
};
