import React from 'react'
import {Menu, ActionIcon, Input } from "@mantine/core"
import { IconSearch } from "@tabler/icons";
import { useStyles } from '../Style';

export default function Search() {
    const {classes} = useStyles();
  return (
    <>
      <Menu transition="slide-left">
        <Menu.Target>
          <ActionIcon variant="default" size="xl" className={classes.actionBtn}>
            <IconSearch size={20} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Input
            placeholder="Search Items"
            variant="unstyled"
            rightSection={<IconSearch />}
            style={{ width: "300px" }}
          />
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
