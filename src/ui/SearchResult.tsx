import { Badge, Box, Card, Loader, Stack, Title, Tooltip } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import _ from "lodash"
import { LemmaNotFound } from "./LemmaDisplay"
import { NavLink, useSearchParams } from "react-router-dom"
import { DisplayEntry } from "../domain/Entry"
import { ResourceKey, resources } from "../domain/Resource"

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
      <Badge size="sm" color={resource.color}>
        {resource.key.toUpperCase()}
      </Badge>
    </Tooltip>
  )
}

function ResultEntry({ entry }: { entry: DisplayEntry }) {
  return (
    <NavLink to={"/entry/" + entry["xml:id"]}>
      <Card shadow="xs">
        <DisplayResource name={entry.source} />
        <Title mt={0} order={2}>
          {entry.headword}
        </Title>
      </Card>
    </NavLink>
  )
}

function ResultList({ entries }: { entries: DisplayEntry[] }) {
  return (
    <Stack>
      {entries.map((entry, index) => (
        <ResultEntry key={index} entry={entry} />
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
