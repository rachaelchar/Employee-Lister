import React, { useEffect, useState } from 'react';
import RandomUser from '../../utils/RandomUser';
import Table from "../Table";

export default function Search(props) {
  // Populate the table with a list of 20 employees when the page loads
  const [employees, setEmployees] = useState([]);

  const formatDate = (dob) => {
    dob = dob.split("T")[0];
    dob = dob.split("-");
    let year = dob[0];
    let month = dob[1];
    let day = dob[2];
    
    return `${month}/${day}/${year}`;
  }

  useEffect(() => {

    RandomUser.getAllEmployees()
      .then((res) => {
        // console.log(res.data.results);
        let employeesArray = [];

        res.data.results.forEach(employee => {
          const picture = employee.picture.thumbnail;
          const fullName = `${employee.name.first} ${employee.name.last}`;
          const phone = employee.phone;
          const email = employee.email;
          const dob = formatDate(employee.dob.date);
    
          let employeeObj = {
            picture: picture,
            name: fullName,
            phone: phone,
            email: email,
            dob: dob
          };

          employeesArray.push(employeeObj);
        
        });

        setEmployees(employeesArray);
      });

  }, []);

  return (
    <div className="container p-4">
      {console.log("JSX employees", employees)}
      <div className="col-md-4 offset-4">
        <form>
          <input></input>
          <button>
            Search
            </button>
        </form>
      </div>
    <Table 
    employees={employees}
    />
    </div>
  );
}
