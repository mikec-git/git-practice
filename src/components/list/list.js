import React from 'react';
import ListItem from './listItem/listItem';

const list = (props) => {
  const lis = props.list.map(li => {
    return <ListItem text={li} />
  });

  return ( 
    <ul>
      {lis}
    </ul>
  );
}
 
export default list;