import React from "react";
import makeStyles from '@material-ui/core/styles/makeStyles';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
    borderBottom: `4px solid ${theme.border.title.main}`
  },
  containerTitle: {
    flexGrow: 1,
    padding: 10,
    '& h6' : {
      fontSize: 10,
      opacity: 0.8,
      fontWeight: 100,
      fontStyle: 'italic',
      lineHeight: 0.5
    }
  }
}));


const Title = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.containerTitle}>
            <Typography variant="h5">Todo - List</Typography>
            <Typography variant="subtitle1"> Space created to give people value</ Typography>
          </div>
          <AssignmentTurnedInIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Title;
