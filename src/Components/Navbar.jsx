import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import Menu from "./Menu";
const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar
        position="static"
        sx={{
          marginBottom: "19px",
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <AddBusinessRoundedIcon
            sx={{
              transform: "scale(2)",
              marginRight: "18px",
              marginLeft: "9px",
            }}
          />

          {isMatch ? (
            <>
              <Typography
                variant="span"
                component="h5"
                sx={{
                  fontSize: "22px",
                  fontWeight: "thin",
                  fontStyle: "Inconsolata",
                  color: "red",
                }}
              >
                Dexter@Ticket
              </Typography>
              <Menu />
            </>
          ) : (
            <>
              <Tabs
                value={value}
                onChange={(e) => setValue(e.target.value)}
                indicatorColor="secondary"
                sx={{
                  marginLeft: " auto",
                }}
              >
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "red",
                    fontSize: "24px",
                    fontWeight: "thin",
                  }}
                >
                  <Tab label="Home" />
                </Link>
                <Link
                  to="ticket"
                  style={{
                    textDecoration: "none",
                    color: "red",
                    fontSize: "24px",
                    fontWeight: "thin",
                  }}
                >
                  <Tab label="Ticket" />
                </Link>
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
