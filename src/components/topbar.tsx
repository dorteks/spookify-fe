import { Box, Text, Stack, Avatar, Flex } from "@chakra-ui/react";
import { TopbarItems } from "./reusables";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RiPlayListAddLine } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import { useMediaQuery } from "@chakra-ui/media-query";

const Topbar = () => {
  // const [isNotSmallerSCreen] = useMediaQuery("(min-width:600px)");

  return (
    <Box
      bgColor="gray.50"
      maxW="100%"
      h="80px"
      display="flex"
      alignContent="center"
      justifyContent="space-between"
    >
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
              bgColor="gray.200"
              w="600px"
              borderRadius="25px"
            >
              Search for music
            </Text>
          </Stack>
        </Flex>

        <Stack direction="row" ml="100px">
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

export default Topbar;
