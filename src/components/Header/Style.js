import { createStyles } from "@mantine/core";

const HEADER_HEIGHT = 80;

export const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  image: {
    borderRadius: "50%",
    width: "75px",
    zIndex: "1",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  btn: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  text: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,

    "&:hover": {
      color: "#ff7800",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  actionBtn: {
    "&:hover": {
      backgroundColor: "#ff7800",
      color: theme.white,
    },
  },
  box: {
    lineHeight: 1,
    padding: "20px 32px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    "&:hover": {
      color: "#ff7800",
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  textHover: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "orange",
      color: theme.white,
    },
  },

  hover: {
    "&:hover": {
      backgroundColor: "#ff7800",
      color: theme.white,
    },
  },

  menu: {
    width: "25rem",

    [theme.fn.smallerThan("sm")]: {
      width: "18.75rem",
    },
  },
}));
