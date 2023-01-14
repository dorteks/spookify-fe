import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { ConstructorIcon } from "../topbar";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import { SidebarMenu } from "../sidebar/sidebarmenu";
import { Box, Flex, IconButton, Stack } from "@chakra-ui/react";

export const TopbarSmall = () => {
  const [display, changeDisplay] = useState("none");

  return (
    <Box ml="-24" display={["flex", "none", "none", "none", "none", "none"]}>
      <Box>
        <Stack direction="row" align="center" gap={"1"}>
          <IconButton
            boxSize="40px"
            bgColor="gray.500"
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={() => changeDisplay("flex")}
          />

          <IconButton
            boxSize="25px"
            icon={<ConstructorIcon />}
            aria-label="Constructor Icon"
            _hover={{
              fontWeight: "bold",
              borderRadius: "25px",
              alignItems: "center",
              backgroundColor: "white",
            }}
          />
          <Stack
            _hover={{
              p: "10px",
              boxSize: "50px",
              fontWeight: "bold",
              borderRadius: "30px",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <BsFillBookmarkFill size="40px" />
          </Stack>
          <Stack
            _hover={{
              p: "10px",
              boxSize: "50px",
              fontWeight: "bold",
              borderRadius: "30px",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <RiPlayListAddLine size="40px" />
          </Stack>
          <Stack
            _hover={{
              p: "10px",
              boxSize: "50px",
              fontWeight: "bold",
              borderRadius: "30px",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <AiTwotoneSetting size="40px" />
          </Stack>
          <Stack
            _hover={{
              p: "10px",
              boxSize: "50px",
              fontWeight: "bold",
              borderRadius: "30px",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <RxAvatar size="40px" />
          </Stack>
        </Stack>
      </Box>

      {/*close menu button starts here */}
      <Stack
        top="0"
        left="0"
        h="100vh"
        pos="fixed"
        zIndex={20}
        overflowY="auto"
        bgColor="gray.50"
        display={display}
        flexDirection="column"
        w="70vw"
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
      {/*close menu button stops here */}
    </Box>
  );
};
