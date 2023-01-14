import {
  BsCalendarEvent,
  BsSuitHeartFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { FaCompass } from "react-icons/fa";
import { GrHistory } from "react-icons/gr";
import { BiNetworkChart } from "react-icons/bi";
import { RiPlayListFill } from "react-icons/ri";
import { CgEditBlackPoint } from "react-icons/cg";
import { VStack, Button, Box, Text } from "@chakra-ui/react";
import { Music, Playlists, Artists, Main } from "./reusables";

export const SidebarMenu = () => {
  return (
    <VStack>
      <Box flexDirection="column">
        <Box pl="5px" pr="10px" pt="40px">
          <VStack align="left">
            <Text
              ml="20px"
              mt="10px"
              mb="20px"
              color="gray.700"
              fontSize={"14px"}
              fontWeight="bold"
            >
              MAIN CATEGORIES
            </Text>
            <Main title={"Home"} leftIcon={<IoMdHome />} />
            <Main title={"Explore"} leftIcon={<FaCompass />} />
            <Main title={"New Releases"} leftIcon={<BsCalendarEvent />} />
            <Main title={"Top Charts"} leftIcon={<BiNetworkChart />} />
            <Main title={"Radio"} leftIcon={<CgEditBlackPoint />} />
            <Main title={"News Music"} leftIcon={<BsFillBookmarkFill />} />
          </VStack>
        </Box>
        <Box pl="5px" pr="10px" pt="45px">
          <VStack align="left">
            <Text
              ml="20px"
              mt="10px"
              mb="20px"
              color="gray.700"
              fontSize={"14px"}
              fontWeight="bold"
            >
              YOUR MUSIC
            </Text>
            <Music title={"Favourites"} leftIcon={<BsSuitHeartFill />} />
            <Main title={"History"} leftIcon={<GrHistory />} />
          </VStack>
        </Box>
        <Box pl="5px" pr="10px" pt="45px">
          <VStack align="left">
            <Text
              ml="20px"
              mt="10px"
              mb="20px"
              color="gray.700"
              fontSize={"14px"}
              fontWeight="bold"
            >
              YOUR PLAYLISTS
            </Text>
            <Playlists
              title={"My Rock Collect"}
              leftIcon={<RiPlayListFill />}
            />
            <Playlists title={"Best Music"} leftIcon={<RiPlayListFill />} />
            <Playlists title={"Hits of 90s"} leftIcon={<RiPlayListFill />} />
            <Playlists title={"Classic Music"} leftIcon={<RiPlayListFill />} />
            <Playlists title={"New Pop Music"} leftIcon={<RiPlayListFill />} />
            <Playlists title={"Slipknot"} leftIcon={<RiPlayListFill />} />
          </VStack>
        </Box>
        <Box pl="5px" pr="10px" pt="45px">
          <Button
            ml="20px"
            mt="10px"
            mb="20px"
            bgColor="white"
            fontSize={"14px"}
            borderRadius="25px"
            width={["120px", "120px", "120px", "120px", "120px", "150px"]}
          >
            New Playlist
          </Button>
        </Box>
        <Box pl="5px" pr="10px" pt="45px">
          <VStack align="left">
            <Text
              ml="20px"
              mt="10px"
              mb="20px"
              color="gray.700"
              fontSize={"14px"}
              fontWeight="bold"
            >
              YOUR FAVOURITE ARTISTS
            </Text>
            <Artists title={"Billie Eilish"} leftIcon={""} />
            <Artists title={"BTS"} leftIcon={""} />
            <Artists title={"Olivia Rodrigo"} leftIcon={""} />
            <Artists title={"The Weekemd"} leftIcon={""} />
            <Artists title={"Doja Cat "} leftIcon={""} />
            <Artists title={"Nas "} leftIcon={""} />
            <Artists title={"Dua Lipa "} leftIcon={""} />
            <Artists title={"Ed Sheeran "} leftIcon={""} />
            <Artists title={"Luke Combs "} leftIcon={""} />
            <Artists title={"Billie "} leftIcon={""} />
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
};
