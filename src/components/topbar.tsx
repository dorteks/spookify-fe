import { Box, Stack, Avatar, HStack, Img, Button } from "@chakra-ui/react";
import { TopbarItems } from "./sidebar/reusables";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RiPlayListAddLine } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";

const Topbar = () => {
  return (
    <Box bgColor="gray.50" maxW="100%" h="100px" as="section">
      <Stack
        display="flex"
        alignContent="center"
        justifyContent="space-between"
      >
        <HStack
          align="center"
          justify="space-between"
          w={["0", "30%", "48%", "62%", "80%", "100%"]}
          h="100px"
        >
          <Stack direction="row" ml="20px">
            <Img
              boxSize={["0", "0px", "0px", "35px", "40px", "45px"]}
              mr="10px"
              bgColor="gray.500"
            />
            <Button
              w={["0px", "150px", "250px", "300px", "400px", "550px"]}
              ml="30px"
              borderRadius="25px"
            >
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
            <Avatar
              size={["sm", "sm", "sm", "md", "md"]}
              pt="3px"
              pb="3px"
              borderRadius={["15px", "15px", "15px", "25px", "25px"]}
              src=""
            />
          </Stack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Topbar;
