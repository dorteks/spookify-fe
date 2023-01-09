import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Img,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";
import { MdShowChart } from "react-icons/md";
import { TopAlbumsCard } from "./body/topalbums";
import { TopSinglesCard } from "./body/topsingles";

const Body = () => {
  return (
    <Box width="full" h="auto" bgColor="gray.50">
      <Stack direction="row" pt="30px" pl="70px" gap={8}>
        <Card w="600px" h="400px" bgColor="gray.500">
          <Text pt="40px" pl="80px">
            NEW ALBUM
          </Text>
          <Text pt="200px" pl="80px">
            GOOD THINGS
          </Text>
          <Text pt="30px" pl="80px">
            DAN + SHAY
          </Text>
        </Card>
        <Card w="600px" h="400px" bgColor="gray.500">
          <Text fontSize="5xl" pt="40px" pl="350px" pr="50px">
            BILLIE EILISH
          </Text>
          <Text pt="80px" pl="80px">
            NEW ALBUM
          </Text>
        </Card>
      </Stack>

      <Stack pt="30px" pl="70px">
        <HStack align="left">
          <Box mr="10px" pt="3px" pb="3px" color="gray.500">
            <AiFillLike size="20px" />
          </Box>
          <Text
            fontSize="16px"
            fontWeight="bold"
            color="gray.700"
            ml="20px"
            mt="10px"
            mb="20px"
          >
            Recommended Albums
          </Text>
        </HStack>
      </Stack>

      <Stack direction="row" pt="30px" pl="70px">
        <VStack>
          <Card w="200px" h="200px" bgColor="gray.500"></Card>
          <Card w="200px" h="100px" bgColor="gray.300">
            <Text pl="20px" pt="20px">
              Good Things
            </Text>
            <Text pl="20px" pt="5px">
              Dan + Shay
            </Text>
          </Card>
        </VStack>
        <VStack>
          <Card w="200px" h="200px" bgColor="gray.500"></Card>
          <Card w="200px" h="100px" bgColor="gray.300">
            <Text pl="20px" pt="20px">
              Respect Original
            </Text>
            <Text pl="20px" pt="5px">
              Jennifer Hudson
            </Text>
          </Card>
        </VStack>
        <VStack>
          <Card w="200px" h="200px" bgColor="gray.500"></Card>
          <Card w="200px" h="100px" bgColor="gray.300">
            <Text pl="20px" pt="20px">
              Pressure MAchine
            </Text>
            <Text pl="20px" pt="5px">
              The Killers
            </Text>
          </Card>
        </VStack>
        <VStack>
          <Card w="200px" h="200px" bgColor="gray.500"></Card>
          <Card w="200px" h="100px" bgColor="gray.300">
            <Text pl="20px" pt="20px">
              Pyrex Picasso
            </Text>
            <Text pl="20px" pt="5px">
              Benny the Butcher
            </Text>
          </Card>
        </VStack>
        <VStack>
          <Card w="200px" h="200px" bgColor="gray.500"></Card>
          <Card w="200px" h="100px" bgColor="gray.300">
            <Text pl="20px" pt="20px">
              Chavos's World 2
            </Text>
            <Text pl="20px" pt="5px">
              Chavo, Pi'erre Bourne
            </Text>
          </Card>
        </VStack>
        <VStack>
          <Card w="200px" h="200px" bgColor="gray.500"></Card>
          <Card w="200px" h="100px" bgColor="gray.300">
            <Text pl="20px" pt="20px">
              Just A Matter of S...
            </Text>
            <Text pl="20px" pt="5px">
              Chavo, Pi'erre Bourne
            </Text>
          </Card>
        </VStack>
      </Stack>

      <Stack direction="row" mt="60px" ml="70px" gap="8">
        <Card h="auto" width="600px" bgColor="gray.50">
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

        <Card h="auto" width="600px" bgColor="gray.50">
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

      <Stack direction="row" pt="50px" pl="70px" gap={8}>
        <Card w="400px" h="350px" bgColor="gray.500">
          <Text pt="40px" pl="80px">
            THE RADIO SHOW
          </Text>
          <Text pt="200px" pl="80px">
            LADY GAGA
          </Text>
        </Card>
        <Card w="400px" h="350px" bgColor="gray.500">
          <Text pt="40px" pl="80px">
            NEW ALBUM
          </Text>
          <Text pt="200px" pl="80px">
            THE KILLERS
          </Text>
        </Card>
        <Card w="400px" h="350px" bgColor="gray.500">
          <Text pt="40px" pl="80px">
            TAYLOR SWIFT OFFICIAL
          </Text>
        </Card>
      </Stack>
    </Box>
  );
};

export default Body;
