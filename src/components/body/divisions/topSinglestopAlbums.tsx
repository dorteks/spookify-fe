import {
  Box,
  Card,
  Text,
  Stack,
  HStack,
  Spacer,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import { MdShowChart } from "react-icons/md";
import { TopAlbumsCard } from "../reusableComponents/topalbums";
import { TopSinglesCard } from "../reusableComponents/topsingles";

export const TopSinglesTopAlbumsBody = () => {
  return (
    <Stack
      mb="20px"
      mt="20px"
      gap={["2", "2", "2", "2", "1", "4", "8"]}
      pl={["15px", "30px", "20px", "50px", "50px", "80px", "80px"]}
      direction={["column", "column", "column", "row", "row", "row", "row"]}
    >
      <Card
        h="auto"
        bgColor="gray.50"
        width={["290px", "370px", "670px", "435px", "512px", "615px", "673px"]}
      >
        <CardHeader mt="20px">
          <HStack align="left">
            <Box mr="10px" pt="3px" pb="3px" color="gray.500">
              <MdShowChart size="20px" />
            </Box>
            <Text ml="20px" fontSize="16px" color="gray.700" fontWeight="bold">
              Top Singles
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <Stack pt="10px" mb="20px" ml={["-2", "0", "0"]}>
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
        bgColor="gray.50"
        width={["290px", "370px", "670px", "435px", "512px", "615px", "673px"]}
      >
        <CardHeader mt="20px">
          <HStack align="left">
            <Box mr="10px" pt="3px" pb="3px" color="gray.500">
              <MdShowChart size="20px" />
            </Box>
            <Text
              ml="20px"
              mt="10px"
              mb="20px"
              fontSize="16px"
              color="gray.700"
              fontWeight="bold"
            >
              Top Albums
            </Text>
          </HStack>
        </CardHeader>
        <CardBody>
          <Stack pt="10px" mb="20px" ml={["-2", "0", "0"]}>
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
