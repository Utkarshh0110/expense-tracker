import React, { useContext} from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
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
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
        <CardContent>
          <Typography align="center" variant="h5">
            {`Total balance is $ ${balance}`}
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            style={{ lineHeight: "1.5rem", marginTop: "20px" }}
          >
            {/* Try saying: Add income for $100 in Category Salary for Monday... */}
            Keep track of your daily expenses..
          </Typography>
          <Divider />
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