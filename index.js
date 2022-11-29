let employee = {
    name: '',
    streetAddress: ''
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    function beforeEach() {
        for (const key in employee) {
            delete employee[key];
          }
          employee.name = 'Sam';
    }
}





































// const employee = {
//     name: `Sam`,
//     streetAddress: `12 Broadway`
// }

// function  updateEmployeeWithKeyAndValue(employee, key, value) {


// const employees = {...employee};
// employees[key] = value;
// return employees;

// }

// console.log(updateEmployeeWithKeyAndValue("Sam"))

// function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {


//     employee[key] = value;
//     return employee;
    
//     }

//     function  deleteFromEmployeeByKey(employee, key, value) {

// const newEmployee = {...employee};
// newEmployee[key] = value;
// return newEmployee;

//         }


// function  destructivelyDeleteFromEmployeeByKey(employee, key) {

//             const newEmployee = {};
    
//          delete employee[key];
//         return employee;
                        
//                                 }

