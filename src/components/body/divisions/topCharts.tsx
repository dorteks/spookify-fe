import { AiFillLike } from "react-icons/ai";
import { TopCharts } from "../reusableComponents/albums";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export const TopChartsBody = () => {
  return (
    <>
      <Stack
        mt={["20px", "20px", "30px", "30px", "30px", "30px"]}
        pb="10px"
        w={["43%", "86%", "83%", "88%", "85%", "85%"]}
        ml={["20px", "40px", "80px", "80px", "80px", "80px"]}
        display="flex"
        alignContent="center"
        justifyContent="space-between"
        bgColor="red"
      >
        <HStack
          align="center"
          justifyContent="space-between"
          w={["98%", "98%", "98%", "98%", "98%", "98%"]}
          h={["60px", "80px", "80px", "80px", "80px", "80px"]}
        >
          <Stack direction="row" ml="10px">
            <Box mr="10px" pt="3px" pb="3px" color="gray.500">
              <AiFillLike size="25px" />
            </Box>
            <Text
              fontSize={["14px", "14px", "14px", "14px", "14px", "16px"]}
              p="5px"
              fontWeight="bold"
              color="gray.700"
              textAlign="center"
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
        direction="row"
        display="flex"
        pt="10px"
        w={["43%", "86%", "83%", "88%", "85%", "85%"]}
        ml={["20px", "40px", "80px", "80px", "80px", "80px"]}
        gap={["1", "1", "1", "2", "2", "4"]}
        overflowX="auto"
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
