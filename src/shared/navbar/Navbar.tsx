/* import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box >
      <Container maxWidth="xl">
        <Stack direction="row" py={2} justifyContent="space-between">
          <Typography style={{textDecoration: "none", color: "#000"}} variant="h5" component={Link} href='/' fontWeight={600}>P <Box component="span" color="primary.main">H</Box> Health Care</Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            gap={4}
            alignItems="center"
          >
            <Typography>Consultation</Typography>
            <Typography>Health Plans</Typography>
            <Typography>Medicines</Typography>
            <Typography>Diagnostics</Typography>
            <Typography>NGOs</Typography>
          </Stack>
          <Button component={Link} href="/login">
            Login
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;

*/
"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Container, Slide, useScrollTrigger } from "@mui/material";
import { getUserInfo, isLoggedIn } from "@/service/storeUserInfo";
import { removeUser } from "@/utils/local_storage";
import { useRouter } from "next/navigation";

const drawerWidth = 300;
const navItems = [
  "Consultation",
  "Health Plans",
  "Medicines",
  "Diagnostics",
  "NGO's",
];

// hide on scroll feature;
interface Props {
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const loggedInUser = getUserInfo();
  const router = useRouter()
  console.log(loggedInUser, "from navbar");
  console.log(isLoggedIn(), "from navbar line 84")

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // implementation of logout functionality
  const handleLogOut = () => {
    router.refresh()
    return removeUser();
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        sx={{ textDecoration: "none", color: "#1e272e" }}
        variant="h5"
        component={Link}
        href="/"
        fontWeight={600}
      >
        P
        <Box component="span" color="primary.main">
          H
        </Box>
        Health Care
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {loggedInUser?.userId ? (
            <Button onClick={handleLogOut} color="error">Log Out</Button>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
          {loggedInUser?.role === "admin" && (
            <Button sx={{ marginTop: "10px" }} variant="outlined">
              Registration
            </Button>
          )}
        </Box>
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "none",
        marginLeft: "30px",
        marginRight: "30px",
      }}
    >
      <HideOnScroll>
        <AppBar sx={{ background: "none" }} component="nav">
          <Container>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuOpenIcon sx={{ color: "#1e272e" }} />
                </IconButton>

                <Typography
                  sx={{
                    textDecoration: "none",
                    color: "#1e272e",
                    flexGrow: 1,
                    dispay: { sx: "none", sm: "block" },
                  }}
                  variant="h5"
                  component={Link}
                  href="/"
                  fontWeight={600}
                >
                  {" "}
                  P{" "}
                  <Box component="span" color="primary.main">
                    H
                  </Box>
                  Health Care
                </Typography>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "#1e272e",
                      boxShadow: "none",
                      background: "none",
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
              {loggedInUser?.userId ? (
               <Button onClick={handleLogOut} color="error">Log Out</Button> 
              ) : (
                <Link href="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
