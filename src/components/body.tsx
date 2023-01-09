import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";
import { MdShowChart } from "react-icons/md";
import { NewAlbum, RecommendedAlbums } from "./body/albums";
import { TopAlbumsCard } from "./body/topalbums";
import { TopSinglesCard } from "./body/topsingles";

const Body = () => {
  return (
    <Box width="full" h="auto" bgColor="gray.50">
      <Stack
        direction="row"
        pt="15px"
        pb="15px"
        pl="80px"
        gap={["0", "0", "0", "3", "6", "8"]}
      >
        <NewAlbum
          title="NEW ALBUM"
          newAlbumTitle="GOOD THINGS"
          newAlbumArtist="DAN + SHAY"
        />
        <NewAlbum
          title="BILLIE EILISH"
          newAlbumTitle="NEW ALBUM"
          newAlbumArtist=""
        />

        {/* <Card
          w={["0px", "0px", "0px", "420px", "510px", "700px"]}
          h="360px"
          bgColor="gray.500"
        >
          <Text fontSize="5xl" pt="40px" pl="350px" pr="50px">
            BILLIE EILISH
          </Text>
          <Text pt="80px" pl="80px">
            NEW ALBUM
          </Text>
        </Card> */}
      </Stack>

      <Stack
        mt={["5px", "5px", "5px", "20px", "30px", "30px"]}
        pb="10px"
        pl="80px"
        display="flex"
        alignContent="center"
        justifyContent="space-between"
      >
        <HStack
          align="center"
          justify="space-between"
          w={["0", "30%", "40%", "60%", "73%", "95%"]}
          h="80px"
        >
          <Stack direction="row" ml="10px">
            <Box mr="10px" pt="3px" pb="3px" color="gray.500">
              <AiFillLike size="25px" />
            </Box>
            <Text
              fontSize={["2px", "2px", "2px", "14px", "14px", "16px"]}
              p="5px"
              fontWeight="bold"
              color="gray.700"
              textAlign="center"
            >
              Recommended Albums
            </Text>
          </Stack>

          <Box mr="15px">
            <Avatar
              size="md"
              pt="3px"
              pb="3px"
              mr="20px"
              borderRadius="25px"
              src=""
            />
            <Avatar
              size="md"
              pt="3px"
              pb="3px"
              mr="15px"
              borderRadius="25px"
              src=""
            />
          </Box>
        </HStack>
      </Stack>

      <Stack
        direction="row"
        pt="10px"
        pl="80px"
        gap={["1", "1", "1", "2", "2", "4"]}
      >
        <RecommendedAlbums title={"Good Things"} artist={"Dan + Shay"} />
        <RecommendedAlbums
          title={"Respect Original"}
          artist={"Jennifer Hudson"}
        />
        <RecommendedAlbums title={"Pressure Machine"} artist={"The Killers"} />
        <RecommendedAlbums
          title={"Pyrex Picasso"}
          artist={"Benny the Butcher"}
        />
        <RecommendedAlbums
          title={"Chavoss World 2"}
          artist={"Chavo, Pierre Bourne"}
        />
        <RecommendedAlbums
          title={"Just A Matter of S..."}
          artist={"Chavo, Pierre Bourne"}
        />
      </Stack>

      <Stack
        direction={["column", "column", "column", "row", "row", "row"]}
        mt="60px"
        ml="80px"
        gap={["2", "2", "2", "1", "4", "8"]}
      >
        <Card
          h="auto"
          width={["200px", "200px", "200px", "420px", "515px", "700px"]}
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

        <Card
          h="auto"
          width={["200px", "200px", "200px", "420px", "515px", "700px"]}
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

      <Stack
        direction="row"
        pt="50px"
        pl="80px"
        gap={["1", "1", "1", "3", "3", "6"]}
      >
        <Card
          w={["160px", "160px", "160px", "420px", "340px", "460px"]}
          h="350px"
          bgColor="gray.500"
        >
          <Text pt="40px" pl="80px">
            THE RADIO SHOW
          </Text>
          <Text pt="200px" pl="80px">
            LADY GAGA
          </Text>
        </Card>
        <Card
          w={["160px", "160px", "160px", "420px", "340px", "460px"]}
          h="350px"
          bgColor="gray.500"
        >
          <Text pt="40px" pl="80px">
            NEW ALBUM
          </Text>
          <Text pt="200px" pl="80px">
            THE KILLERS
          </Text>
        </Card>
        <Card
          w={["160px", "160px", "160px", "420px", "340px", "460px"]}
          h="350px"
          bgColor="gray.500"
        >
          <Text pt="40px" pl="80px">
            TAYLOR SWIFT OFFICIAL
          </Text>
        </Card>
      </Stack>
    </Box>
  );
};

export default Body;
