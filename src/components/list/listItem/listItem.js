import React from 'react';
import c from './ListItem.module.scss';

const listItem = (props) => {
  return ( 
    <li 
      className={c.ListItem}
      onClick={props.itemClick}>
      {props.text}
    </li> 
  );
}
 
export default listItem;