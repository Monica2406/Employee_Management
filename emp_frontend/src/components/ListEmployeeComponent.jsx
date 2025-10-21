import React from 'react'

const ListEmployeeComponent = () => {

    const sampleData = [
        {
            "id": 1,
            "firstName": "Leena",
            "lastName": "Jain",
            "email" : "leenajain@gmail.com"
        },
         {
            "id": 2,
            "firstName": "Reena",
            "lastName": "Jain",
            "email" : "reenajain@gmail.com"
        },
         {
            "id": 3,
            "firstName": "Aishwarya",
            "lastName": "Raj",
            "email" : "aishwaryaraj@gmail.com"
        }

    ]
  return (
    <div className='container'>
        <h2 className='center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    sampleData.map(employee =>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>)
                        
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent