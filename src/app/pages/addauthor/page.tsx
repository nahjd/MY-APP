"use client";
import Navbar from "./../../components/Navbar";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

import "./page.scss";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Data } from "../author/page";
type Props = {};

function AddAuthor({}: Props) {
  const [name, setName] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [genre, setGenre] = useState<string>("");
  const [dead, setDead] = useState<boolean>(false);
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState<string>("");
  //   console.log(gender);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text">Add Author</div>
        <div className="inputs-btn">
          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setYear(e.target.value);
            }}
            id="standard-basic"
            label="Birth Year"
            variant="standard"
            type="number"
          />
          <TextField
            onChange={(e) => {
              setGenre(e.target.value);
            }}
            id="standard-basic"
            label="Genre"
            variant="standard"
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">is Dead</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dead}
                label="Age"
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Age"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <MenuItem value="male">male</MenuItem>
                <MenuItem value="female">female</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            onChange={(e) => {
              setImage(e.target.value);
            }}
            id="standard-basic"
            label="imageURL"
            variant="standard"
          />
          <Button
            onClick={() => {
              let obj: Data = {
                id: uuidv4(),
                name: name,
                gender: gender,
                image: image,
                birth: Number(year),
                isDead: dead,
                genre: genre,
              };
              axios.post("http://localhost:5000/users", obj);
              console.log(obj);
            }}
            variant="contained"
          >
            Add
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddAuthor;
