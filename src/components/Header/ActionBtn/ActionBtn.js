import React from 'react'
import {
  Group,

} from "@mantine/core";
import Search from './Search';
import Cart from './Cart';
import User from './User';
import { useMediaQuery } from '@mantine/hooks';



function ActionBtn() {
   const smallScreen = useMediaQuery("(max-width: 320px)");
  return (
    <Group spacing="sm" style={{ display: smallScreen ? "none" : "flex" }}>
      <Search />
      <Cart />
      <User />
    </Group>
  );
}

export default ActionBtn