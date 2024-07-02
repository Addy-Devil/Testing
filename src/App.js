import { Grid } from "@mui/material";
import React from "react";
import CustomButton from "./components/CustomButton/CustomButton";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <CustomButton content={"Button1"} />
      </Grid>
      {/* This is a button*/}
      <Grid item xs={12} sm={6} md={3}>
        <CustomButton content={"Button2"} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CustomButton content={"Button3"} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CustomButton content={"Button4"} />
      </Grid>
    </Grid>
  );
}

export default App;
