import React from 'react';
import TableRow from '../TableRow';

export default function TableHeader() {

  return(
    <thead>
      <tr>
        <th scope="col-md-1">Photo</th>
        <th scope="col-md-3">Name</th>
        <th scope="col-md-3">Phone</th>
        <th scope="col-md-3">Email</th>
        <th scope="col-md-2">DOB</th>
      </tr>
      <TableRow />
    </thead>
  );
}