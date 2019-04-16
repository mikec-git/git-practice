import React from 'react';

const listItem = (props) => {
  return ( <li onClick={props.itemClick}>{props.text}</li> );
}
 
export default listItem;