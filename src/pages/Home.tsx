import { BackgroundImage, Container, Title, Text } from "@mantine/core"
import LemmaSearchForm from "../ui/LemmaSearchForm"
import MainText from "../layout/MainText"

function HeroSection() {
  return (
    <BackgroundImage
      src="https://azlex.de/static/img/vis1.png"
      mih="50vh"
      p="xl"
    >
      <Title style={{ color: "white", lineHeight: 1.2 }} py="sm">
        LexoTerm
      </Title>
      <Text fw="800" style={{ color: "white" }} pb="xl">
        Lexikographische Suche und Analyse
      </Text>
      <LemmaSearchForm gap="xs" maw="24em" />
    </BackgroundImage>
  )
}

export default function Home() {
  return (
    <Container miw="100%" p="0">
      <HeroSection />
      <MainText>
        <p>
          <strong>LexoTerm</strong> ist ein wissenschaftliches Wörterbuch- und
          Analysetool, welches Forscherinnen und Forschern den Zugang zu einer
          breiten Palette von lexikographischen Ressourcen des Deutschen bietet.
          Ein besonderes Augenmerk liegt dabei auf historischen und
          Dialektwörterbüchern, die von Expert:innen in verschiedenen
          Forschungsprojekten im gesamten deutschen Sprachraum aufgebaut und
          gepflegt werden. Das Ziel von LexoTerm ist es, eine intelligente
          Plattform zu schaffen, die durch den Einsatz moderner Verfahren der
          Digital Humanities, Computerlinguistik und KI den gesamtdeutschen
          Wortschatz auf eine völlig neue Art und Weise zugänglich macht.
        </p>
        <p>
          <strong>Die Daten</strong> der in LexoTerm eingebundenen{" "}
          <a href="/dictionaries">Wörterbücher</a> und{" "}
          <a href="/corpora">Korpora</a> stammen aus sorgfältig kuratierten
          Beständen aus einer Vielzahl lexikographischer Projekte und bilden den
          Kern der Plattform, die als Brücke und Knotenpunkt fungiert: LexoTerm
          vernetzt heterogene Quellen, macht Querverweise sichtbar und öffnet
          neue Wege für empirische Untersuchungen.
        </p>
        <p>
          <strong>Der Name der Plattform</strong> ist ein Kofferwort aus den
          Begriffen “Lexikon” und “(Such-)Term” und spielt auf <i>exotherme</i>{" "}
          Reaktionen an, d.h. Prozesse, die mehr Energie freisetzen als zuvor
          hineingegeben wurde. In Analogie dazu soll die Plattform zu neuen
          Erkenntnissen in der lexikographischen Forschung führen, indem sie den
          Zugang zu umfangreichen Datenbeständen erleichtert und so die
          Forschungsarbeit effizienter und produktiver gestaltet.
        </p>
      </MainText>
    </Container>
  )
}
