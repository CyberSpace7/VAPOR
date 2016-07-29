import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HelloWorld from './HelloWorld';
import Main from './muitest';
injectTapEventPlugin();

ReactDOM.render(<HelloWorld/>, document.getElementById('HelloWorld'));
ReactDOM.render(<Main/>, document.getElementById('muitest'));
