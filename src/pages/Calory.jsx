import React from "react";
import {
  Box,
  TextField,
  InputLabel,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { fetchData, getBMI } from "../utils/fetchData";

const Calory = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [activitylevel, setActivityLevel] = useState("");
  const [calory, setCalory] = useState("");

  const handleCalculate = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
        "X-RapidAPI-Key": "c03b2b8081mshc3d6c7fca60178dp1f77f3jsnc6e0695beef9",
      },
      params: {
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        activitylevel: activitylevel,
      },
    };
    const calories = await fetch(
      "https://fitness-calculator.p.rapidapi.com/bmi",
      options
    );
    console.log(calories);
    setCalory(calories);
  };

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  console.log(activitylevel)
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
        <Typography sx={{ mb: "5px", fontWeight: "600", fontSize: "20px" }}>
          Knowing your daily calorie requirements is important to achieve your
          final goal
        </Typography>
        <Typography sx={{ mb: "10px", fontWeight: "600", fontSize: "17px" }}>
          You can calculate your daily calorie req. for 7 different goals
        </Typography>
        <Typography sx={{ mb: "20px", fontWeight: "400" }}>
          Calculate your Calorie requirements
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
          <Box>
            <InputLabel sx={{ color: "black", mb: "4px" , mr:'20px' }}>
              Enter Activity Level
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={activitylevel}
              label="Activity Level"
              onChange={(e) => setActivityLevel(e.target.value)}
            //   defaultOpen={true}
            defaultValue={true}
            >
              <MenuItem value={1}>Three times a week</MenuItem>
              <MenuItem value={4}>Four times a week</MenuItem>
              <MenuItem value={6}>Six times a week</MenuItem>
            </Select>
          </Box>
          <Box>
            <InputLabel sx={{ color: "black" }}>Select Gender</InputLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
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
      {/* <Typography>{calory ? calory : ""}</Typography> */}
    </>
  );
};

export default Calory;
