import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { MoreVert } from "@mui/icons-material"; // the three dot icons
// * On this page you need to use `material-ui` to create a button and a table. Let's do that part first. Import Button, Table, TableHead, TableBody, TableRow and TableCell from "@material-ui/core". You may also want to import "Container" to help with styling. Remember to look at the Material UI docs if you don't understand how this works.
// * Create a button with the text "Import". Make its variant contained and its color primary. Then create a table underneath it. The table should have three columns (Id, Make, Actions).
// * First `import { MoreVert } from '@material-ui/icons'` for the button and place the <MoreVert> component under the actions column in the table. We are going to expand our menu using its onClick method. Reference the code from the link above to figure out how to open/close the menu. Hint: Put the code for `<Menu>` outside of the table.

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { removemakes } from "../redux/actions";
// import Threedoticonmenu from "./Threedoticonmenu";

const Import = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null); //hook
  const [index, setIndex] = React.useState([]); //hook

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("handleClick");
  };

  const handleClose = () => {
    setAnchorEl(null);
    {
      //remove fetchmakes
      //delete items from makes (Results[index])
      //get index locally
      props.removemakes(index);
    }
  };

  return (
    <Container>
      {/* - Once all the above is done, create a simple `<h2>` that displays `COUNT: <NUM>` where NUM is `props.makes.length`. We want to always know how many rows we have. */}
      <h4>Count {props.makes.length}</h4>

      <Button onClick={props.fetchmakes} variant="contained">
        Import
      </Button>
      {/* <Threedoticonmenu/> */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Car </TableCell>
              <TableCell align="right">Make</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.makes.map((row, index) => (
              <TableRow
                key={row.MakeId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.MakeId}
                </TableCell>
                <TableCell align="right">{row.MakeName}</TableCell>
                <TableCell align="right">
                  {/* //if I want a button to click on instead of the three dot icon, use this */}
                  {/* <Button
                    onClick={() => props.removemakes(index)}
                    variant="contained"
                  >
                    Delete
                  </Button> */}

                  {/* three dot icon drop down menu for delete */}
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVert />
                    {/* this is where my three dots icons are at */}
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        <MenuItem
          onClick={(index) => {
            removemakes(index) && handleClose(); // here not only access the index, but also both handling "delete Make" after you click on it
            console.log(index);
            // e.prevent.default???
          }}
        >
          Delete
        </MenuItem>

        {/* <Button onClick={() => props.removemakes(index)} variant="contained">
          Delete
        </Button> */}
      </Menu>
    </Container>
  );
};

export default Import;
