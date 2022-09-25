import {
  Button,
  Card,
  Center,
  Container,
  Grid,
  Image,
  Text,
} from "@mantine/core";
import React from "react";
import { useStyles } from "./Style";
import { data } from "./data";

function Products() {
  const { classes } = useStyles();

  return (
    <section>
      <Center>
        <Text className={classes.productHeading}>
          Our <span className={classes.headingSpan}>Products</span>{" "}
        </Text>
      </Center>
      <div className={classes.wrapper}>
        <Container size="xl">
          <Grid mt={10} justify="center" gutter="md">
            {data.map(function (data) {
              return (
                <Grid.Col xs={6} sm={4}>
                  <Card
                    sx={{ boxShadow: "0 .5rem 1.5rem rgba(0,0,0,.1)" }}
                    shadow="sm"
                    p="lg"
                    radius="md"
                  >
                    <Center>
                      <Image
                        src={data.image}
                        height="12rem"
                        width="15rem"
                        alt="fresh fruit"
                      />
                    </Center>
                    <Center>
                      <Text component="h3" className={classes.h3}>
                        {data.name}
                      </Text>
                    </Center>
                    <Center>
                      <Text
                        component="span"
                        style={{ textAlign: "center" }}
                        color="dimmed"
                      >
                        {data.price}
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
                        Add to Cart
                      </Button>
                    </Center>
                  </Card>
                </Grid.Col>
              );
            })}
          </Grid>
        </Container>
      </div>
    </section>
  );
}

export default Products;
