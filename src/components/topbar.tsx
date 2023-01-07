import {
  Box,
  Button,
  HStack,
  Img,
  Text,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { Main } from "./reusables";
import {
  BsFillBookmarkFill,
  BsSuitHeartFill,
  BsCalendarEvent,
} from "react-icons/bs";

const Topbar = () => {
  return (
    <Box
      bgColor="red"
      width="full"
      h="100px"
      display="flex"
      alignContent="center"
      justifyContent="center"
    >
      <HStack gap="100px">
        <Img boxSize="50px" borderRadius="30px" bgColor="white" />
        <Button>Search for music</Button>
        <Text> Personal Releases </Text>
        <Text> Create Playlist </Text>
        <Text>Settings </Text>
        <Avatar
          size="md"
          mr="10px"
          pt="3px"
          pb="3px"
          borderRadius="25px"
          src=""
        />
      </HStack>
    </Box>
  );
};

export default Topbar;
