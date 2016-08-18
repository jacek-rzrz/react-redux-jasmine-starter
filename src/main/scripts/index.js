import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'app/Router';
import 'main.less';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Router />, document.getElementById('app'));
});
