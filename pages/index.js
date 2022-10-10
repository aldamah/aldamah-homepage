import NextLink from "next/link"
import {
  Container,
  Button,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue
} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.100")}
          p={3}
          align="center"
        >
          Hello, i'm a javascript full-stack developer based in Madagascar
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as={"h2"} variant="oage-title">
              RANDRIAONINTSOA Dinah Andoniraina
            </Heading>
            <p>Artist / Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-bloc"
              borderRadius="full"
              src="/images/andoniraina.png"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as={"h3"} variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I’m living the dream. I’ve always been a great problem solver, an
            independent introvert, and a technophile obsessed with the latest
            devices. Today, I’m working as a software engineer for ABL
            Outsourcing, and I get to show off all these elements of who I am.
            Recently, i made a mobile app with react-native called{" "}
            <NextLink href="/works/inkdrop">
              <Link>Smartsailor</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href={"/works"}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant={"section-title"}>
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Antananarivo, Madagascar.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Got the Master&apos;s degree in Information Technology at Ecole
            Nationale d'informatique
          </BioSection>
          <BioSection>
            <BioYear>2019 - 2021</BioYear>
            Worked at Etech consulting Anosivavaka, Antananarivo; as PHP /
            ReactJS developer
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            Work at ABL Outsourcing Ivandry, Antananarivo; as ReactJS /
            React-Native / Firebase developer
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant={"section-title"}>
            I ❤
          </Heading>
          <Paragraph>
            Technology gadget, Sport, Playing Football, Music, Playing Musical
            Instrument(Bass, Drums, Guitare), Video Games.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
