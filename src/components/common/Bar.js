import React from 'react';
import '../../styles/stylesheets/Bar.css';
import { Links, Button } from './';

function Bar(props) {
  return (
    <div className='bar'>
      <div className='header'>
        <h3>navigation</h3>
      </div>
      <div className='divider'/>
      <div className='parent'>
        <div className='links'>
          <Links />
        </div>
        <div className='button'>
          <Button click={props.click}/>
        </div>
      </div>
    </div>
  );
}

export { Bar };
