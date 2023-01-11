import { AiTwotoneSetting } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Box, Stack, Img, Button, Text } from "@chakra-ui/react";

type Props = {
  title: any;
  leftIcon: any;
};

export const TopbarItems = ({ title, leftIcon }: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap="2"
      h={12}
      _hover={{
        backgroundColor: "white",
        pl: "15px",
        borderRadius: "25px",
        fontWeight: "bold",
      }}
    >
      <Box display={["none", "none", "none", "flex", "flex", "flex"]}>
        {leftIcon}
      </Box>

      <Text
        fontSize="16px"
        fontWeight="bold"
        display={["none", "none", "none", "flex", "flex", "flex"]}
      >
        {title}
      </Text>
    </Stack>
  );
};

const Topbar = () => {
  return (
    <Box
      // bgColor="#f1faee"

      bgColor={["purple", "blue", "yellow", "brown", "green", "orange"]}
      h={"100px"}
      as="section"
    >
      <Stack
        display={"flex"}
        direction="row"
        alignContent="center"
        alignItems={["center"]}
        justifyContent={[
          "space-between",
          "space-between",
          "space-between",
          "space-between",
          "space-between",
          "space-between",
        ]}
        pt="20px"
      >
        <Box
          w={["40px"]}
          display={["none", "none", "none", "flex", "flex", "flex"]}
          ml="20px"
          mr="20px"
        >
          <Img boxSize="38px" bgColor="gray.500" />
        </Box>
        <Box
          width={["35%"]}
          marginInlineEnd={["auto", "auto"]}
          marginLeft="inherit"
        >
          <Button
            w="full"
            fontSize="16px"
            borderRadius="25px"
            display={["none", "none", "none", "flex", "flex", "flex"]}
          >
            Search
          </Button>
        </Box>
        <Box w={["40%"]}>
          <Stack direction="row">
            <Box w="33%" ml="20px">
              <TopbarItems
                title={"Personal Release"}
                leftIcon={<BsFillBookmarkFill size="20px" />}
              />
            </Box>
            <Box w={["33%"]} ml={["20px"]}>
              <TopbarItems
                title={"  Create Playlist"}
                leftIcon={<RiPlayListAddLine size="20px" />}
              />
            </Box>
            <Box w="33%" ml="20px">
              <TopbarItems
                title={" Settings"}
                leftIcon={<AiTwotoneSetting size="20px" />}
              />
            </Box>
          </Stack>
        </Box>

        <Box
          bgColor={"blue"}
          w="60px"
          // marginBlock="auto"
          display={["none", "none", "none", "flex", "flex", "flex"]}
          marginInlineEnd={["auto", "auto"]}
          mr={["15px", "20px"]}
        >
          <Img boxSize="60px" bgColor="gray.500" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Topbar;
