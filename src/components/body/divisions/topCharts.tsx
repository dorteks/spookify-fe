import { AiFillLike } from "react-icons/ai";
import { TopCharts } from "../reusableComponents/albums";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export const TopChartsBody = () => {
  return (
    <>
      <Stack
        bgColor="red"
        pb="10px"
        display="flex"
        alignContent="center"
        justifyContent="space-between"
        w={["43%", "80%", "85%", "78%", "88%", "85%", "85%"]}
        mt={["20px", "20px", "20px", "30px", "30px", "30px", "30px"]}
        ml={["15px", "30px", "40px", "50px", "80px", "80px", "80px"]}
      >
        <HStack
          align="center"
          justifyContent="space-between"
          w={["98%", "98%", "98%", "98%", "98%", "98%"]}
          // w={["98%","98%", "98%", "98%", "98%", "98%", "98%"]}
          h={["60px", "80px", "80px", "80px", "80px", "80px"]}
          // h={["60px","60px", "80px", "80px", "80px", "80px", "80px"]}
        >
          <Stack direction="row" ml="10px">
            <Box mr="10px" pt="3px" pb="3px" color="gray.500">
              <AiFillLike size="25px" />
            </Box>
            <Text
              p="5px"
              color="gray.700"
              fontWeight="bold"
              textAlign="center"
              fontSize={["14px", "14px", "14px", "14px", "14px", "16px"]}
              // fontSize={["14px","14px", "14px", "14px", "14px", "14px", "16px"]}
            >
              Top Charts by City
            </Text>
          </Stack>

          <Stack direction="row" color="gray.500" pr="30px" gap={5}>
            <BsArrowLeftCircle size="35px" />
            <BsArrowRightCircle size="35px" />
          </Stack>
        </HStack>
      </Stack>

      <Stack
        pt="10px"
        display="flex"
        direction="row"
        overflowX="auto"
        gap={["1", "1", "1", "1", "2", "2", "4"]}
        w={["43%", "80%", "85%", "78%", "88%", "85%", "85%"]}
        ml={["15px", "30px", "40px", "50px", "80px", "80px", "80px"]}
      >
        <TopCharts
          city={"New York City"}
          bckImage={["/images/new-york.jpeg"]}
        />
        <TopCharts
          city={"Los Angeles"}
          bckImage={["/images/los-angeles.jpeg"]}
        />
        <TopCharts city={"Nashville"} bckImage={["/images/nashville.jpeg"]} />
        <TopCharts city={"Miami"} bckImage={["/images/miami.jpeg"]} />
        <TopCharts
          city={"Atalanta Georgia"}
          bckImage={["/images/atlanta.jpeg"]}
        />
        <TopCharts city={"Idaho"} bckImage={["/images/idaho.jpeg"]} />
      </Stack>
    </>
  );
};
