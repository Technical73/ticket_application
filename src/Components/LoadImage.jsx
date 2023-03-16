import { Card, CardMedia, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChange } from "../Features/ImageReducer";
import Data from "../Utility/Data";

const LoadImage = () => {
  const list = useSelector((state) => state.list.value);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * Data.length);
      const randomImage = Data[randomIndex];
      dispatch(addChange(randomImage));
    }, 4000);
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <>
      {isMatch ? null : (
        <>
          <Card>
            <CardMedia
              component="img"
              height="280"
              image={list.imgURL}
              alt={list.imgName}
            ></CardMedia>
          </Card>
        </>
      )}
    </>
  );
};

export default LoadImage;
