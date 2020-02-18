import React from 'react';
import './style.css';

export default function PageHeader() {
  return (
    <div>
      <div className="row">
        <div className="page-header text-center text-light bg-dark">
          <h1 className="align-middle">Employee Directory</h1>
        </div>
      </div>
    </div>
  );
}