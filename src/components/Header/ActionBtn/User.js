import React from "react";
import { Menu, ActionIcon, Group, Text, Button, Center } from "@mantine/core";
import { IconBasket, IconHeart, IconUser } from "@tabler/icons";
import { useStyles } from "../Style";
// import { useMediaQuery } from '@mantine/hooks';

export default function User() {

    const {classes} = useStyles();

    //  const largeScreen = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <Menu transition="slide-left" width="15rem">
        <Menu.Target>
          <ActionIcon variant="default" size="xl" className={classes.actionBtn}>
            <IconUser size={20} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Group className={classes.textHover}>
            <ActionIcon variant="transparent">
              <IconUser size="lg" />
            </ActionIcon>
            <Text size="lg" px="lg" py="md">
              My Account
            </Text>
          </Group>
          <Group className={classes.textHover}>
            <ActionIcon variant="transparent">
              <IconBasket size="lg" />
            </ActionIcon>
            <Text size="lg" px="lg" py="md">
              Orders
            </Text>
          </Group>
          <Group className={classes.textHover}>
            <ActionIcon variant="transparent">
              <IconHeart size="lg" />
            </ActionIcon>
            <Text size="lg" px="lg" py="md">
              Saved Items
            </Text>
          </Group>

          <Center>
            <Button
              variant="default"
              fullWidth
              mt="md"
              radius="md"
              className={classes.hover}
            >
              Sign In
            </Button>
          </Center>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
