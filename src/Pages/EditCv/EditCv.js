import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import { editOne } from "../../JS/actions/cv";

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

const EditCv = ({ history }) => {
  const classes = useStyles();

  const [cv, setCv] = useState({});

  const OneCv = useSelector((state) => state.cvReducer.OneCv);

  useEffect(() => {
    setCv(OneCv);
  }, [OneCv]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCv({ ...cv, [e.target.name]: e.target.value });
  };
  const handleEdit = () => {
    dispatch(editOne(cv._id, cv));
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            modifier votre cv
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
                <label>N° CIN</label>
                <TextField
                  autoComplete="cin"
                  name="cin"
                  variant="outlined"
                  required
                  fullWidth
                  id="cin"
                  value={cv.cin}
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <label>Tel</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="tel"
                  name="tel"
                  value={cv.tel}
                  autoComplete="tel"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <label>Pays</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="pays"
                  name="pays"
                  value={cv.pays}
                  autoComplete="pays"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <label>Région</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="region"
                  name="region"
                  value={cv.region}
                  autoComplete="region"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <label>Ville</label>

                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="ville"
                  name="ville"
                  value={cv.ville}
                  autoComplete="ville"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <label>Code Postal</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="code_postal"
                  name="code_postal"
                  value={cv.code_postal}
                  autoComplete="code_postal"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <label>Nom du diplome</label>

                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nom_diplome"
                  name="nom_diplome"
                  value={cv.nom_diplome}
                  autoComplete="nom_diplome"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <label>Nom de l'école</label>

                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nom_ecole"
                  name="nom_ecole"
                  autoComplete="nom_ecole"
                  value={cv.nom_ecole}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                handleEdit();
                history.push("/myprofile");
              }}
            >
              Enregistrer
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default EditCv;
