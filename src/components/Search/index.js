import React, { useEffect, useState } from 'react';
import RandomUser from '../../utils/RandomUser';
import Table from "../Table";
import './style.css';


export default function Search() {
  // Populate the table with a list of 20 employees when the page loads/Keeps the array of employees you had before modifying the search so you don't lose employees
  const [employees, setEmployees] = useState([]);
  // Used to make copies of original list when modified
  const [employeeList, setEmployeeList] = useState([]);
  const [sortState, setSortState] = useState(false);
  
  const handleInputChange = (event) => {
    console.log(event.target.value);
    let search = event.target.value;

    // use object destructuring to pull out the name from the employee
    const searchedEmployee = employees.filter(({ name }) => {
      // "includes" automatically evaluates either to True or False
      return name.includes(search);
    })

    setEmployeeList(searchedEmployee);
  }

  // Modify the dob to be a more readable format
  const formatDate = (dob) => {
    dob = dob.split("T")[0];
    dob = dob.split("-");
    let year = dob[0];
    let month = dob[1];
    let day = dob[2];
    
    return `${month}/${day}/${year}`;
  }

  // Since the employees array is full of objects, use a compare function for sorting by just names
  // Sort A-Z
  const compareAZ = (a, b) => {
    const nameA = a.name;
    const nameB = b.name;
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }
  // Sort Z-A
  const compareZA = (b, a) => {
    const nameA = a.name;
    const nameB = b.name;
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }
  

  // Click handler for sort icon
  const clickSortIcon = (event) => {
    // if statement allows user to click sort icon to toggle between A-Z & Z-A sort
    if (!sortState){
      // Make a copy of our current employee array to perform sort method on
      const sortedEmployees = [...employees].sort(compareAZ);
      console.log("sorted employees:", sortedEmployees);

      setEmployeeList(sortedEmployees);
      setSortState(true);
    } else if (sortState){
      const sortedEmployees = [...employees].sort(compareZA);
      console.log("sorted employees:", sortedEmployees);

      setEmployeeList(sortedEmployees);
      setSortState(false);  
    }
  }
  

  useEffect(() => {

    RandomUser.getAllEmployees()
      .then((res) => {
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
        setEmployeeList(employeesArray);
      });

  }, []);

  return (
    <div className="container p-4">
      <div className="form-div">
        <form className="mt-4">
          <input
          onChange={handleInputChange}
          ></input>
          <button className="btn btn-outline-secondary">
            Search
            </button>
        </form>
      </div>
    <Table 
    employees={employeeList} 
    clickSortIcon={clickSortIcon}
    />
    </div>
  );
}
