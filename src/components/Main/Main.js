import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import { ExpenseTrackerContext } from "../../context/context";
const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Developed by Utkarsh Tiwari" />
        <CardContent>
          <Typography align="center" variant="h5">
            {`Current Expenditure is $ ${balance}`}
          </Typography>
          <Typography
            align="center"
            // variant="subtitle1"
            style={{ lineHeight: "1.5rem", marginTop: "20px" }}
          >
            <i>Keep track of your daily expenses..</i>
          </Typography>
          {/* FORM */}
          <Form />
        </CardContent>
        <CardContent className={classes.cartContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* List */}
              <List />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Main;
