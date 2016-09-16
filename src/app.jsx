import React from 'react';
import { render } from 'react-dom';
import Template from './template.jsx';

require('../styles/main.styl');

render(<Template />, document.getElementById('content'));
