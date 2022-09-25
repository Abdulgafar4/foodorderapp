import { createStyles } from "@mantine/core";
import banner from "../../images/banner-bg.webp"


export const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: "11rem",
    paddingBottom: "9rem",
    backgroundSize: "cover",
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
  },

  inner: {
    position: "relative",
    zIndex: 1,
    textAlign: "center"
  },

  hover: {
    color: "black",
    border: "1px solid",

    "&:hover": {
      backgroundColor: "#ff7800",
      color: theme.white,
    },
  },

  textHeading: {
     fontSize: "2rem",
  },
}));