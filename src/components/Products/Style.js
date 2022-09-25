import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
  },

  productHeading: {
    padding: "3rem 0",
    fontSize: "2.5rem",
    color: "black",
  },

  headingSpan: {
    background: "#ff7800",
    color: "white",
    display: "inline-block",
    padding: "0.3rem 2rem",
    clipPath: "polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%)",
  },

  h3: {
    lineHeight: "1rem",
    fontSize: "1.5rem",
    color: "black",
  },

  hover: {
    color: "black",
    border: "1px solid black",

    "&:hover": {
      background: "#ff7800",
      color: "white",
    },
  },
}));
