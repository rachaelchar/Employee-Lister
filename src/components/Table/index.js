import React from 'react';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';

// This component includes TableHeader and TableRows components, so only Table will be included in App.js

export default function Table(props) {

  return (
    <div className="col mt-4">
      <table className="table table-striped">
        <TableHeader />
        {/* second parameter gives access to unique key */}
        {props.employees.map((employee, index) => (
          <TableRow
          picture={employee.picture}
          name={employee.name}
          phone={employee.phone}
          email={employee.email}
          dob={employee.dob}
          key={index}
          />
        ))}
      </table>
    </div>
  );
}