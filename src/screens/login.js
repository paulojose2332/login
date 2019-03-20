import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
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
});


class Login extends React.Component {
  state = { email: '', senha: '' };


  onClick = event => {
    fetch('http://173.249.17.248:8078/Token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "username": this.state.email,
        "password": this.state.senha
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)

        fetch("http://173.249.17.248:8078/user/me", {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${json.model.token}`
          }
        })
          .then(res => res.json())
          .then(json => {
            console.log(json)
          })
      })
  };

  render() {


    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircle style={{ fontSize: 40 }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="password">Senha</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="password" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} />
            </FormControl>
            <Link to="/recover">
              <div style={{ fontSize: 12 }}>Esqueci minha senha!</div>
            </Link>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.onClick}
            >
              Login
            </Button>

            <Link to="cadastro">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}

              >
                Cadastro
            </Button>
            </Link>
          </form>
        </Paper>
      </main>
    );

  };
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);