import React from "react";
import { Box, TextField, InputLabel, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { fetchData, getBMI } from "../utils/fetchData";

const BodyData = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi ,setBMI]  = useState('')

  const handleCalculate = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
        "X-RapidAPI-Key": "c03b2b8081mshc3d6c7fca60178dp1f77f3jsnc6e0695beef9",
      },
      params: { age: age, weight: weight, height: height },
    };
    const BMI = await fetch(
      "https://fitness-calculator.p.rapidapi.com/bmi",
      options
    );
    console.log(BMI);
    setBMI(BMI)
  };
  return (
    <>
      <Stack
        sx={{
          mt: { lg: "96px", xs: "60px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ mb: "20px" }}>
          Calculate your Body Mass Index
        </Typography>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Box>
            <InputLabel sx={{ color: "black", mb: "4px" }}>
              Enter Age
            </InputLabel>
            <TextField
              sx={{
                input: {
                  fontWeight: "700",
                  border: "none",
                  borderRadius: "4px",
                },
                mr: "6px",
              }}
              id="outlined-basic"
              label="Age"
              variant="outlined"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Box>
          <Box>
            <InputLabel sx={{ color: "black", mb: "4px" }}>
              Enter Weight
            </InputLabel>
            <TextField
              sx={{
                input: {
                  fontWeight: "700",
                  border: "none",
                  borderRadius: "4px",
                },
                mr: "6px",
              }}
              id="outlined-basic"
              label="Weight"
              variant="outlined"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Box>
          <Box>
            <InputLabel sx={{ color: "black", mb: "4px" }}>
              Enter Height
            </InputLabel>
            <TextField
              sx={{
                input: {
                  fontWeight: "700",
                  border: "none",
                  borderRadius: "4px",
                },
                mr: "6px",
              }}
              id="outlined-basic"
              label="Height"
              variant="outlined"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Box>
        </Stack>
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#0000FF",
            color: "#fff",
            textTransform: "none",
            width: "180px",
            height: "56px",
            fontSize: { lg: "20px", xs: "14px" },
            mt: "10px",
          }}
          onClick={handleCalculate}
        >
          Calculate
        </Button>
      </Stack>
      <Typography>{bmi? bmi :''}</Typography>
    </>
  );
};

export default BodyData;
