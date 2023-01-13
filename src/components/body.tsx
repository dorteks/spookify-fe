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
import { TopAlbumsCard } from "./body/topalbums";
import { TopSinglesCard } from "./body/topsingles";
import {
  Albums,
  NewAlbum,
  NewAlbumNew,
  RecommendedAlbums,
  TopCharts,
} from "./body/albums";

const Body = () => {
  return (
    <Box
      width={["52%", "40%", "49%", "50%", "65%", "74%"]}
      h="auto"
      bgColor="gray.50"
    >
      {/* bgColor={["purple", "blue", "yellow", "brown", "green", "orange"]} */}
      {/* new albums */}
      <Stack
        bgColor="yellow"
        direction="row"
        pt="40px"
        pb="15px"
        pl={["20px", "40px", "80px", "80px", "80px", "80px"]}
        gap={["1", "5", "8", "8", "8", "8"]}
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
      </Stack>

      {/* recommendded */}
      <Stack
        mt={["30px", "30px", "30px", "30px", "30px", "30px"]}
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
              Recommended Albums
            </Text>
          </Stack>

          <Box>
            <Avatar
              size={["sm", "md", "md", "md", "md", "md"]}
              pt="3px"
              pb="3px"
              mr="20px"
              borderRadius="25px"
              src=""
            />
            <Avatar
              size={["sm", "md", "md", "md", "md", "md"]}
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
        display="flex"
        pt="10px"
        w={["43%", "86%", "83%", "88%", "85%", "85%"]}
        ml={["20px", "40px", "80px", "80px", "80px", "80px"]}
        gap={["1", "1", "1", "2", "2", "4"]}
        overflowX="auto"
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

      {/* new releases */}
      <Stack
        direction="row"
        display="flex"
        pt="10px"
        w={["43%", "86%", "83%", "88%", "85%", "85%"]}
        ml={["20px", "40px", "80px", "80px", "80px", "80px"]}
        gap={["1", "1", "1", "2", "2", "4"]}
        overflowX="auto"
      >
        <NewAlbumNew title={"THE RADIO SHOW"} artist={"LADY GAGA"} />
        <NewAlbumNew title={"NEW ALBUM"} artist={"THE KILLERS"} />
        <NewAlbumNew title={"TAYLOR SWIFT OFFICIAL"} artist={""} />
        <NewAlbumNew title={"FEM"} artist={"DAVIDO"} />
        <NewAlbumNew title={"PROMISES"} artist={"AYO"} />
        <NewAlbumNew title={"HE STILL LOVE ME"} artist={"BEYONCE"} />
      </Stack>

      {/* top singles */}
      <Stack
        direction={["column", "column", "row", "row", "row", "row"]}
        mt="60px"
        pl={["20px", "40px", "80px", "80px", "80px", "80px"]}
        gap={["2", "2", "2", "1", "4", "8"]}
      >
        <Card
          h="auto"
          width={["380px", "600px", "420px", "510px", "600px", "673px"]}
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
          width={["380px", "600px", "420px", "510px", "600px", "673px"]}
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

      {/* top charts */}
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
              Top Charts
            </Text>
          </Stack>

          <Box>
            <Avatar
              size={["sm", "md", "md", "md", "md", "md"]}
              pt="3px"
              pb="3px"
              mr="20px"
              borderRadius="25px"
              src=""
            />
            <Avatar
              size={["sm", "md", "md", "md", "md", "md"]}
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
        display="flex"
        pt="10px"
        w={["43%", "86%", "83%", "88%", "85%", "85%"]}
        ml={["20px", "40px", "80px", "80px", "80px", "80px"]}
        gap={["1", "1", "1", "2", "2", "4"]}
        overflowX="auto"
      >
        <TopCharts city={"New York City"} />
        <TopCharts city={"Los Angeles"} />
        <TopCharts city={"Nasville"} />
        <TopCharts city={"Miami"} />
        <TopCharts city={"Alabama "} />
        <TopCharts city={"Atalanta Georgia"} />
        <TopCharts city={"Idaho"} />
      </Stack>
    </Box>
  );
};

export default Body;
