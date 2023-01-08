import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { Avatar, Box, Input, Stack, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type Props = {
  title: React.ReactNode;
  leftIcon: any;
};

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
        <Text width="130px" fontWeight="bold">
          {title}
        </Text>
      </Stack>
      <Stack pl="40px">
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
        <Text width="110px" fontWeight="bold">
          {title}
        </Text>
      </Stack>
      <Stack pl="60px">
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
        <Text width="130px" fontSize="15px" fontWeight="bold">
          {title}
        </Text>
      </Stack>
      <Stack pl="40px">
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
        <Text width="110px" fontSize="14px" fontWeight="bold" p="3px">
          {title}
        </Text>
      </Stack>
      <Stack pl="60px">
        <Box p="5px">
          <SlArrowRight size="10px" />
        </Box>
      </Stack>
    </Stack>
  );
};

export const TopbarItems = ({ title, leftIcon }: Props) => {
  return (
    <Stack
      direction="row"
      pt="15px"
      pb="15px"
      pl="20px"
      p="13px"
      _hover={{
        backgroundColor: "#f1faee",
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
        <Text width="140px" fontWeight="bold">
          {title}
        </Text>
      </Stack>
    </Stack>
  );
};
