import {
  Box,
  Button,
  HStack,
  Img,
  Text,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { TopbarItems } from "./reusables";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RiPlayListAddLine } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";

const Topbar = () => {
  return (
    <Box
      bgColor="white"
      width="full"
      h="100px"
      display="flex"
      alignContent="center"
      justifyContent="center"
    >
      <Stack direction="row" pt="25px" pb="25px">
        <Img
          boxSize="30px"
          borderRadius="25px"
          bgColor="gray.400"
          mr="30px"
          p="10px"
        />
        <Stack>
          <Button width="100%" borderRadius="25px">
            Search for music
          </Button>
        </Stack>
        <Stack direction="row" pl="100px">
          <TopbarItems
            title={"Personal Release"}
            leftIcon={<BsFillBookmarkFill />}
          />
          <TopbarItems
            title={"Create Playlist"}
            leftIcon={<RiPlayListAddLine />}
          />
          <TopbarItems title={"Settings"} leftIcon={<AiTwotoneSetting />} />
        </Stack>

        <Avatar
          size="md"
          mr="10px"
          pt="3px"
          pb="3px"
          borderRadius="25px"
          src=""
        />
      </Stack>
    </Box>
  );
};

export default Topbar;
