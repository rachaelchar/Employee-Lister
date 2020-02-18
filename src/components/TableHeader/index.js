import React from 'react';
import SortIcon from '../SortIcon';


export default function TableHeader(props) {

  return(
    <thead>
      <tr>
        <th scope="col-md-1">Photo</th>
        <th scope="col-md-3">Name
        <SortIcon 
        clickSortIcon={props.clickSortIcon}
        />
        </th>
        <th scope="col-md-3">Phone</th>
        <th scope="col-md-3">Email</th>
        <th scope="col-md-2">DOB</th>
      </tr>
    </thead>
  );
}