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
        <List>
          <ListItemButton>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "red",
                fontSize: "24px",
                fontWeight: "thin",
              }}
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemIcon>
            </Link>
          </ListItemButton>

          <ListItemButton>
            <Link
              to="Ticket"
              style={{
                textDecoration: "none",
                color: "red",
                fontSize: "24px",
                fontWeight: "thin",
              }}
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>
                <ListItemText>Ticket</ListItemText>
              </ListItemIcon>
            </Link>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          marginLeft: "auto",
          color: "white",
        }}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default Menu;
