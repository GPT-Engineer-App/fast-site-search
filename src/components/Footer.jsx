import React from "react";
import { Box, Container, Stack, SimpleGrid, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.50" color="gray.700">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Text fontWeight="bold" mb={2}>Om Tenfast</Text>
              <Text fontSize="sm">Tenfast är ett rekryteringsföretag som specialiserar sig inom IT och teknik. Vi hjälper företag att hitta rätt kompetens snabbare genom vårt stora nätverk av konsulter och experter.</Text>
            </Box>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="bold" mb={2}>Snabblänkar</Text>
            <Link href="#">Hem</Link>
            <Link href="#">Om oss</Link>
            <Link href="#">Våra tjänster</Link>
            <Link href="#">Kontakt</Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="bold" mb={2}>Följ oss</Text>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Twitter</Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="bold" mb={2}>Kontakta oss</Text>
            <Text>Tenfast AB</Text>
            <Text>Storgatan 1, 123 45 Stockholm</Text>
            <Text>info@tenfast.se</Text>
            <Text>08-123 456 78</Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © {new Date().getFullYear()} Tenfast AB. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;