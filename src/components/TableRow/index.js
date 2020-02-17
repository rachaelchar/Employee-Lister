import React from 'react';

export default function TableRow(props) {

  return(
    <tr
    key={props.key}
    >
      <td>
        <img 
        src={props.picture} 
        alt={props.name} />
      </td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>
  );
}