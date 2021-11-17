import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signinrec, videErrors } from "../../JS/actions/recruteur";
import Errors from "../../Components/Errors/Errors";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInRec = ({ history }) => {
  const classes = useStyles();
  const [recruteur, setRecruteur] = useState({});

  const dispatch = useDispatch();
  const errors = useSelector((state) => state.recReducer.errors);
  const handleChange = (e) => {
    setRecruteur({ ...recruteur, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
  }, []);

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <h4
          style={{
            marginTop: "5%",
            textAlign: "center",
            fontFamily: "fantasy",
            color: "black",
          }}
        >
          Authentifier en tant que recruteur
        </h4>
        <div style={{ marginTop: "5%" }}>
          {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
        </div>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => dispatch(signinrec(recruteur, history))}
            >
              Sign In
            </Button>
            <Grid item>
              <Link to="/signuprec">
                <a href="/signuprec">Don't have an account? Sign Up</a>
              </Link>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
};

export default SignInRec;
