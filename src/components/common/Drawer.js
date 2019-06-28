import React from 'react';
import '../../styles/stylesheets/Drawer.css';
import { Links } from './';

function Drawer(props) {
  let className;

  if (props.show) {
    className = 'drawer open'
  } else {
    className = 'drawer'
  }

  return (
    <div className={className}>
      <Links />
    </div>
  );
}

export { Drawer };
