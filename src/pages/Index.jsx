import React from "react";
import { Box, Heading, Text, Button, Flex, Image, Stack, Container, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaCheck, FaUsers, FaChartLine, FaClock } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={"gray.100"} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Index = () => {
  return (
    <Container maxW={"7xl"}>
      <Stack align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }} direction={{ base: "column", md: "row" }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Tenfast,
            </Text>
            <br />
            <Text as={"span"} color={"blue.400"}>
              Snabbare rekrytering
            </Text>
          </Heading>
          <Text color={"gray.500"}>Tenfast hjälper företag att hitta rätt kompetens snabbare. Vi har ett stort nätverk av konsulter och experter inom IT och teknik. Beskriv ert behov så hittar vi rätt person till uppdraget inom 48 timmar.</Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }}>
              Boka möte
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              Läs mer
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
          <Box position={"relative"} height={"300px"} rounded={"2xl"} boxShadow={"2xl"} width={"full"} overflow={"hidden"}>
            <Image alt={"Hero Image"} fit={"cover"} align={"center"} w={"100%"} h={"100%"} src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlb3BsZSUyMHdvcmtpbmd8ZW58MHx8fHwxNzEwNDM4ODAzfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          </Box>
        </Flex>
      </Stack>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature icon={<Icon as={FaUsers} w={10} h={10} />} title={"Stort nätverk"} text={"Vi har ett omfattande nätverk av IT-konsulter och tekniska experter."} />
          <Feature icon={<Icon as={FaClock} w={10} h={10} />} title={"Snabb process"} text={"Beskriv ert behov så presenterar vi kandidater inom 48 timmar."} />
          <Feature icon={<Icon as={FaChartLine} w={10} h={10} />} title={"Kvalitet"} text={"Våra konsulter är noggrant utvalda för att matcha era krav."} />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;
