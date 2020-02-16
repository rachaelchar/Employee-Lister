import React from 'react';
import TableHeader from '../TableHeader';

// This component includes TableHeader and TableRows components, so only Table will be included in App.js

export default function Table() {

  return(
    <div className="col mt-4">
      <table className="table table-striped"> 
        <TableHeader />
      </table>
    </div>
  );
}