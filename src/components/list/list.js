import React from 'react';
import ListItem from './ListItem/ListItem';

const list = (props) => {
  const lis = props.list.map((li, i) => {
    return <ListItem 
      key={li} 
      text={li}
      itemClick={() => props.itemClick(i)} />
  });

  return ( 
    <ul>
      {lis}
    </ul>
  );
}
 
export default list;