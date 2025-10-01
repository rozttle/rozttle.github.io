document.querySelector("#button").addEventListener("click", function(){ 
  this.style.background = "red" 
});

document.addEventListener("DOMContentLoaded", (event) => {
  
  const myButton = document.querySelector("button");

  myButton.addEventListener("click", (event) => {
    alert('Hello World!');
  });
  
});