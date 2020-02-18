import React from 'react';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';

export default function Table(props) {

  return (
    <div className="col mt-4">
      <table className="table table-striped">
        <TableHeader
          clickSortIcon={props.clickSortIcon}
        />
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