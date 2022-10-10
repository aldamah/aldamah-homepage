import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"

import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png"
import thumbWalknote from "../public/images/works/walknote_eyecatch.png"
import Layout from "../components/layouts/article"
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A mlqjdfmlkqjdsif kmqjsdf mqlkjdsf miqds fmkqjfd mkqjsd fi
              qsmlkdjf qsmdfj
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="walknote"
              title="walknote"
              thumbnail={thumbWalknote}
            >
              A mlqjdfmlkqjdsif kmqjsdf mqlkjdsf miqds fmkqjfd mkqjsd fi
              qsmlkdjf qsmdfj
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
