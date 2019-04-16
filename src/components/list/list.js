import React from 'react';
import ListItem from './ListItem/ListItem';

const list = (props) => {
  const lis = props.list.map(li => {
    return <ListItem key={li} text={li} />
  });

  return ( 
    <ul>
      {lis}
    </ul>
  );
}
 
export default list;