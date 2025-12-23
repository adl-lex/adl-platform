import _ from "lodash"
import { JSX } from "react"
import { DisplayEntry } from "../domain/Entry"
import { Title, Text, List } from "@mantine/core"
import { useParams } from "react-router-dom"
import classes from "./LemmaDisplay.module.css"
import DisplaySense from "./DisplaySense"

type Gender = "M" | "W" | "N"

export function LemmaNotFound(): JSX.Element {
  const { id } = useParams<{ id: string }>()

  return (
    <section>
      <Text>Lemma "{id}" nicht gefunden.</Text>
    </section>
  )
}

function DisplayGender({ gender }: { gender: Gender }): JSX.Element {
  const articles = {
    M: "der",
    W: "die",
    N: "das",
  }
  return <span className={classes.gender}>{`, ${articles[gender]}`}</span>
}

function DisplayVariants({ variants }: { variants: string[] }): JSX.Element {
  return (
    <>
      <Title order={2} size={"h4"} pb=".5em">
        Varianten
      </Title>
      <List>
        {variants.map((variant, index) => (
          <List.Item key={index}>{variant}</List.Item>
        ))}
      </List>
    </>
  )
}

export default function DisplayLemma({
  entry,
}: {
  entry: DisplayEntry
}): JSX.Element {
  return (
    <section>
      <Title size={"h2"}>
        {entry.headword}
        {entry.gender && <DisplayGender gender={entry.gender as Gender} />}
      </Title>
      <Text pb="1.5em">
        <span>{entry.pos}</span>
      </Text>
      {entry.variants.length > 0 && (
        <DisplayVariants variants={entry.variants} />
      )}
      <Title order={2} size={"h4"} pb=".5em">
        Bedeutungen
      </Title>
      <DisplaySense senses={entry.sense} />
    </section>
  )
}
