document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#button').onclick = count;
});
//
let counter = 0;
function count() {
  counter++;
  document.querySelector(".co").innerHTML = counter;
  if (counter == 5)  {
    alert(`Counter is at ${counter}!`);
    counter = 0;
  }
}
