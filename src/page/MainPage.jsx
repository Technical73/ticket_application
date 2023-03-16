import { Container } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Ticket } from "../Components";
import Home from "../Components/Home";
import LaComponent from "../LayoutComponent/LaComponent";

const MainPage = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LaComponent />}>
        <Route index element={<Home />} />
        <Route path="ticket" element={<Ticket />} />
      </Route>
    )
  );
  return (
    <>
      <Container
        maxWidth
        sx={{
          padding: "20px 0",
        }}
      >
        <Container>
          <RouterProvider router={router}></RouterProvider>
        </Container>
      </Container>
    </>
  );
};

export default MainPage;
