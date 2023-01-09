import {
  Box,
  Text,
  Stack,
  Avatar,
  Flex,
  HStack,
  Img,
  Button,
} from "@chakra-ui/react";
import { TopbarItems } from "./sidebar/reusables";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RiPlayListAddLine } from "react-icons/ri";
import { AiFillLike, AiTwotoneSetting } from "react-icons/ai";

const Topbar = () => {
  return (
    <Box bgColor="gray.50" maxW="100%" h="100px">
      <Stack
        display="flex"
        alignContent="center"
        justifyContent="space-between"
      >
        <HStack align="center" justify="space-between" w="100%" h="100px">
          <Stack direction="row" ml="20px">
            <Img
              boxSize="45px"
              mr="10px"
              borderRadius="full"
              bgColor="gray.500"
            />
            <Button w="650px" ml="30px" borderRadius="25PX">
              Search
            </Button>
          </Stack>

          <Stack direction="row" pr="20px">
            <TopbarItems
              title={"Personal Release"}
              leftIcon={<BsFillBookmarkFill />}
            />
            <TopbarItems
              title={"Create Playlist"}
              leftIcon={<RiPlayListAddLine />}
            />
            <TopbarItems title={"Settings"} leftIcon={<AiTwotoneSetting />} />
            <Avatar size="md" pt="3px" pb="3px" borderRadius="25px" src="" />
          </Stack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Topbar;
