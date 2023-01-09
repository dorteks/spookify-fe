import { Flex, Avatar, Stack, Box, Text } from "@chakra-ui/react";
import { AiTwotoneSetting } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RiPlayListAddLine } from "react-icons/ri";
import { TopbarItems } from "../reusables";

export const Topbar1560 = () => {
  return (
    <Box bgColor="gray.50" maxW="100%" h="80px">
      <Flex alignItems="center" flexWrap="wrap" pt="20px" pb="20px">
        <Flex gap="4" alignItems="center" flexWrap="wrap" pl="15px">
          <Avatar
            size="sm"
            mr="5px"
            pt="5px"
            pb="5px"
            borderRadius="25px"
            src=""
          />
          <Stack>
            <Text
              h="30px"
              justifySelf="center"
              textAlign="center"
              bgColor="blue"
              w="350px"
              borderRadius="25px"
            >
              Search for music
            </Text>
          </Stack>
        </Flex>

        <Stack direction="row" ml="70px">
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
      </Flex>
    </Box>
  );
};
