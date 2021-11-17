import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { edit } from "../../JS/actions/offre";
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
const EditOffre = ({ history }) => {
  const classes = useStyles();

  const [ad, setAd] = useState({});

  const OneOffre = useSelector((state) => state.offreReducer.OneOffre);

  useEffect(() => {
    setAd(OneOffre);
  }, [OneOffre]);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(edit(ad._id, ad));
  };
  const handleChange = (e) => {
    setAd({ ...ad, [e.target.name]: e.target.value });
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
            modifier votre annonce
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Grid container spacing={2}>
              <label>Titre</label>
              <Grid item xs={12}>
                <TextField
                  autoComplete="titre"
                  name="titre"
                  variant="outlined"
                  required
                  fullWidth
                  id="titre"
                  value={ad.titre}
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <label>Nom de l'entreprise</label>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nom_entreprise"
                  name="nom_entreprise"
                  value={ad.nom_entreprise}
                  autoComplete="nent"
                  onChange={handleChange}
                />
              </Grid>
              <label>Adresse</label>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="adresse"
                  name="adresse"
                  value={ad.adresse}
                  autoComplete="adresse"
                  onChange={handleChange}
                />
              </Grid>
              <label>Poste</label>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="poste"
                  id="poste"
                  value={ad.poste}
                  autoComplete="poste"
                  onChange={handleChange}
                />
              </Grid>
              <label>Domaine</label>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="domaine"
                  id="domaine"
                  value={ad.domaine}
                  autoComplete="domaine"
                  onChange={handleChange}
                />
              </Grid>
              <label>Email professionnel</label>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="email"
                  id="email"
                  value={ad.email}
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <label>Description</label>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="description"
                  id="description"
                  value={ad.description}
                  autoComplete="description"
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
                history.push("/profilent");
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

export default EditOffre;
