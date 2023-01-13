import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

import { SidebarMenu } from "./sidebar/sidebarmenu";
import { Box, Stack, Img, Text, IconButton, Flex } from "@chakra-ui/react";

type TopbarItemsProps = {
  title: any;
  leftIcon: any;
};

export const TopbarItems = ({ title, leftIcon }: TopbarItemsProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      pr="10px"
      h={12}
      _hover={{
        w: "180px",
        backgroundColor: "white",
        pl: "15px",
        borderRadius: "25px",
        fontWeight: "bold",
        alignItems: "center",
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

type TopbarItem2Props = {
  icon: any;
};

export const TopbarItems2 = ({ icon }: TopbarItem2Props) => {
  return (
    <Box
      boxSize="60px"
      borderRadius="30px"
      p="10px"
      ml={["-12", "20px", "20px"]}
      _hover={{
        bgColor: "white",
      }}
    >
      {icon}
    </Box>
  );
};

const Topbar = () => {
  const [display, changeDisplay] = useState("none");

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
        justifyContent={["left", "left", "left", "left", "left", "left"]}
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

        <Box width={["50%", "full", "100%", "29%", "36%", "38%"]}>
          <Stack direction="row" justifyContent={"flex-start"}>
            {/* topbar component for mobile and tablet */}
            <Box
              display={["flex", "flex", "flex", "none", "none", "none"]}
              flexDirection="row"
            >
              {/*open menu button starts here */}
              <Box w="80px" ml={["20px", "30px", "40px"]}>
                <IconButton
                  aria-label="Open Menu"
                  boxSize={["50px", "50px", "50px", "0", "0", "0"]}
                  bgColor="gray.500"
                  icon={<GiHamburgerMenu />}
                  display={["flex", "flex", "flex", "none", "none", "none"]}
                  onClick={() => changeDisplay("flex")}
                />
              </Box>
              {/*open menu button stops here */}

              {/*close menu button starts here */}
              <Stack
                w="45vw"
                bgColor="gray.50"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDirection="column"
                display={display}
              >
                <Flex justify="flex-end">
                  <Box>
                    <IconButton
                      aria-label="Close Menu"
                      mt={3}
                      mr={5}
                      icon={<GrClose />}
                      onClick={() => changeDisplay("none")}
                    />
                  </Box>
                </Flex>

                <SidebarMenu />
              </Stack>
              {/*close menu button stops here */}

              {/* constructor ui logo */}
              <Box w="80px">
                <Img
                  boxSize={["50px", "50px", "50px", "0", "0", "0"]}
                  bgColor="gray.500"
                  ml={["-4", "-1", "0", "0", "0", "0"]}
                />
              </Box>
              <Box
                display={["none", "none", "flex", "none", "none", "none"]}
                fontSize={["14px", "14px", "25px"]}
                w={["150px", "150px", "200px", "150px", "150px", "150px"]}
                alignItems="center"
                ml={["0", "0", "-2"]}
              >
                Constructor Kit
              </Box>
            </Box>
            {/* topbar component for mobile and tablet */}

            <Text
              bgColor="red"
              display={["none", "flex", "flex", "flex", "flex", "flex"]}
              w={["0", "180px", "200px", "full", "full", "full"]}
            >
              Search
            </Text>

            {/*top bar components for mobile and tablets */}
            <Box>
              <Stack
                direction="row"
                display={["flex", "flex", "flex", "none", "none", "none"]}
                gap={["0", "3", "4", "0", "0", "0"]}
              >
                <TopbarItems2 icon={<BsFillBookmarkFill size="40px" />} />
                <TopbarItems2 icon={<RiPlayListAddLine size="40px" />} />
                <TopbarItems2 icon={<AiTwotoneSetting size="40px" />} />
                <TopbarItems2 icon={<RxAvatar size="40px" />} />
              </Stack>
            </Box>
            {/*top bar components for mobile and tablets */}
          </Stack>
        </Box>

        <Box w={["44%", "44%", "44%", "42%", "46%", "40%"]}>
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
