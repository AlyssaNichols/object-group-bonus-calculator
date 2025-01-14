// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // check console log to make sure function is running
  // loop through employees array
 

  // starting logic for the bonus rules
  let bonusPercentage = 0;
  let maxBonus = .13;

  if (employee.reviewRating === 3){
    bonusPercentage += .04
  } else if (employee.reviewRating === 4){
    bonusPercentage += .06
  } else if (employee.reviewRating === 5){
    bonusPercentage += .10
  } else {
    bonusPercentage = 0
  }

  if (employee.employeeNumber.length === 4){ 
    bonusPercentage += .05
  }
  if (employee.annualSalary > 65000){
    bonusPercentage -= .01;
  }
  if (bonusPercentage > maxBonus){
    bonusPercentage = .13;
  }
  if (bonusPercentage < 0){
    bonusPercentage = 0
  }

  // return new object with bonus results
  
  let totalBonus = Math.round(employee.annualSalary * bonusPercentage);
  let totalCompensation = Number(employee.annualSalary) + totalBonus;
 
  return {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus,
  
  };
}
for (const employee of employees) {
  const bonusResult = calculateIndividualEmployeeBonus( employee );
  console.log("bonus results for:", bonusResult);
 }


