import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Footer from "./footer";
class Mainpage extends Component {
  state = {};
  render() {
    return (
      <div className="mainpage">
        <div>
          <h2>
            {" "}
            <i class="fa fa-github" aria-hidden="true"></i> &nbsp; GIT BATTLE
          </h2>
        </div>
        <InputLabel id="input-with-icon-grid">First User </InputLabel>
        <Input
          id="input-with-icon-grid"
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        ></Input>
        <br /> <br />
        <i class="fa fa-bolt" aria-hidden="true"></i>
        <br /> <br />
        <InputLabel id="input-with-icon-grid">Second User </InputLabel>
        <Input
          id="input-with-icon-grid"
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        ></Input>
        <br /> <br />
        <Button variant="contained" size="large" color="primary">
          Battle
        </Button>
        <br /> <br /> <br /> <br />
        <Footer />
      </div>
    );
  }
}

export default Mainpage;
