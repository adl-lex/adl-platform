import { ActionIcon, Box, TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"

export default function SearchDisplay() {
  const SearchButton = (
    <ActionIcon variant="white" size="lg">
      <IconSearch size={16} />
    </ActionIcon>
  )
  return (
    <Box maw="800px" mx="auto" py="xl" px="md">
      <h1>Lemmasuche</h1>

      <TextInput
        rightSection={SearchButton}
        flex={1}
        placeholder="Wörterbücher durchsuchen..."
      />
    </Box>
  )
}
