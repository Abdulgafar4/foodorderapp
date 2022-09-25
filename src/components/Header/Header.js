import { Header, Container, Group,  Burger, Drawer } from "@mantine/core";
import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { NavbarMinimal } from "./Navbar";
import { useStyles } from "./Style";
import { SwitchToggle } from "./SwitchToggle";
import Logo from "../../images/logo.jpg"
import ActionBtn from "./ActionBtn/ActionBtn";

export function HeaderAction() {

  const { classes } = useStyles();
   const [opened, setOpened] = useState(false);

  return (
    <Header
      height={80}
      sx={{ borderBottom: 0, boxShadow: "0 .5rem 1.5rem rgba(0,0,0,.1)" }}
      mb={150}
    >
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="sm"
        size="sm"
      >
        <NavbarMinimal />
      </Drawer>
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={() => setOpened(true)}
            className={classes.burger}
            size="sm"
          />
          <img src={Logo} alt="Logo" className={classes.image} />
        </Group>
        <MenuItem />
        <SwitchToggle />
        <ActionBtn />
      </Container>
    </Header>
  );
}
