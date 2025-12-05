import { Box, Typography } from "@mantine/core"

export default function MainText({ children }: { children: React.ReactNode }) {
  return (
    <Box maw="800px" mx="auto" py="xl" px="md">
      <Typography>
        <div>{children}</div>
      </Typography>
    </Box>
  )
}
