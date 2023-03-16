import { Grid, Typography } from "@mui/material";
import React from "react";

const Registration = () => {
  return (
    <>
      <Grid
        container
        sx={{
          gap: 4,
        }}
      >
        <Grid items xs={12} md={12}>
          <Typography
            variant="span"
            component="h4"
            sx={{
              textAlign: "center",
              fontSize: "27px",
              fontWeight: "thin",
              fontStyle: "Inconsolata",
            }}
          >
            Terms and Conditions for the safety Ride
          </Typography>
        </Grid>
        <Grid xs={12} md={12}>
          <Typography variant="p">
            If the Event is cancelled in whole, or in part, due to a Force
            Majeure Event as defined below, You will not be entitled to a
            refund. Notwithstanding the foregoing, the Company may issue, at the
            Company's sole and absolute discretion, a partial or full refund of
            Your Ticket, by accounting for, among other considerations, the
            extent and nature of the cancellation. A "Force Majeure Event" shall
            mean an act of God, act or threat of terrorism, earthquake,
            wildfire, flood, tsunami, strike or other labor condition or
            dispute, an order or injunction of any court or administrative body
            or any other act of public authority local, state and/or federal,
            riot or civil commotion
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Registration;
