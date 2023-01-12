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
          "flex-start",
          "space-between",
          "space-between",
          "left",
          "space-between",
          "space-between",
        ]}
        pt="20px"
      >
        <Box
          bgColor="red"
          w={["3%", "5%", "4%", "3%", "3%", "3%"]}
          display={["none", "none", "none", "flex", "flex", "flex"]}
          ml="15px"
          mr="15px"
        >
          <Img boxSize="38px" bgColor="gray.500" />
        </Box>

        <Box
          // display={["none", "flex", "flex", "flex", "flex", "flex"]}
          width={["39%", "48%", "54%", "36%", "36%", "38%"]}
        >
          <Stack
            direction="row"
            justifyContent={[
              "center",
              "center",
              "center",
              "center",
              "center",
              "center",
            ]}
          >
            {/* topbar component for mobile and tablet */}
            <Box
              display={["flex", "flex", "flex", "none", "none", "none"]}
              flexDirection="row"
            >
              <Box w="80px" ml="10px">
                <Img boxSize="45px" bgColor="gray.500" />
              </Box>
              <Box w="80px">
                <Img boxSize="45px" bgColor="gray.500" />
              </Box>
              <Box
                display={["none", "none", "flex", "none", "none", "none"]}
                fontSize="14px"
                w="150px"
                alignItems="center"
              >
                Constructor Kit
              </Box>
            </Box>
            {/* topbar component for mobile and tablet */}

            <Text
              bgColor="red"
              display={["none", "flex", "flex", "flex", "flex", "flex"]}
              w={["full", "full", "200px", "full", "full", "full"]}
            >
              Search
            </Text>
          </Stack>
        </Box>

        <Box w={["44%", "44%", "44%", "42%", "46%", "40%"]}>
          {/*top bar components for mobile and tablets */}
          <Box>
            <Stack
              direction="row"
              display={["flex", "flex", "flex", "none", "none", "none"]}
              justifyContent={[
                "left",
                "space-evenly",
                "space-evenly",
                "space-evenly",
                "space-evenly",
                "space-evenly",
              ]}
              // pl={["-12", "0", "0", "0", "0", "0"]}
            >
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
              <Box display={["flex", "flex", "flex", "none", "none", "none"]}>
                <Img
                  boxSize={["50px", "60px", "60px", "60px", "60px", "60px"]}
                  bgColor="gray.500"
                />
              </Box>
            </Stack>
          </Box>
          {/*top bar components for mobile and tablets */}

          <Stack
            bgColor="red"
            display={["none", "none", "none", "flex", "flex", "flex"]}
            direction="row"
            ml="50px"
            justifyContent={["flex-end"]}
          >
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

        <Box
          bgColor="red"
          w={["9%", "15%", "9%", "6%", "6%", "9%"]}
          display={["none", "none", "none", "flex", "flex", "flex"]}
        >
          <Img boxSize="60px" bgColor="gray.500" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Topbar;
