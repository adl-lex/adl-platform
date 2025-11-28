import { Box } from "@mantine/core"
import LemmaSearchForm from "../ui/LemmaSearchForm"

export default function SearchDisplay() {
  return (
    <Box maw="800px" mx="auto" py="xl" px="md">
      <h1>Stichwortsuche</h1>

      <LemmaSearchForm />
    </Box>
  )
}
