import { Button, Center, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useStyles } from "./Style";

function Hero() {
  const { classes } = useStyles();

  const smallScreen = useMediaQuery("(max-width: 630px)");

  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>
        <Center>
          <Text className={classes.textHeading}>
            Fresh And <strong style={{ color: "#ff7800"}} >Organic</strong> Products For Your Taste
          </Text>
        </Center>
        <Center>
          <Text component="span" color="dimmed" size={smallScreen ? "md" : "lg"}>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. <br />{" "}
            <Center component="span" color="dimmed" size="lg">
              Aliquam Libero Nostrum Veniam Facere Tempore Nisi.
            </Center>
          </Text>
        </Center>
        <Center>
          <Button
            variant="outline"
            mt="md"
            size="md"
            radius="md"
            className={classes.hover}
          >
            Shop Now
          </Button>
        </Center>
      </div>
    </div>
  );
}

export default Hero;
