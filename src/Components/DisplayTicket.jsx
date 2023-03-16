import { Card, CardContent, Grid, Typography, Stack, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
const DisplayTicket = () => {
  const final = useSelector((state) => state.final.value);
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    <>
      <Grid
        container
        sx={{
          gap: 2,
        }}
      >
        <Grid items xs={12} md={5}>
          {final && (
            <>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "yellow",
                  paddingY: "10px",
                }}
              >
                {final.age >= 18
                  ? "Dear, Ladies and Gentlemen"
                  : "Dear, Children"}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  paddingY: "10px",
                }}
              >
                {final.age >= 18 ? (
                  <>
                    The User can only book reserved parking by completing the
                    booking form for the desired parking product through the
                    website of Quick Parking or through the website of a third
                    party against the mentioned rate. A User is entitled to park
                    at the Parking Facility that is mentioned on the reservation
                    and not at any other location.
                  </>
                ) : (
                  <>
                    Always play safe by being careful and showing courtesy. 2.
                    Never run around or push and pull others while near
                    playground equipment. Keep your hands and feet to yourself.
                    Physical contact and verbal abuse mean words are not
                    permitted. 3. Don’t go too close to the front or rear of
                    moving equipment; instead, walk out around it. 4. Wear
                    proper clothing. Make sure your shoes are tied and never
                    wear clothes that have drawstrings. Necklaces, scarves,
                    drawstrings and very loose clothes could get tangled. 5.
                    When you get off equipment make sure there isn’t anyone in
                    the way. If you jump, always bend your knees slightly and
                    land on two feet.
                  </>
                )}
              </Typography>
            </>
          )}
        </Grid>
        <Grid items xs={12} md={5}>
          {final && (
            <>
              <Card
                maxWidth="100%"
                sx={{
                  height: "250px",

                  borderRadius: "15%",
                  boxShadow: "2px 2px 2px 2px purple",
                }}
              >
                <CardContent>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "red",
                        fontStyle: "revert-layer",
                      }}
                    >
                      Dexter Park
                    </Typography>
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "17px",
                      }}
                    >
                      {date}/{month}/{year}
                    </Box>
                  </Stack>

                  <Typography
                    variant="h6"
                    sx={{
                      paddingY: "12px",
                      fontSize: "19px",
                      color: "pink",
                      textAlign: "center",
                    }}
                  >
                    Personal Details
                  </Typography>

                  <Stack
                    direction="column"
                    alignItems="center"
                    sx={{
                      fontSize: "18px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    <Box
                      component="body1"
                      sx={{
                        marginBottom: "5px",
                      }}
                    >
                      Name: {final.userName}
                    </Box>
                    <Box
                      component="body1"
                      sx={{
                        marginBottom: "5px",
                      }}
                    >
                      Age: {final.age}
                    </Box>
                    <Box
                      component="body1"
                      sx={{
                        marginBottom: "5px",
                      }}
                    >
                      Location: {final.Place}
                    </Box>
                    <Box
                      component="body1"
                      sx={{
                        marginBottom: "5px",
                      }}
                    >
                      Category:
                      {final.age >= 18 ? "Adult Ticket" : "Child Ticket"}
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default DisplayTicket;
