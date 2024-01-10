import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Navbar from "./../../components/Navbar";

const authors = [
  {
    value: "isDead",
    label: "is Dead",
  },
  {
    value: "yes",
    label: "Yes",
  },
  {
    value: "no",
    label: "No",
  },
];

export default function AddAuthor() {
  return (
    <>
      <Navbar />

      <div className="author">
        <b>
          <h1> Add Author</h1>
        </b>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "25ch",
              margin: "0 auto",
              marginLeft: "1px",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="text">
            <TextField id="outlined-basic" label="Name*" variant="outlined" />
            <br />

            <TextField
              id="outlined-basic-birthyear"
              label="Birth Year*"
              variant="outlined"
            />
            <br />

            <TextField
              id="outlined-basic-genre"
              label="Genre"
              variant="outlined"
            />
          </div>
        </Box>
        <TextField
          id="outlined-select-currency"
          select
          label="is Dead"
          defaultValue=""
          helperText="Please select an option"
        >
          {authors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>{" "}
        <br />
        <TextField
          id="outlined-select-currency"
          select
          label="is Dead"
          defaultValue=""
          helperText="Please select an option"
        >
          {authors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          label="Size"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
        <br />
        <Button variant="contained" color="success">
          Add
        </Button>
      </div>
    </>
  );
}
