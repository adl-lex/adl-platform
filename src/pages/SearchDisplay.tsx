import { ActionIcon, Box, Group, TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function SearchDisplay() {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState("")

  const SearchButton = (
    <ActionIcon variant="white" size="lg">
      <IconSearch size={16} />
    </ActionIcon>
  )

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (searchValue.trim()) {
      navigate(`/search/lemma/${encodeURIComponent(searchValue.trim())}`)
    }
  }

  return (
    <Box maw="800px" mx="auto" py="xl" px="md">
      <h1>Stichwortsuche</h1>

      <Group component={"form"} onSubmit={handleSubmit}>
        <TextInput
          rightSection={SearchButton}
          flex={1}
          placeholder="Stichwortsuche..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
        />
      </Group>
    </Box>
  )
}
