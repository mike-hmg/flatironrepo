// set variable to get the element desired. 
const main = document.getElementById('main');
// using element 'main' set event listener to listen for a click event on
main.addEventListener('click', function(event) {
  // when element is clicked, alert a message in browser
  alert('I was clicked!');
});


// ===================
// // set variable to select 'input' (note it is a form field)
// const input = document.querySelector('input');
// // add event listener to listen for a keypress in the input field 
// // 'e' can be anything. it is just a placeholder in this scenario
// input.addEventListener('keydown', function(e) {
//   // log the key that was pressed to the console. 
//   console.log(e.key);
// });

// =======================
// set input to select the 'input' selector
const input = document.querySelector('input');
// set the event listener to check for key press 
input.addEventListener('keydown', function(e) {
  // if/else function to check if key pressed is "g"
  if (e.key === "g") {
    // if it is "g"... don't let it work
    return e.preventDefault()
    // if it is not 'g', console log the key that was pressed. 
  } else {
    console.log(e.key)
  }
});


// ==================
// Bubbling vs. capturing
// ==================

// set the 'divs' variable to select ALL 'div' elements
let divs = document.querySelectorAll('div')
// create function 'bubble' to receive the 'e' argument
function bubble(e){
  // take 'this'(referring to object it belongs to... in this case 'divs') and digs down to child and node value 
  // console.log the tree that is followed and add the text "bubbled."
  console.log(this.firstChild.nodeValue.trim() + 'bubbled')  
}
// loop over the divs with the event listener 'click' and execute the above "bubble" function on each
for (let i=0;i<divs.length;i++){
  divs[i].addEventListener('click', bubble)
}

// =======================

divs = document.querySelectorAll('div');
 
function capture(e) {
  
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}
// for statement for iteration loop
for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`! This uses the "capture" method instead of "bubbling"
  divs[i].addEventListener('click', capture, true);
}
