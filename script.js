
let origin = 0;
let count = 0;



let originCount = document.getElementById("topDisplay");
let addition = document.getElementById("add");
let subtraction = document.getElementById("substract");
let incrementor = document.getElementById("counter");

addition.addEventListener('click', increase);

subtraction.addEventListener('click', decrease);



function increase() 
{
  incrementor.innerHTML = origin++;
  originCount.innerHTML = origin + count;
  console.log ("working");

  
}


function decrease() 
{
  incrementor.innerHTML = origin--;
  originCount.innerHTML = origin + count;
  console.log ("working");
}

