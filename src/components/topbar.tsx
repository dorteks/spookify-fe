import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";

import { SidebarMenu } from "./sidebar/sidebarmenu";
import {
  Box,
  Img,
  Text,
  Flex,
  Stack,
  Input,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { TopbarSmall } from "./topbar/topbarsmall";

type TopbarItemsProps = {
  title: any;
  leftIcon: any;
};

type TopbarItem2Props = {
  icon: any;
};

export const TopbarItems = ({ title, leftIcon }: TopbarItemsProps) => {
  return (
    <Stack
      h={12}
      pr="10px"
      direction="row"
      alignItems="center"
      _hover={{
        w: "180px",
        pl: "15px",
        fontWeight: "bold",
        borderRadius: "25px",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Box display="flex">{leftIcon}</Box>

      <Text
        fontWeight="bold"
        fontSize={["16px", "16px", "16px", "10px", "15px", "16px"]}
        display={["none", "none", "none", "flex", "flex", "flex", "flex"]}
      >
        {title}
      </Text>
    </Stack>
  );
};

export const TopbarItems2 = ({ icon }: TopbarItem2Props) => {
  return (
    <Box
      p="10px"
      boxSize="60px"
      borderRadius="30px"
      ml={["-12", "-12", "20px", "20px"]}
      _hover={{
        bgColor: "white",
      }}
    >
      {icon}
    </Box>
  );
};

export const HamburgerIcon = () => {
  return (
    <Box>
      <Img src="/images/hamburger.png" />
    </Box>
  );
};

export const SearchBox = () => {
  return (
    <Box
      pt="9px"
      borderRadius="3px"
      alignContent="center"
      w={["0", "0", "180px", "200px", "90%", "90%", "90%"]}
      display={["none", "none", "flex", "flex", "flex", "flex", "flex"]}
    >
      <Input placeholder="Search" />
      <SearchIcon ml="-35px" mt="11px" />
    </Box>
  );
};

export const ConstructorIcon = () => {
  return (
    <Box bgColor="white">
      <Img src="/images/constructor.jpg" />
    </Box>
  );
};

const Topbar = () => {
  const [display, changeDisplay] = useState("none");

  return (
    <Box
      // bgColor="#f1faee"
      h={"100px"}
      as="section"
      width={["", "", "", "", "50.3%", "57%", "65%"]}
      bgColor={["pink", "purple", "blue", "yellow", "brown", "green", "orange"]}
    >
      <Stack
        pt="20px"
        display="flex"
        direction="row"
        alignItems="center"
        alignContent="center"
        justifyContent={["left"]}
      >
        <Box
          ml="15px"
          mr="15px"
          bgColor="red"
          w={["0", "0", "0", "0", "5%", "5%", "5%"]}
          display={["none", "none", "none", "none", "flex", "flex", "flex"]}
        >
          <Img
            w="60px"
            h="60px"
            ml="5px"
            // boxSize="60px"
            bgColor="gray.500"
            src="/images/interface.png"
          />
        </Box>

        <Box width={["50%", "50%", "full", "100%", "29%", "36%", "38%"]}>
          <Stack direction="row" justifyContent={"flex-start"}>
            {/* topbar component for mobile and tablet */}
            <Box
              flexDirection="row"
              display={["flex", "flex", "flex", "flex", "none", "none", "none"]}
            >
              {/*open menu button starts here */}
              <Box w="80px" ml={["20px", "20px", "30px", "40px"]}>
                <IconButton
                  bgColor="gray.500"
                  aria-label="Open Menu"
                  icon={<HamburgerIcon />}
                  onClick={() => changeDisplay("flex")}
                  boxSize={["0", "50px", "50px", "50px", "0", "0", "0"]}
                  display={[
                    "none",
                    "flex",
                    "flex",
                    "flex",
                    "none",
                    "none",
                    "none",
                  ]}
                />
              </Box>
              <TopbarSmall />

              {/*close menu button starts here */}
              <Stack
                top="0"
                left="0"
                h="100vh"
                w="45vw"
                pos="fixed"
                zIndex={20}
                overflowY="auto"
                bgColor="gray.50"
                display={display}
                flexDirection="column"
              >
                <Flex justify="flex-end">
                  <Box>
                    <IconButton
                      mt={3}
                      mr={5}
                      icon={<GrClose />}
                      aria-label="Close Menu"
                      onClick={() => changeDisplay("none")}
                    />
                  </Box>
                </Flex>

                <SidebarMenu />
              </Stack>

              {/* constructor ui logo */}
              <Box w="80px">
                <IconButton
                  icon={<ConstructorIcon />}
                  aria-label="Constructor Icon"
                  ml={["-4", "-4", "-1", "0", "0", "0", "0"]}
                  boxSize={["0", "50px", "50px", "50px", "0", "0", "0"]}
                  display={[
                    "none",
                    "flex",
                    "flex",
                    "flex",
                    "none",
                    "none",
                    "none",
                  ]}
                />
              </Box>
              <Box
                alignItems="center"
                ml={["0", "0", "0", "-2"]}
                fontSize={["14px", "14px", "14px", "25px"]}
                display={[
                  "none",
                  "none",
                  "none",
                  "flex",
                  "none",
                  "none",
                  "none",
                ]}
                w={["0", "0", "0", "200px", "0", "0", "0"]}
              >
                Constructor Kit
              </Box>
            </Box>

            <SearchBox />

            {/*top bar components for mobile and tablets contd*/}
            <Box>
              <Stack
                direction="row"
                gap={["0", "0", "3", "4", "0", "0", "0"]}
                display={[
                  "none",
                  "flex",
                  "flex",
                  "flex",
                  "none",
                  "none",
                  "none",
                ]}
              >
                <TopbarItems2 icon={<BsFillBookmarkFill size="40px" />} />
                <TopbarItems2 icon={<RiPlayListAddLine size="40px" />} />
                <TopbarItems2 icon={<AiTwotoneSetting size="40px" />} />
                <TopbarItems2 icon={<RxAvatar size="40px" />} />
              </Stack>
            </Box>
          </Stack>
        </Box>

        <Box w={["0", "0", "0", "0", "39%", "46%", "40%"]}>
          <Stack
            ml="50px"
            bgColor="red"
            direction="row"
            justifyContent={["flex-center"]}
            display={["none", "none", "none", "none", "flex", "flex", "flex"]}
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
          w={["0", "0", "0", "0", "6%", "6%", "9%"]}
          display={["none", "none", "none", "none", "flex", "flex", "flex"]}
        >
          <Avatar size={"lg"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Topbar;
