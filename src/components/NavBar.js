import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    marginLeft: 10,
    flexGrow: 1
  },
  iconPosition: {
    marginBottom: 4
  },
  myFab: {
    margin: theme.spacing(1)
  }
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <a href="#">
            <Fab
              color="primary"
              size="small"
              aria-label="home"
              className={classes.myFab}
            >
              <HomeIcon
                className={classes.iconPosition}
                style={{ fontSize: 23 }}
              />
            </Fab>
          </a>
          <Typography variant="h6" className={classes.title}>
            Home Guide
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
