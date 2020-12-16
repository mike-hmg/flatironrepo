// function find(array,criteriaFn){
//   for (let i = 0; i<array.length; i++)
//     if (criteriaFn(array[i]))
//     return array[i]
// }


function find(array, criteriaFn) {
  let current = array
  let next = []

  while (current || current === 0) {
    if (criteriaFn(current)) {
      return current
    }
   
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }

  return null
}