"use client";
import Navbar from "./../../components/Navbar";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import { Button, CardActionArea, CardActions } from "@mui/material";
import axios from "axios";
import "./page.scss";
type Props = {};
export interface Data {
  id: string;
  isDead: boolean;
  birth: number;
  name: string;
  gender: string;
  genre: string;
  image: string;
}
function Authors({}: Props) {
  const [age, setAge] = useState<string>("");
  const [word, setWord] = useState<string>("");
  const [search, setSearch] = useState<Data[]>([]);
  const [data, setData] = useState<Data[]>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  useEffect(() => {
    axios("http://localhost:5000/users").then((res: any) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  console.log(search);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="search-selectGender">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Search Author"
              variant="outlined"
              onChange={(e) => {
                setWord(e.target.value);
                setSearch(
                  data.filter((element) =>
                    element.name
                      .toUpperCase()
                      .includes(e.target.value.toUpperCase())
                  )
                );
              }}
            />
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>All</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Male</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="cards">
          {/* asdas */}
          {word
            ? search.map((elem) => {
                return (
                  <Card key={uuidv4()} sx={{ width: 250, height: 400 }}>
                    <CardActionArea>
                      <CardMedia
                        sx={{ width: 250, height: 240 }}
                        component="img"
                        image={elem.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {elem.isDead ? (
                            <p style={{ color: "red" }}>{elem.name}</p>
                          ) : (
                            <p style={{ color: "black" }}>{elem.name}</p>
                          )}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {2024 - elem.birth}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {elem.genre}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          border: "none",
                        }}
                        onClick={() => {
                          axios
                            .delete(`http://localhost:5000/users/${elem.id}`)
                            .then((res: Response) => {
                              console.log(res.data);
                            });
                          setData(
                            data.filter((element) => element.id != elem.id)
                          );
                        }}
                        variant="outlined"
                        color="error"
                      >
                        Delete
                      </Button>
                      <Button
                        style={{ backgroundColor: "blue", color: "white" }}
                      >
                        Detail
                      </Button>
                    </CardActions>
                  </Card>
                );
              })
            : data.map((elem: Data) => {
                return (
                  <Card key={uuidv4()} sx={{ width: 250, height: 400 }}>
                    <CardActionArea>
                      <CardMedia
                        sx={{ width: 250, height: 240 }}
                        component="img"
                        image={elem.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {elem.isDead ? (
                            <p style={{ color: "red" }}>{elem.name}</p>
                          ) : (
                            <p style={{ color: "black" }}>{elem.name}</p>
                          )}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {2024 - elem.birth}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {elem.genre}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          border: "none",
                        }}
                        onClick={() => {
                          axios
                            .delete(`http://localhost:5000/users/${elem.id}`)
                            .then((res: Response) => {
                              //   console.log(res.data);
                            });
                          setData(
                            data.filter((element) => element.id != elem.id)
                          );
                        }}
                        variant="outlined"
                        color="error"
                      >
                        Delete
                      </Button>
                      <Button
                        style={{ backgroundColor: "blue", color: "white" }}
                      >
                        Detail
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Authors;
