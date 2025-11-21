import { Burger, Group, UnstyledButton } from "@mantine/core"
import { Link, useLocation } from "react-router-dom"
import classes from "./MainLayout.module.css"
import { AppRoute } from "../App"
import AdlLogo from "./AdlLogo"
import classNames from "classnames"

export function HeaderMenu({
  routes,
  opened,
  toggle,
}: {
  routes: AppRoute[]
  opened: boolean
  toggle: () => void
}) {
  const location = useLocation()
  return (
    <Group h="100%" px="md">
      <Group
        justify="space-between"
        style={{ display: "flex", "flex-wrap": "nowrap", "flex-grow": "1" }}
      >
        <AdlLogo />
        <Group ml="xl" gap={0} visibleFrom="sm">
          {routes.map(({ path, title }) => (
            <UnstyledButton
              key={path}
              className={classNames(classes.control, {
                [classes.active]: location.pathname === path,
              })}
              component={Link}
              to={path}
            >
              {title}
            </UnstyledButton>
          ))}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md" />
      </Group>
    </Group>
  )
}
