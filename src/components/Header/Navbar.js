import { Box, NavLink} from "@mantine/core";
import {
  IconHome,
  IconNote,
  IconInfoCircle,
  IconQuestionMark,
  IconCoin,
} from "@tabler/icons";
import { useStyles } from "./Style";

export function NavbarMinimal() {
  const { classes } = useStyles();

  return (
    <Box sx={{ width: 200 }} mt={150}>
      <NavLink
        label="Home"
        icon={<IconHome size={26} stroke={1.5} />}
        variant="subtle"
        className={classes.box}
        component="a"
        href="/"
      />
      <NavLink
        label="Features"
        icon={<IconHome size={26} stroke={1.5} />}
        variant="subtle"
        className={classes.box}
        component="a"
        href="#features"
      />
      <NavLink
        label="Products"
        icon={<IconHome size={26} stroke={1.5} />}
        variant="subtle"
        className={classes.box}
        component="a"
        href="#product"
      />
      <NavLink
        label="Categories"
        icon={<IconNote size={26} stroke={1.5} />}
        childrenOffset={28}
        className={classes.box}
        component="a"
        href="#categories"
      >
        <NavLink
          label="Cakes"
          className={classes.box}
          component="a"
          href="/cakes"
        />
        <NavLink
          label="Snacks"
          className={classes.box}
          component="a"
          href="/snacks"
        />
        <NavLink
          label="Small Chops"
          className={classes.box}
          component="a"
          href="/chops"
        />
        <NavLink
          label="Food Tray"
          className={classes.box}
          component="a"
          href="/foodtray"
        />
        <NavLink
          label="Smoothies"
          className={classes.box}
          component="a"
          href="/smoothies"
        />
        <NavLink
          label="Cocktail"
          className={classes.box}
          component="a"
          href="/cocktail"
        />
        <NavLink
          label="Chapman"
          className={classes.box}
          component="a"
          href="/chapman"
        />
        <NavLink
          label="Chocolate boxes"
          className={classes.box}
          component="a"
          href="/cholates"
        />
      </NavLink>

      <NavLink
        label="Review"
        icon={<IconInfoCircle size={26} stroke={1.5} />}
        className={classes.box}
        component="a"
        href="#review"
      />
      <NavLink
        label="Blogs"
        icon={<IconCoin size={26} stroke={1.5} />}
        className={classes.box}
        component="a"
        href="#blogs"
      />
    </Box>
  );
}
