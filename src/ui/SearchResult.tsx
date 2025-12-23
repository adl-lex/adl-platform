import { Box, List, Loader } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import _ from "lodash"
import { LemmaNotFound } from "./LemmaDisplay"
import { useSearchParams } from "react-router-dom"
import Entry from "../domain/Entry"

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

function ResultEntry({ entry }: { entry: Entry }) {
  return <List.Item>{entry.form?.[0].orth}</List.Item>
}

function ResultList({ entries }: { entries: Entry[] }) {
  return (
    <List>
      {entries.map((entry, index) => (
        <ResultEntry key={index} entry={entry} />
      ))}
    </List>
  )
}

export default function SearchResult() {
  const [searchParams] = useSearchParams()
  const currentQuery = searchParams.get("q")

  const { data, isLoading } = useQuery<Entry[]>({
    queryKey: ["search", currentQuery],
    queryFn: () => search(currentQuery ?? undefined),
    enabled: !!currentQuery,
    refetchOnWindowFocus: false,
  })

  const isEmpty = _.isEmpty(data) || _.has(data, "error")

  return (
    <Box maw="800px" mx="auto" py="xl" px="md">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!currentQuery ? (
            <></>
          ) : isEmpty ? (
            <LemmaNotFound />
          ) : (
            <ResultList entries={data || []} />
          )}{" "}
        </>
      )}
    </Box>
  )
}
