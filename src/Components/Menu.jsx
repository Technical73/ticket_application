import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer anchor="left" open={open} onClose={() => setOpen(true)}>
        <List
          sx={{
            backgroundColor: "black",
            height: "100vh",
          }}
        >
          <ListItemButton>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>
                <ListItemText
                  sx={{ color: "red", fontWeight: "bold", fontSize: "18px" }}
                >
                  Home
                </ListItemText>
              </ListItemIcon>
            </Link>
          </ListItemButton>

          <ListItemButton>
            <Link
              to="Ticket"
              style={{
                textDecoration: "none",
              }}
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>
                <ListItemText
                  sx={{ color: "red", fontWeight: "bold", fontSize: "18px" }}
                >
                  Ticket
                </ListItemText>
              </ListItemIcon>
            </Link>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          marginLeft: "auto",
          color: "red",
          fontSize: "18px",
        }}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default Menu;
