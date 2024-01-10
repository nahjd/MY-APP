"use client";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Navbar from "./../../components/Navbar";

export default function Author() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => setData(res.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  console.log(data);

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:8000/users/${userId}`)
      .then((res) => {
        const updatedData = data.filter((elem) => elem.id !== userId);
        setData(updatedData);
      })
      .catch((error) => console.error("Error deleting user: ", error));
  };

  return (
    <>
      <Navbar />
      {data &&
        data.map((elem) => (
          <Card
            key={elem.name}
            sx={{ flexGrow: 1, maxWidth: 345, marginTop: "15px" }}
          >
            <CardMedia
              component="img"
              sx={{ height: 240 }}
              image={elem.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {elem.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {elem.Genre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {elem.Gender}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  width: "60px",
                  borderRadius: "8px",
                }}
                size="small"
                onClick={() => handleDelete(elem.id)}
              >
                Delete
              </Button>
              <Button
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  border: "none",
                  width: "60px",
                  borderRadius: "8px",
                }}
                size="small"
              >
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
    </>
  );
}
