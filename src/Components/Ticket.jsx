import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../Features/UserReducer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { addObj, RemoveData } from "../Features/FinalCheck";
import DisplayTicket from "./DisplayTicket";

const Ticket = () => {
  const user = useSelector((state) => state.user.value);

  const dispatch = useDispatch();

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{
            maxWidth: 650,
          }}
        >
          {user.length > 0 && (
            <TableHead>
              <TableRow>
                <TableCell align="left">S.no</TableCell>
                <TableCell align="left">UserName</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Age</TableCell>
                <TableCell align="left">Ticket Status</TableCell>
                <TableCell align="left">Remove</TableCell>
                <TableCell align="left">Tickets</TableCell>
              </TableRow>
            </TableHead>
          )}

          <TableBody>
            {user.map((items) => {
              return (
                <TableRow key={items.id}>
                  <TableCell align="left">{items.id}</TableCell>
                  <TableCell align="left">{items.userName}</TableCell>
                  <TableCell align="left">{items.Place}</TableCell>
                  <TableCell align="left">{items.age}</TableCell>
                  <TableCell align="left">
                    {items.age >= 18 ? <>Adult Ticket</> : <>Child Ticket</>}
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => {
                        dispatch(deleteUser({ id: items.id }));
                        dispatch(RemoveData({ id: items.id }));
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => {
                        dispatch(addObj({ items: items }));
                      }}
                    >
                      Get Tickets
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <DisplayTicket />
    </>
  );
};

export default Ticket;
