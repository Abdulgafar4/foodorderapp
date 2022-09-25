import React from "react";
import { Menu, ActionIcon, Card, Text, Button, Group, Image, Center } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconShoppingCart, IconTrash } from "@tabler/icons";
import { useStyles } from "../Style";
import Melon from "../../../images/cart-img-1.png"

export default function Cart() {

    const { classes} = useStyles();

     const largeScreen = useMediaQuery("(min-width: 800px)");

  return (
    <>
      <Menu transition="slide-left" width={largeScreen ? "25rem" : "18.75rem"}>
        <Menu.Target>
          <ActionIcon variant="default" size="xl" className={classes.actionBtn}>
            <IconShoppingCart size={20} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Card>
            <Group spacing={largeScreen ? "70px" : "20px"}>
              <Image width="90px" src={Melon} alt="Image" size="xs" />
              <Text size="sm" color="dimmed">
                Water Melon
                <br />
                $4.99/- Qty : 1
              </Text>
              <ActionIcon variant="transparent">
                <IconTrash size={20} />
              </ActionIcon>
            </Group>
            <Group spacing={largeScreen ? "70px" : "20px"}>
              <Image width="90px" src={Melon} alt="Image" size="xs" />
              <Text size="sm" color="dimmed">
                Water Melon
                <br />
                $4.99/- Qty : 1
              </Text>
              <ActionIcon variant="transparent">
                <IconTrash size={20} />
              </ActionIcon>
            </Group>
            <Group spacing={largeScreen ? "70px" : "20px"}>
              <Image width="90px" src={Melon} alt="Image" size="xs" />
              <Text size="sm" color="dimmed">
                Water Melon
                <br />
                $4.99/- Qty : 1
              </Text>
              <ActionIcon variant="transparent">
                <IconTrash size={20} />
              </ActionIcon>
            </Group>
            <Center style={{ margin: "30px 0 20px 45px" }}>
              <Text size="xl" color="orange">
                Total : $19.69
              </Text>
            </Center>
            <Center>
              <Button
                variant="default"
                fullWidth
                mt="md"
                radius="md"
                className={classes.hover}
              >
                Checkout
              </Button>
            </Center>
          </Card>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
