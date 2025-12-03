import {
  BackgroundImage,
  Box,
  Container,
  Title,
  Text,
  Anchor,
} from "@mantine/core"
import LemmaSearchForm from "../ui/LemmaSearchForm"
import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <Container miw="100%" p="0">
      <BackgroundImage src="/background.jpg" mih="50vh" p="xl">
        <Title style={{ color: "white", lineHeight: 1.2 }} py="sm">
          LexoTerm
        </Title>
        <Text fw="800" style={{ color: "white" }} pb="xl">
          Lexikographische Suche und Analyse
        </Text>
        <LemmaSearchForm gap="xs" maw="24em" />
      </BackgroundImage>
      <Box maw="800px" mx="auto" py="xl" px="md">
        <Text pb="md">
          <Text fw="bold" span>
            LexoTerm
          </Text>{" "}
          ist ein wissenschaftliches Wörterbuch- und Analysetool, welches
          Forscherinnen und Forschern den Zugang zu einer breiten Palette von
          lexikographischen Ressourcen des Deutschen bietet. Ein besonderes
          Augenmerk liegt dabei auf historischen und Dialektwörterbüchern, die
          von Expert:innen in verschiedenen Forschungsprojekten im gesamten
          deutschen Sprachraum aufgebaut und gepflegt werden. Das Ziel von
          LexoTerm ist es, eine intelligente Plattform zu schaffen, die durch
          den Einsatz moderner Verfahren der Digital Humanities,
          Computerlinguistik und KI den gesamtdeutschen Wortschatz auf eine
          völlig neue Art und Weise zugänglich macht.
        </Text>
        <Text pb="md">
          <Text fw="bold" span>
            Die Daten
          </Text>{" "}
          der in LexoTerm eingebundenen{" "}
          <Anchor component={NavLink} to="/dictionaries">
            Wörterbücher
          </Anchor>{" "}
          und{" "}
          <Anchor component={NavLink} to="/corpora">
            Korpora
          </Anchor>{" "}
          stammen aus sorgfältig kuratierten Beständen aus einer Vielzahl
          lexikographischer Projekte und bilden den Kern der Plattform, die als
          Brücke und Knotenpunkt fungiert: LexoTerm vernetzt heterogene Quellen,
          macht Querverweise sichtbar und öffnet neue Wege für empirische
          Untersuchungen.
        </Text>
        <Text pb="md">
          <Text fw="bold" span>
            Der Name der Plattform
          </Text>{" "}
          ist ein Kofferwort aus den Begriffen “Lexikon” und “(Such-)Term” und
          spielt auf{" "}
          <Text span fs="italic">
            exotherme
          </Text>{" "}
          Reaktionen an, d.h. Prozesse, die mehr Energie freisetzen als zuvor
          hineingegeben wurde. In Analogie dazu soll die Plattform zu neuen
          Erkenntnissen in der lexikographischen Forschung führen, indem sie den
          Zugang zu umfangreichen Datenbeständen erleichtert und so die
          Forschungsarbeit effizienter und produktiver gestaltet.
        </Text>
      </Box>
    </Container>
  )
}
