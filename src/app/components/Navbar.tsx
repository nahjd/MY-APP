"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";

export default function ButtonAppBar() {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "black" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Authors
          </Typography>
          <Button
            onClick={() => {
              router.push("http://localhost:3000/pages");
            }}
            to="/pages/navbar"
            color="inherit"
          >
            Home
          </Button>
          <Button
            onClick={() => {
              router.push("http://localhost:3000/pages/author");
            }}
            color="inherit"
          >
            Authors
          </Button>
          <Button
            onClick={() => {
              router.push("http://localhost:3000/pages/addauthor");
            }}
            color="inherit"
          >
            Add Authors
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
