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
      w={["0", "0", "0", "200px", "200px", "230px", "260px"]}
      pr="10px"
      direction="row"
      alignItems="center"
      _hover={{
        w: "260px",
        pl: "15px",
        fontWeight: "bold",
        borderRadius: "25px",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Box display="flex" color="gray.500">
        {leftIcon}
      </Box>

      <Text
        color="gray.500"
        fontWeight="bold"
        fontSize={["0", "0", "0", "16px", "17px", "18px", "20px"]}
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
      color="gray.500"
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
      <Img src="/images/hamburger.png" borderRadius="25px" />
    </Box>
  );
};

export const SearchBox = () => {
  return (
    <Box
      bgColor="white"
      borderRadius="5px"
      borderColor="white"
      alignContent="center"
      justifyContent="space-between"
      pt={["0", "0", "9px", "4px", "0"]}
      w={["0", "0", "180px", "210px", "90%", "90%", "90%"]}
      display={["none", "none", "flex", "flex", "flex", "flex", "flex"]}
    >
      <Input
        placeholder="Search"
        height={["0", "0", "40px", "50px", "55px", "55px", "55px"]}
      />
      <SearchIcon
        mr="25px"
        ml="-35px"
        color="gray.500"
        position="relative"
        mt={["0", "0", "12px", "14px", "18px", "18px", "18px"]}
      />
    </Box>
  );
};

const Topbar = () => {
  const [display, changeDisplay] = useState("none");

  return (
    <Box
      h="100px"
      as="section"
      bgColor="#E8ECEB"
      width={["", "", "", "", "50.3%", "57%", "61.5%"]}
      // bgColor={["pink", "purple", "blue", "yellow", "brown", "green", "orange"]}
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
          w={["0", "0", "0", "0", "5%", "5%", "5%"]}
          display={["none", "none", "none", "none", "flex", "flex", "flex"]}
        >
          <Img
            w="60px"
            h="60px"
            ml="5px"
            borderRadius="25px"
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
                  bgColor="#E8ECEB"
                  aria-label="Open Menu"
                  borderRadius="40px"
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

              {/* smallest screen size topbar */}
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
                  borderRadius="25px"
                  bgColor="purple.400"
                  aria-label="spookify icon"
                  ml={["-4", "-4", "-1", "0", "0", "0", "0"]}
                  _hover={{
                    borderRadius: "25px",
                    bgColor: "purple.400",
                  }}
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
                SPOOKIFY
              </Box>
            </Box>

            <SearchBox />

            {/*top bar components for mobile and tablets contd*/}
            <Box>
              <Stack
                mt="-1"
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

        <Box w={["0", "0", "0", "0", "39.5%", "46%", "46%"]}>
          <Stack
            ml="50px"
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
          pr={["0", "0", "0", "0", "0", "0", "0"]}
          w={["0", "0", "0", "0", "6%", "6%", "6%"]}
          display={["none", "none", "none", "none", "flex", "flex", "flex"]}
        >
          <Avatar size={"lg"} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Topbar;
