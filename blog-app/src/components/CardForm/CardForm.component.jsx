import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

function CardForm(props) {
  const classes = useStyles();
  const {
    item: { content, name, category, status },
  } = props;

  function onSubmit() {
    props.onClick();
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Edit Card
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Card Name" fullWidth value={name} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardCategory" label="Category" fullWidth value={category} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="status" label="Status" fullWidth value={status} />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="content" label="Content" fullWidth value={content} />
        </Grid>
        <Grid item xs={12} />
      </Grid>
      <Button variant="contained" color="primary" className={classes.button} onClick={onSubmit}>
        Submit
      </Button>
    </>
  );
}

export default CardForm;
