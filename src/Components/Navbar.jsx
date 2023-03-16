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
          marginBottom: "10px",
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "red",
            }}
          >
            <AddBusinessRoundedIcon
              sx={{
                transform: "scale(2)",
                marginRight: "18px",
                marginLeft: "9px",
                fontSize: "18px",
              }}
            />
          </Link>

          {isMatch ? (
            <>
              <Typography
                variant="span"
                component="h5"
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontStyle: "Inconsolata",
                  color: "red",
                  margin: "0 auto",
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
                  marginLeft: "auto",
                }}
              >
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Tab
                    label="Home"
                    sx={{ color: "red", fontWeight: "bold", fontSize: "18px" }}
                  />
                </Link>
                <Link
                  to="ticket"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Tab
                    label="Ticket"
                    sx={{ color: "red", fontWeight: "bold", fontSize: "18px" }}
                  />
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
