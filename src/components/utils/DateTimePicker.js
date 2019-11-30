import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";

const styles = theme => ({
  input: {
    backgroudColor: "colore",
    color: "white"
  }
});
const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#000000",
      dark: "#ffffff"
    },
    secondary: {
      main: "#ffffff"
    }
  }
});
const MaterialUIPickers = ({ classes, ...rest }) => {
  const currentTime = Date.now();
  const [selectedDate, setSelectedDate] = React.useState(new Date(currentTime));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            //variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-dialog"
            label=""
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
            style={{
              //backgroundColor: "black",
              // color: "white",
              maxWidth: "140px"
              //left: "4px",
              //position: "absolute"
            }}
            InputProps={{ className: classes.input }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label=""
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
            style={{
              backgroundColor: "black",
              color: "white",
              maxWidth: "130px"
            }}
            InputProps={{ className: classes.input }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default withStyles(styles)(MaterialUIPickers);
