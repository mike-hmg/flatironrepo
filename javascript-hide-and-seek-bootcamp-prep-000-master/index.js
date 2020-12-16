function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested  .target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

// function increaseRankBy(n){
//   // for (let i = 1; i<n.length; i++)
//   document.querySelector('.ranked-list')
// }

function increaseRankBy(n) {
  // select all selectors named '.ranked-list'
  const array = document.querySelectorAll('.ranked-list') 
  // simple for loop to increase 
  for (let i = 0; i<array.length; i++) { 
    // set 'children' array to store the children
    let children = array[i].children 
    // next loop for children array to increase by 'n'
    for(let i=0; i<children.length; i++)
      children[i].innerHTML = parseInt(children[i].innerHTML) + n
  }
}