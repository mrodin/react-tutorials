import React, { Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Success = () => {
  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title='Success' />
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions.</p>
      </Fragment>
    </MuiThemeProvider>
  )
}

export default Success;