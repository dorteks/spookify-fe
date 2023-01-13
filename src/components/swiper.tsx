import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import { Box, Card, Text } from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";

const alphabets = [
  "Apple",
  "Ball",
  "Cat",
  "Dog",
  "Egg",
  "Fan",
  "Goat",
  "House",
  "Ink",
  "Jug",
  "Key",
  "Lamp",
  "Mango",
  "Net",
  "Orange",
  "Pencil",
  "Quill",
  "Rat",
  "Snake",
  "Table",
  "Umbrella",
  "Violin",
  "Water",
  "X-ray",
  "Yam",
  "Zebra",
];

export const SwipeLeft = () => {
  const slides = alphabets.map((index) => `${index}`);

  return (
    <Box
      as="div"
      ml="100px"
      mt="50px"
      mb="100px"
      p="20px"
      pl="40px"
      width="1000px"
      height="100px"
      bgColor="red"
      display="flex"
      alignItems="center"
      fontSize="30px"
    >
      <Swiper modules={[Virtual]} spaceBetween={20} slidesPerView={5} virtual>
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
