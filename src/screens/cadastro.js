import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';


const styles = theme => ({

  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Cadastro extends React.Component {

  state = {
    gender: '',
    open: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PersonAdd style={{ fontSize: 40 }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
                </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="Nome">Nome</InputLabel>
              <Input id="nome" name="nome" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="sobrenome">Sobrenome</InputLabel>
              <Input name="sobrenome" type="sobrenome" id="sobrenome" />
            </FormControl>

            <FormControl className={classes.formControl} margin="normal" required fullWidth>
              <InputLabel htmlFor="demo-controlled-open-select">Genero</InputLabel>
              <Select
                fullWidth
                open={this.state.open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={this.state.gender}
                onChange={this.handleChange}
                inputProps={{
                  fullWidth: true,
                  name: 'gender',
                  id: 'demo-controlled-open-select',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Masculino</MenuItem>
                <MenuItem value={20}>Feminino</MenuItem>
                <MenuItem value={30}>Outro</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.container} noValidate margin="normal" required fullWidth>
              <TextField
                id="date"
                label="Data de nascimento"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="estado">Estado</InputLabel>
              <Input name="estado" type="estado" id="estado" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="cidade">Cidade</InputLabel>
              <Input name="cidade" type="cidade" id="cidade" />
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
                  </Button>
            <Link to="/">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Ja tenho conta
                    </Button>
            </Link>
          </form>
        </Paper>
      </main>
    );
  }
}

Cadastro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cadastro);