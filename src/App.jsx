import React, { useState } from 'react';
import './App.css';

function App() {
  const [employees] = useState([
    {
      empId: 'EMP001',
      name: 'Abhiram Chilaka',
      department: 'Engineering',
      profilePic: 'https://reqres.in/img/faces/1-image.jpg',
    },
    {
      empId: 'EMP002',
      name: 'Ravi Kumar',
      department: 'HR',
      profilePic: 'https://reqres.in/img/faces/2-image.jpg',
    },
    {
      empId: 'EMP003',
      name: 'Priya Sharma',
      department: 'Finance',
      profilePic: 'https://reqres.in/img/faces/3-image.jpg',
    },
    {
      empId: 'EMP004',
      name: 'John Doe',
      department: 'Marketing',
      profilePic: 'https://reqres.in/img/faces/4-image.jpg',
    },
    {
      empId: 'EMP005',
      name: 'Ayesha Khan',
      department: 'Design',
      profilePic: 'https://reqres.in/img/faces/5-image.jpg',
    },
  ]);

  return (
    <div className="container">
      <h1>Employee Table</h1>
      <table>
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Emp ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.empId}>
              <td>
                <img src={emp.profilePic} alt={emp.name} width="50" height="50" />
              </td>
              <td>{emp.empId}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
