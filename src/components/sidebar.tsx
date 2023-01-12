import {
  BsFillBookmarkFill,
  BsSuitHeartFill,
  BsCalendarEvent,
} from "react-icons/bs";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { GrHistory } from "react-icons/gr";
import { FaCompass } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgEditBlackPoint } from "react-icons/cg";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiPlayListAddLine, RiPlayListFill } from "react-icons/ri";
import { Artists, Main, Music, Playlists } from "./sidebar/reusables";

const Sidebar = () => {
  return (
    <Box
      height="auto"
      bgColor={["purple", "blue", "yellow", "brown", "green", "orange"]}
      // bgColor="#f1faee"
    >
      <Stack
        flexDirection={["row", "row", "row", "column", "column", "column"]}
        pl={["10px", "20px", "20px", "20px", "20px", "20px"]}
        pr="10px"
        pt="25px"
      >
        <>
          <Stack
            direction="column"
            display={["none", "none", "none", "flex", "flex", "flex"]}
          >
            <Stack direction="row">
              <Img boxSize="25px" />
              <Text>Constructor UI Kit</Text>
            </Stack>

            <Box flexDirection="column">
              <Box pl="5px" pr="10px" pt="40px">
                main Categories
              </Box>
              <Box pl="5px" pr="10px" pt="45px">
                Your music
              </Box>
              <Box pl="5px" pr="10px" pt="45px">
                your playlist
              </Box>
              <Box pl="5px" pr="10px" pt="45px">
                New playlist button
              </Box>
              <Box pl="5px" pr="10px" pt="45px">
                Your fav artist
              </Box>
            </Box>
          </Stack>
        </>
      </Stack>
    </Box>
  );
};

export default Sidebar;

{
  /* small screen menu */
}
{
  /* <Stack
          display={["flex", "flex", "flex", "none", "none", "none"]}
          direction="row"
        >
          <Text bgColor="red"> ABC </Text>
          <Text bgColor="red"> ABC </Text>
          <Text bgColor="red"> ABC </Text>
          <Text bgColor="red"> ABC </Text>
          <Text bgColor="red"> ABC </Text>
          <Text bgColor="red"> ABC </Text>
        </Stack> */
}
