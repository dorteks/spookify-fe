import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdShowChart } from "react-icons/md";
import { TopAlbumsCard } from "../reusableComponents/topalbums";
import { TopSinglesCard } from "../reusableComponents/topsingles";

export const TopSinglesTopAlbumsBody = () => {
  return (
    <Stack
      direction={["column", "column", "row", "row", "row", "row"]}
      mt="60px"
      pl={["20px", "40px", "80px", "80px", "80px", "80px"]}
      gap={["2", "2", "2", "1", "4", "8"]}
    >
      <Card
        h="auto"
        width={["380px", "628px", "410px", "512px", "615px", "673px"]}
        bgColor="gray.50"
      >
        <CardHeader mt="20px">
          <HStack align="left">
            <Box mr="10px" pt="3px" pb="3px" color="gray.500">
              <MdShowChart size="20px" />
            </Box>
            <Text
              fontSize="16px"
              fontWeight="bold"
              color="gray.700"
              ml="20px"
              mt="10px"
              mb="20px"
            >
              Top Singles
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <Stack pt="10px" mb="20px">
            <TopSinglesCard
              number={"01"}
              title={"GYALIS"}
              artist={"Capella Grey"}
              time={"07:32"}
            />
            <Spacer />
            <TopSinglesCard
              number={"02"}
              title={"STAY"}
              artist={"The Kid LAROI, Justin Beiber"}
              time={"07:32"}
            />
            <Spacer />
            <TopSinglesCard
              number={"03"}
              title={"Pepas"}
              artist={"Farruko"}
              time={"07:32"}
            />
            <Spacer />
            <TopSinglesCard
              number={"04"}
              title={"Volvi"}
              artist={"Aventura, Bad Bunny"}
              time={"07:32"}
            />
            <Spacer />
            <TopSinglesCard
              number={"05"}
              title={"Essence (feat. Tems"}
              artist={"Wizkid"}
              time={"07:32"}
            />
          </Stack>
        </CardBody>
      </Card>

      {/* top albums */}
      <Card
        h="auto"
        width={["380px", "628px", "410px", "512px", "615px", "673px"]}
        bgColor="gray.50"
      >
        <CardHeader mt="20px">
          <HStack align="left">
            <Box mr="10px" pt="3px" pb="3px" color="gray.500">
              <MdShowChart size="20px" />
            </Box>
            <Text
              fontSize="16px"
              fontWeight="bold"
              color="gray.700"
              ml="20px"
              mt="10px"
              mb="20px"
            >
              Top Albums
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <Stack pt="10px" mb="20px">
            <TopAlbumsCard
              number={"01"}
              title={"Faith"}
              artist={"Pop Snake"}
              time={"07:32"}
            />
            <Spacer />
            <TopAlbumsCard
              number={"02"}
              title={"2/Catorce - Single"}
              artist={"Raw Alejardro, Mr Naisgal"}
              time={"07:32"}
            />
            <Spacer />
            <TopAlbumsCard
              number={"03"}
              title={"REPEAT IT - Single"}
              artist={"Lil Teca, Guana"}
              time={"07:32"}
            />
            <Spacer />
            <TopAlbumsCard
              number={"04"}
              title={"Take My Breath - Single"}
              artist={"Change Name Singer"}
              time={"07:32"}
            />
            <Spacer />
            <TopAlbumsCard
              number={"05"}
              title={"Faith"}
              artist={"Pop Snake"}
              time={"07:32"}
            />
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};
