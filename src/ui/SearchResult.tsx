import {
  Badge,
  Box,
  Card,
  Loader,
  Stack,
  Title,
  Tooltip,
  Text,
  Group,
} from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import _ from "lodash"
import { DisplaySense, LemmaNotFound } from "./LemmaDisplay"
import { NavLink, useSearchParams } from "react-router-dom"
import { DisplayEntry } from "../domain/Entry"
import { ResourceKey, resources } from "../domain/Resource"
import classes from "./SearchResult.module.css"
import { IconExternalLink } from "@tabler/icons-react"

const search = async (query?: string): Promise<any> => {
  if (!query) {
    throw new Error(`HTTP error status: 400`)
  }
  const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
  if (!response.ok) {
    throw new Error(`HTTP error status: ${response.status}`)
  }
  const data = await response.json()
  return data
}

function DisplayResource({ name }: { name: ResourceKey }) {
  const resource = resources[name]
  return (
    <Tooltip label={resource.displayName}>
      <Badge variant="outline" size="xs" color={resource.color}>
        {resource.key.toUpperCase()}
      </Badge>
    </Tooltip>
  )
}

function DisplayGrammarInfo({ entry }: { entry: DisplayEntry }) {
  return (
    <Group mb="md" gap={5}>
      {entry.pos && (
        <Badge size="xs" variant="default" radius="xs">
          {entry.pos}
        </Badge>
      )}
      {entry.gender && (
        <Badge size="xs" variant="default" radius="xs">
          {entry.gender}
        </Badge>
      )}
    </Group>
  )
}

function DisplayVariants({ variants }: { variants: string[] }) {
  return (
    variants.length > 0 && (
      <Text mb="md">
        Varianten:{" "}
        <Text className={classes.variants} span>
          {variants.join("; ")}
        </Text>
      </Text>
    )
  )
}

function PreviewSenses({ senses }: { senses: DisplayEntry["sense"] }) {
  return <DisplaySense senses={senses} />
}

function EntryLink({ id }: { id: string }) {
  return (
    <NavLink className={classes.lemmalink} to={"/entry/" + id}>
      <IconExternalLink />
    </NavLink>
  )
}

function EntryHeader({ entry }: { entry: DisplayEntry }) {
  return (
    <Group gap={5} mb="xs">
      <Title mt={0} mb={0} order={2}>
        {entry.headword}
      </Title>
      <EntryLink id={entry["xml:id"]} />
    </Group>
  )
}

function ResultItem({ entry }: { entry: DisplayEntry }) {
  return (
    <Card shadow="md" className={classes["result-item"]}>
      <DisplayResource name={entry.source} />
      <EntryHeader entry={entry} />
      <DisplayGrammarInfo entry={entry} />
      <DisplayVariants variants={entry.variants} />
      <PreviewSenses senses={entry.sense} />
    </Card>
  )
}

function ResultList({ entries }: { entries: DisplayEntry[] }) {
  return (
    <Stack>
      {entries.map((entry, index) => (
        <ResultItem key={index} entry={entry} />
      ))}
    </Stack>
  )
}

export default function SearchResult() {
  const [searchParams] = useSearchParams()
  const currentQuery = searchParams.get("q")

  const { data, isLoading } = useQuery<DisplayEntry[]>({
    queryKey: ["search", currentQuery],
    queryFn: () => search(currentQuery ?? undefined),
    enabled: !!currentQuery,
    refetchOnWindowFocus: false,
  })

  const isEmpty = _.isEmpty(data) || _.has(data, "error")

  return (
    currentQuery && (
      <Box maw="800px" mx="auto" py="xl" px="md">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {isEmpty ? <LemmaNotFound /> : <ResultList entries={data || []} />}{" "}
          </>
        )}
      </Box>
    )
  )
}
