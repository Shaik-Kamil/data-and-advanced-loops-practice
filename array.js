const values = [
  ['one', 'two', 'three'],
  ['a', 'b', 'c'],
  { firstName: 'Carson', lastName: 'Mathers' },
  'gotcha',
  [1, 2, 3]
];

/**
 * logIt()
 * -----------
 * Given an array of values
 * dynamically log each value in the array

   OUTPUT:

   one
   two
   three
   a
   b
   c
   Carson
   Mathers
   gotcha
   1
   2
   3

 * @param {Array} array 
 */

function logIt(array) {
  // let accumulator = 0 
  let iterator = array.values();
  for (let i = 0; i < array.length;  i++){
    // console.log(iterator.next().value)
    console.log(array[i]) 
    
  }
  // console.log(array[i]);
}

console.log(logIt(values));
