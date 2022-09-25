import React from "react";
import { Menu, Center, Group } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import { useStyles } from "./Style";

const links = [
  { link: "/", label: "Home" },
  { link: "#features", label: "Features" },
  { link: "#product", label: "Products" },
  {
    link: "#categories",
    label: "Categories",
    links: [
      { link: "/cakes", label: "Cakes" },
      { link: "/snacks", label: "Snacks" },
      { link: "/chops", label: "Small Chops" },
      { link: "/foodtray", label: "Food Tray" },
      { link: "/smoothies", label: "Smoothies" },
      { link: "/cocktail", label: "Cocktails" },
      { link: "/chapman", label: "Chapman" },
      { link: "/chocolate", label: "Chocolate boxes" },
    ],
  },
  { link: "#review", label: "Review" },
  { link: "#blogs", label: "Blogs" },
];

export function MenuItem() {
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link?.links?.map((item) => (
      <Menu.Item key={item.link} className={classes.box}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <div
              component="a"
              href={link.link}
              className={classes.link}
              target="_blank"
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </div>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Group spacing={5} className={classes.links}>
      {items}
    </Group>
  );
}
