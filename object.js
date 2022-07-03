// PERSON ARGUMENT DATA:
const user = {
  firstName: 'Carol',
  lastName: 'Woods',
  favColors: ['red', 'blue', 'green'],
  address: {
    street: '223 Constitution Rd',
    city: 'Bochum',
    zip: '33944-3394'
  }
};

/**
 *
 * listPerson()
 * -------------
 * Independently log every item in an object. Make sure your solution
 * is dynamic and does not just serve the given object.
 * 
 * OUTPUT SHOULD BE:
   Carol
   Woods
   red
   blue
   green
   223 Constitution Rd
   Bochum
   33944-3394
 
 * @param {Object} person
 */
// 1a.use for in to loop through objects to find properties.
//1b. use for in for [{}] to loop through properties of objects
// you can use for of/ or for in loop to loop through an aray.

function listPerson(person) {
  
  for (let per in person){
      if (typeof person[per] === "object"){
        for ( let p in person[per]){
          console.log(person[per][p])
        }
      }else {
        console.log(person[per])
      }
    }
  }


console.log(listPerson(user));
