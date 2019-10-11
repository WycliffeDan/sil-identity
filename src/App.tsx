import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import logo from './sil-logo.svg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1),
  },
}));

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Button id='home' color='inherit'>SIL Identity</Button>
          </Typography>
          <Button id='login' color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <img src={logo} className='App-logo' alt='logo' />
    </div>
  );
}
export default App;
