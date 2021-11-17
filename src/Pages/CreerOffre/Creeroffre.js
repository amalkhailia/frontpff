import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CreerOffre, edit } from "../../JS/actions/offre";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Creeroffre = ({ history }) => {
  const classes = useStyles();
  const [offre, setOffre] = useState();

  const dispatch = useDispatch();
  const handleOffre = (e) => {
    setOffre({ ...offre, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Votre annonce
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="titre"
                  name="titre"
                  variant="outlined"
                  required
                  fullWidth
                  id="titre"
                  label="titre"
                  autoFocus
                  onChange={handleOffre}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nom_entreprise"
                  label="Nom de l'entreprise"
                  name="nom_entreprise"
                  autoComplete="nent"
                  onChange={handleOffre}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="adresse"
                  label="Adresse"
                  name="adresse"
                  autoComplete="adresse"
                  onChange={handleOffre}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="poste"
                  label="Poste"
                  id="poste"
                  autoComplete="poste"
                  onChange={handleOffre}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="domaine"
                  label="Domaine"
                  id="domaine"
                  autoComplete="domaine"
                  onChange={handleOffre}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="email"
                  label="Email professionnel"
                  id="email"
                  autoComplete="email"
                  onChange={handleOffre}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  id="description"
                  autoComplete="description"
                  onChange={handleOffre}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => dispatch(CreerOffre(offre, history))}
            >
              Publier une annonce
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Creeroffre;
