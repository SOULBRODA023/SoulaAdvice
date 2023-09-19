document.DOM
function loadAdvice(){
  const uniqueTimestamp = Date.now();
  const apiUrl = `https://api.adviceslip.com/advice?timestamp=${uniqueTimestamp}`;

fetch(apiUrl)
.then(function(response) {
  if (response.status !== 200) {
    console.log('Error: ' + response.status);
    return;
  }
  
  // Parse the JSON response
  return response.json();
})
.then(function(data) {
  // Access and log the advice
  const advice = data.slip.advice;
  const index = data.slip.id
  console.log(advice);


  const adviceContainer = document.querySelector(".quotedisplay");
  adviceContainer.textContent =  advice;
  const adviceIndex = document.querySelector(".index");
  adviceIndex.textContent = `#${index}`
})
};

document.querySelector(".dice__image").addEventListener("click",loadAdvice)
window.onload = function(){
  loadAdvice();
};