import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { Avatar, Box, Stack, Text } from "@chakra-ui/react";

type Props = {
  title: React.ReactNode;
  leftIcon: any;
};

// bgColor={["purple", "blue", "yellow", "brown", "green", "orange"]}

export const Main = ({ title, leftIcon }: Props) => {
  return (
    <Stack
      direction="row"
      pb="15px"
      pl="20px"
      p="13px"
      _hover={{
        backgroundColor: "white",
        p: "13px",
        borderRadius: "25px",
        color: "purple.600",
        fontWeight: "bold",
      }}
    >
      <Stack direction="row" ml="15px">
        <Box mr="10px" pt="3px" pb="3px" color="gray.500">
          {leftIcon}
        </Box>
        <Text
          width={["100px", "100px", "130px", "130px", "130px", "130px"]}
          fontSize={["14px", "14px", "14px", "15px", "16px", "16px"]}
          fontWeight="bold"
        >
          {title}
        </Text>
      </Stack>
      <Stack pl={["0px", "0px", "0px", "10px", "40px"]}>
        <Box p="5px">
          <SlArrowRight size="10px" />
        </Box>
      </Stack>
    </Stack>
  );
};

export const Music = ({ title, leftIcon }: Props) => {
  return (
    <Stack
      direction="row"
      pb="15px"
      pl="20px"
      p="13px"
      _hover={{
        backgroundColor: "white",
        p: "13px",
        borderRadius: "25px",
        color: "red.600",
        fontWeight: "bold",
      }}
    >
      <Stack direction="row" ml="15px">
        <Box mr="10px" pt="3px" pb="3px" color="red.500">
          {leftIcon}
        </Box>
        <Text
          width={["100px", "100px", "110px", "110px", "110px"]}
          fontSize={["14px", "14px", "16px", "15px", "16px"]}
          fontWeight="bold"
        >
          {title}
        </Text>
      </Stack>
      <Stack pl={["", "", "30px", "30px", "10px", "60px"]}>
        <Box p="5px">
          <SlArrowRight size="10px" />
        </Box>
      </Stack>
    </Stack>
  );
};

export const Playlists = ({ title, leftIcon }: Props) => {
  return (
    <Stack
      direction="row"
      pb="15px"
      pl="20px"
      p="13px"
      _hover={{
        backgroundColor: "white",
        p: "13px",
        borderRadius: "25px",
        color: "purple.600",
        fontWeight: "bold",
      }}
    >
      <Stack direction="row" ml="15px">
        <Box mr="10px" pt="3px" pb="3px" color="gray.500">
          {leftIcon}
        </Box>
        <Text
          width={["100px", "100px", "100px", "130px", "130px", "130px"]}
          fontSize={["12px", "12px", "12px", "14px", "14px", "15px"]}
          fontWeight="bold"
        >
          {title}
        </Text>
      </Stack>
      <Stack pl={["0px", "0px", "0px", "10px", "40px"]}>
        <Box p="5px">
          <SlArrowRight size="10px" />
        </Box>
      </Stack>
    </Stack>
  );
};

export const Artists = ({ title, leftIcon }: Props) => {
  return (
    <Stack
      direction="row"
      pb="15px"
      pl="20px"
      p="13px"
      _hover={{
        backgroundColor: "white",
        p: "13px",
        borderRadius: "25px",
        color: "red.600",
        fontWeight: "bold",
      }}
    >
      <Stack direction="row" ml="15px">
        <Avatar
          size="sm"
          mr="10px"
          pt="3px"
          pb="3px"
          borderRadius="25px"
          src={leftIcon}
        />
        <Text
          width={["100px", "100px", "100px", "110px", "100px", "110px"]}
          fontSize={["12px", "12px", "12px", "14px", "12px", "14px"]}
          fontWeight="bold"
          p="3px"
        >
          {title}
        </Text>
      </Stack>
      <Stack pl={["0px", "0px", "0px", "10px", "60px"]}>
        <Box p="5px">
          <SlArrowRight size="10px" />
        </Box>
      </Stack>
    </Stack>
  );
};
