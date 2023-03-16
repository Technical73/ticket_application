import { Alert, Button, Grid, TextField } from "@mui/material";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Features/UserReducer";
import { submitted } from "../Features/CheckReducer";
import LoadImage from "./LoadImage";

const InForm = () => {
  const [user, setUser] = useState({
    id: null,
    userName: "",
    Place: "",
    age: "",
  });

  const para = useSelector((state) => state.user.value);
  const theCheck = useSelector((state) => state.check.value);
  const dispatch = useDispatch();

  const check = useRef(null);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: para.length + 1,
      userName: user.userName,
      Place: user.Place,
      age: user.age,
    };
    dispatch(addUser(newUser));

    check.current.focus();
    setUser({
      id: null,
      userName: "",
      Place: "",
      age: "",
    });
    dispatch(submitted());
    setTimeout(() => {
      dispatch(submitted(false));
    }, 3000);
  };
  const handleRemove = () => {
    setUser({
      id: null,
      userName: "",
      Place: "",
      age: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          sx={{
            padding: "20px 0",
            gap: 3,
          }}
        >
          <Grid item xs={12} md={5}>
            <TextField
              variant="outlined"
              label="UserName"
              type="text"
              name="userName"
              ref={check}
              value={user.userName}
              onChange={handleChange}
              sx={{
                width: "100%",
                marginBottom: "25px",
              }}
            ></TextField>
            <TextField
              variant="outlined"
              label="Place"
              type="text"
              ref={check}
              name="Place"
              value={user.Place}
              onChange={handleChange}
              sx={{
                width: "100%",
                marginBottom: "25px",
              }}
            ></TextField>
            <TextField
              variant="outlined"
              label="age"
              type="number"
              ref={check}
              name="age"
              value={user.age}
              onChange={handleChange}
              sx={{
                width: "100%",
                marginBottom: "25px",
              }}
            ></TextField>

            <Button
              type="submit"
              variant="contained"
              size="small"
              onClick={handleSubmit}
              sx={{
                marginRight: "10px",
              }}
            >
              Submit
            </Button>
            <Button variant="contained" size="small" onClick={handleRemove}>
              cancel
            </Button>
            {theCheck === true ? (
              <>
                <Alert
                  color="success"
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  You have Submitted Successfully..!
                </Alert>
              </>
            ) : null}
          </Grid>
          <Grid item xs={12} md={6}>
            <LoadImage />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default InForm;
