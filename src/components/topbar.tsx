import { AiTwotoneSetting } from "react-icons/ai";
import { RiPlayListAddLine } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Box, Stack, Img, Button, Text } from "@chakra-ui/react";

type Props = {
  title: any;
  leftIcon: any;
};

export const TopbarItems = ({ title, leftIcon }: Props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap="2"
      h={12}
      _hover={{
        backgroundColor: "white",
        pl: "15px",
        borderRadius: "25px",
        fontWeight: "bold",
      }}
    >
      <Box display={["none", "none", "none", "flex", "flex", "flex"]}>
        {leftIcon}
      </Box>

      <Text
        fontSize="16px"
        fontWeight="bold"
        display={["none", "none", "none", "flex", "flex", "flex"]}
      >
        {title}
      </Text>
    </Stack>
  );
};

const Topbar = () => {
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
        justifyContent={[
          "space-between",
          "space-between",
          "space-between",
          "space-evenly",
          "space-around",
          "space-between",
        ]}
        pt="20px"
      >
        <Stack
          direction="row"
          width={["42%", "42%", "42%", "42%", "39%", "41%"]}
          justifyContent={[
            "space-between",
            "space-between",
            "space-between",
            "space-between",
            "space-between",
            "space-between",
          ]}
        >
          <Box w="8%" ml="15px" mr="15px">
            <Img boxSize="38px" bgColor="gray.500" />
          </Box>
          <Box width={["39%", "39%", "39%", "39%", "36%", "38%"]}>
            <Button w="full">Search</Button>
          </Box>
        </Stack>
        <Stack
          direction="row"
          w={["44%", "44%", "44%", "44%", "46%", "40%"]}
          justifyContent={[
            "space-between",
            "space-between",
            "space-between",
            "left",
            "left",
            "space-between",
          ]}
        >
          <Box w={["44%", "44%", "44%", "44%", "46%", "40%"]} bgColor="white">
            <Stack direction="row" ml="50px">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </Stack>
          </Box>
          <Box w={["9%", "9%", "9%", "9%", "6%", "9%"]}>
            <Img boxSize="60px" bgColor="gray.500" />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Topbar;
