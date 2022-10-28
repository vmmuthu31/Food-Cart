import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "80vh",
    height: 100,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

function Header() {
  const classes = useStyles();
  const [anchorEl1, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [anchorEl5, setAnchorEl5] = React.useState(null);
  const handleClick1 = (event) => {
    setAnchorEl(anchorEl1 ? null : event.currentTarget);
    setAnchorEl2(false);
    setAnchorEl3(false);
    setAnchorEl4(false);
    setAnchorEl5(false);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
    setAnchorEl(false);
    setAnchorEl3(false);
    setAnchorEl4(false);
    setAnchorEl5(false);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(anchorEl3 ? null : event.currentTarget);
    setAnchorEl2(false);
    setAnchorEl(false);
    setAnchorEl4(false);
    setAnchorEl5(false);
  };
  const handleClick4 = (event) => {
    setAnchorEl4(anchorEl4 ? null : event.currentTarget);
    setAnchorEl2(false);
    setAnchorEl3(false);
    setAnchorEl(false);
    setAnchorEl5(false);
  };
  const handleClick5 = (event) => {
    setAnchorEl5(anchorEl5 ? null : event.currentTarget);
    setAnchorEl2(false);
    setAnchorEl3(false);
    setAnchorEl4(false);
    setAnchorEl(false);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const open4 = Boolean(anchorEl4);
  const open5 = Boolean(anchorEl5);
  const home = open1 ? "simple-popper" : undefined;
  const restaurants = open2 ? "simple-popper" : undefined;
  const orders = open3 ? "simple-popper" : undefined;
  const support = open4 ? "simple-popper" : undefined;
  const help = open5 ? "simple-popper" : undefined;

  return (
    <div className="d-flex bg-primary">
      <div className="">
        <button
          className="bg-primary text-light border-0"
          aria-describedby={home}
          type="button"
          onClick={handleClick1}
        >
          Home <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={restaurants}
          type="button"
          onClick={handleClick2}
        >
          Orders <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={orders}
          type="button"
          onClick={handleClick3}
        >
          Restaurants <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={support}
          type="button"
          onClick={handleClick4}
        >
          Support <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={help}
          type="button"
          onClick={handleClick5}
        >
          Help <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={home}
          type="button"
          onClick={handleClick1}
        >
          Home <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={restaurants}
          type="button"
          onClick={handleClick2}
        >
          Orders <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={orders}
          type="button"
          onClick={handleClick3}
        >
          Restaurants <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={support}
          type="button"
          onClick={handleClick4}
        >
          Support <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={help}
          type="button"
          onClick={handleClick5}
        >
          Help <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={home}
          type="button"
          onClick={handleClick1}
        >
          Home <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={restaurants}
          type="button"
          onClick={handleClick2}
        >
          Orders <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={orders}
          type="button"
          onClick={handleClick3}
        >
          Restaurants <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={support}
          type="button"
          onClick={handleClick4}
        >
          Support <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={help}
          type="button"
          onClick={handleClick5}
        >
          Help <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={home}
          type="button"
          onClick={handleClick1}
        >
          Home <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={restaurants}
          type="button"
          onClick={handleClick2}
        >
          Orders <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={orders}
          type="button"
          onClick={handleClick3}
        >
          Restaurants <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={support}
          type="button"
          onClick={handleClick4}
        >
          Support <ArrowDropDownIcon />
        </button>
        <button
          className="bg-primary text-light border-0"
          aria-describedby={help}
          type="button"
          onClick={handleClick5}
        >
          Help <ArrowDropDownIcon />
        </button>

        <Popper id={home} open={open1} anchorEl={anchorEl1}>
          <div className={classes.paper}>
            <ul>
              <li>Restaurant</li>
              <li> Shop</li>
              <li> Orders</li>
            </ul>
          </div>
        </Popper>
        <Popper id={restaurants} open={open2} anchorEl={anchorEl2}>
          <div className={classes.paper}>
            <ul>
              <li>Perambur Srinivasa</li>
              <li> Sangeetha</li>
              <li> Veg Restaurant</li>
            </ul>
          </div>
        </Popper>
        <Popper id={orders} open={open3} anchorEl={anchorEl3}>
          <div className={classes.paper}>
            <ul>
              <li>Idli</li>
              <li> Vada </li>
              <li> Dosa</li>
            </ul>
          </div>
        </Popper>
        <Popper id={support} open={open4} anchorEl={anchorEl4}>
          <div className={classes.paper}>
            <ul>
              <li>Terms and conditions</li>
            </ul>
          </div>
        </Popper>
        <Popper id={help} open={open5} anchorEl={anchorEl5}>
          <div className={classes.paper}>
            <ul>
              <li>Customer Care</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
        </Popper>
      </div>
    </div>
  );
}

export default Header;
