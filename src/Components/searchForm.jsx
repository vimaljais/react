import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "85vw",
      maxWidth: "400px",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  },
}));

export default function BasicTextFields(props) {
  const [queryString, setQueryString] = useState("");

  const classes = useStyles();
  const onSub = () => {
    props.onSubmit(queryString);
  };
  const onChangeText = (event) => {
    setQueryString(event.target.value);
  };
  return (
    <form
      style={{ display: "flex", justifyContent: "center" }}
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        onSub();
        e.preventDefault();
      }}
    >
      <TextField
        label="Search Images"
        id="searchBar"
        onChange={onChangeText}
        className={(classes.margin, classes.textField)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              {" "}
              <Button onClick={onSub}>Search</Button>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
