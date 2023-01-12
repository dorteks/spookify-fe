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
      pr="10px"
      h={12}
      _hover={{
        backgroundColor: "white",
        pl: "15px",
        borderRadius: "25px",
        fontWeight: "bold",
      }}
    >
      <Box display={["flex", "flex", "flex", "flex", "flex", "flex"]}>
        {leftIcon}
      </Box>

      <Text
        fontSize={["16px", "16px", "10px", "15px", "16px"]}
        fontWeight="bold"
        display={["none", "none", "flex", "flex", "flex", "flex"]}
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
        display="flex"
        direction="row"
        alignContent="center"
        alignItems="center"
        justifyContent={[
          "space-between",
          "space-between",
          "space-between",
          "left",
          "space-between",
          "space-between",
        ]}
        pt="20px"
      >
        <Box
          w={["3%", "5%", "4%", "3%", "3%", "3%"]}
          display={["none", "none", "none", "flex", "flex", "flex"]}
          ml="15px"
          mr="15px"
        >
          <Img boxSize="38px" bgColor="gray.500" />
        </Box>
        <Box
          // display={["none", "flex", "flex", "flex", "flex", "flex"]}
          width={["39%", "39%", "39%", "36%", "36%", "38%"]}
        >
          <Stack direction="row">
            <Box
              display={["flex", "flex", "flex", "none", "none", "none"]}
              flexDirection="row"
            >
              <Box>
                <Img boxSize="40px" bgColor="gray.500" />
              </Box>
              <Box>
                <Img boxSize="40px" bgColor="gray.500" />
              </Box>
              <Box display={["none", "flex", "flex", "none", "none", "none"]}>
                Constructor Kit
              </Box>
            </Box>

            <Button
              display={["none", "flex", "flex", "flex", "flex", "flex"]}
              w="full"
            >
              Search
            </Button>
          </Stack>
        </Box>

        <Box w={["44%", "44%", "44%", "42%", "46%", "40%"]}>
          <Stack direction="row" ml="50px">
            <TopbarItems
              title={"Personal Release"}
              leftIcon={<BsFillBookmarkFill size="20px" />}
            />
            <TopbarItems
              title={"  Create Playlist"}
              leftIcon={<RiPlayListAddLine size="20px" />}
            />
            <TopbarItems
              title={" Settings"}
              leftIcon={<AiTwotoneSetting size="20px" />}
            />
          </Stack>
        </Box>
        <Box w={["9%", "15%", "9%", "6%", "6%", "9%"]}>
          <Img boxSize="60px" bgColor="gray.500" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Topbar;
