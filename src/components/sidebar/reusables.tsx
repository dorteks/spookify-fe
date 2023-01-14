import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { Avatar, Box, Stack, Text } from "@chakra-ui/react";

type Props = {
  leftIcon: any;
  title: React.ReactNode;
};

// bgColor={["purple", "blue", "yellow", "brown", "green", "orange"]}

export const Main = ({ title, leftIcon }: Props) => {
  return (
    <Stack
      p="13px"
      pb="15px"
      pl="20px"
      direction="row"
      _hover={{
        p: "13px",
        fontWeight: "bold",
        color: "purple.600",
        borderRadius: "25px",
        backgroundColor: "white",
      }}
    >
      <Stack direction="row" ml="15px">
        <Box mr="10px" pt="3px" pb="3px" color="gray.500">
          {leftIcon}
        </Box>
        <Text
          fontWeight="bold"
          fontSize={["14px", "14px", "14px", "15px", "16px", "16px"]}
          // fontSize={["14px","14px", "14px", "14px", "15px", "16px", "16px"]}
          width={["100px", "100px", "130px", "130px", "130px", "130px"]}
          // width={["100px","100px", "100px", "130px", "130px", "130px", "130px"]}
        >
          {title}
        </Text>
      </Stack>
      <Stack
        // pl={["0px","0px", "0px", "0px", "10px", "40px"]}
        pl={["0px", "0px", "0px", "10px", "40px", "40px"]}
      >
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
      p="13px"
      pb="15px"
      pl="20px"
      direction="row"
      _hover={{
        p: "13px",
        color: "red.600",
        fontWeight: "bold",
        borderRadius: "25px",
        backgroundColor: "white",
      }}
    >
      <Stack direction="row" ml="15px">
        <Box mr="10px" pt="3px" pb="3px" color="red.500">
          {leftIcon}
        </Box>
        <Text
          fontWeight="bold"
          fontSize={["14px", "14px", "16px", "15px", "16px"]}
          // fontSize={["14px","14px", "14px", "16px", "15px", "16px"]}
          width={["100px", "100px", "110px", "110px", "110px"]}
          // width={["100px","100px", "100px", "110px", "110px", "110px"]}
        >
          {title}
        </Text>
      </Stack>
      <Stack
        pl={["", "", "30px", "30px", "60px", "60px"]}
        // pl={["", "","", "30px", "30px", "10px", "60px"]}
      >
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
      p="13px"
      pb="15px"
      pl="20px"
      direction="row"
      _hover={{
        p: "13px",
        fontWeight: "bold",
        color: "purple.600",
        borderRadius: "25px",
        backgroundColor: "white",
      }}
    >
      <Stack direction="row" ml="15px">
        <Box mr="10px" pt="3px" pb="3px" color="gray.500">
          {leftIcon}
        </Box>
        <Text
          fontWeight="bold"
          fontSize={["12px", "12px", "12px", "14px", "14px", "15px"]}
          // fontSize={["12px","12px", "12px", "12px", "14px", "14px", "15px"]}
          width={["100px", "100px", "100px", "130px", "130px", "130px"]}
          // width={["100px","100px", "100px", "100px", "130px", "130px", "130px"]}
        >
          {title}
        </Text>
      </Stack>
      <Stack
        pl={["0px", "0px", "0px", "10px", "40px"]}
        // pl={["0px","0px", "0px", "0px", "10px", "40px"]}
      >
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
      p="13px"
      pb="15px"
      pl="20px"
      direction="row"
      _hover={{
        p: "13px",
        color: "red.600",
        fontWeight: "bold",
        borderRadius: "25px",
        backgroundColor: "white",
      }}
    >
      <Stack direction="row" ml="15px">
        <Avatar
          pt="3px"
          pb="3px"
          size="sm"
          mr="10px"
          src={leftIcon}
          borderRadius="25px"
        />
        <Text
          p="3px"
          fontWeight="bold"
          fontSize={["12px", "12px", "12px", "14px", "12px", "14px"]}
          // fontSize={["12px","12px", "12px", "12px", "14px", "12px", "14px"]}
          width={["100px", "100px", "100px", "110px", "100px", "110px"]}
          // width={["100px","100px", "100px", "100px", "110px", "100px", "110px"]}
        >
          {title}
        </Text>
      </Stack>
      <Stack
        pl={["0px", "0px", "0px", "10px", "60px"]}
        // pl={["0px", "0px","0px", "0px", "10px", "60px"]}
      >
        <Box p="5px">
          <SlArrowRight size="10px" />
        </Box>
      </Stack>
    </Stack>
  );
};
