import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        <AppBar title="My AppBar" />
      </MuiThemeProvider>
    );
  }
}

export default Main;
