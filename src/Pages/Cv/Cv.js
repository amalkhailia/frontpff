import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import { CreerCv } from "../../JS/actions/cv";

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

const Cv = ({ history }) => {
  const classes = useStyles();
  const [cv, setCv] = useState({});
  const dispatch = useDispatch();
  const handleCv = (e) => {
    setCv({ ...cv, [e.target.name]: e.target.value });
  };
  const user = useSelector((state) => state.cvReducer.cv);

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Créer votre cv
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
                  autoComplete="cin"
                  name="cin"
                  variant="outlined"
                  required
                  fullWidth
                  id="cin"
                  label="N° CIN"
                  autoFocus
                  onChange={handleCv}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="tel"
                  label="Tel"
                  name="tel"
                  autoComplete="tel"
                  onChange={handleCv}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="pays"
                  label="Pays"
                  name="pays"
                  autoComplete="pays"
                  onChange={handleCv}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="region"
                  label="Région"
                  name="region"
                  autoComplete="region"
                  onChange={handleCv}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="ville"
                  label="Ville"
                  name="ville"
                  autoComplete="ville"
                  onChange={handleCv}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="code_postal"
                  label="Code Postal"
                  name="code_postal"
                  autoComplete="code_postal"
                  onChange={handleCv}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nom_diplome"
                  label="Nom du diplome"
                  name="nom_diplome"
                  autoComplete="nom_diplome"
                  onChange={handleCv}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nom_ecole"
                  label="Nom de l'école"
                  name="nom_ecole"
                  autoComplete="nom_ecole"
                  onChange={handleCv}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => dispatch(CreerCv(cv, history))}
            >
              Enregistrer
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Cv;
