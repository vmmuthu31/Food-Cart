import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import React from "react";
import "./login.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

function Logo() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <FastfoodIcon className="mx-2" />
        <Navbar.Brand href="#" className="mx-2">
          Food Cart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form action="./" className="d-flex justify-content-center">
            <AccountCircleIcon className="mt-3 text-primary " />
            <p
              aria-describedby={id}
              className="mt-3 mx-3 text-success"
              onClick={handleClick}
            >
              Mr. Username
            </p>

            <Popper id={id} open={open} anchorEl={anchorEl}>
              <div className={classes.paper}>
                <p>User Profile</p>
                <p>Change Password</p>
              </div>
            </Popper>

            <ShoppingCartIcon className="mt-3" />
            <HelpCenterIcon className="mt-3 mx-3" />
            <Button
              variant="danger"
              type="submit"
              className="btn btn-danger m-2 btn-block mx-3"
            >
              Logout
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Logo;
