import { Stack } from "@chakra-ui/react";
import { NewAlbumNew } from "../reusableComponents/albums";

export const NewReleaseBody = () => {
  return (
    <Stack
      direction="row"
      display="flex"
      pt="50px"
      w={["43%", "86%", "83%", "88%", "85%", "85%"]}
      ml={["20px", "40px", "80px", "80px", "80px", "80px"]}
      gap={["1", "1", "1", "2", "2", "4"]}
      overflowX="auto"
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
