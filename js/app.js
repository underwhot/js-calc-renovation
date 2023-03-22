const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');

const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

const checkboxCelling = document.querySelector('input[name="ceiling"]');
const checkboxWalls = document.querySelector('input[name="walls"]');
const checkboxFloor = document.querySelector('input[name="floor"]');

const basePrice = parseInt(document.querySelector('#base-prise').innerHTML); 
const finalPrice = document.querySelector('#calc-price');


squareRange.addEventListener('input', function() {
  squareInput.value = squareRange.value;
});
squareInput.addEventListener('input', function() {
  squareRange.value = squareInput.value;
});

// LISTEN ALL INPUTS 
inputs.forEach(function(item) {
  item.addEventListener('input', function() {
    calculate();
  });
});

// FUNCTIONS 
function calculate() {
  let totalPrice = basePrice * parseInt(squareInput.value);


  radioType.forEach(function(item) {
    if (item.checked === true) {
      totalPrice = totalPrice * parseFloat(item.value);
    }
  });

  radioBuilding.forEach(function(item) {
    if (item.checked === true) {
      totalPrice = totalPrice * parseFloat(item.value);
    }
  });

  radioRooms.forEach(function(item) {
    if (item.checked === true) {
      totalPrice = totalPrice * parseFloat(item.value);
    }
  });


  if (checkboxCelling.checked === true) {
    totalPrice = totalPrice + (parseFloat(checkboxCelling.value) * parseInt(squareInput.value));
  }
  if (checkboxWalls.checked === true) {
    totalPrice = totalPrice * parseFloat(checkboxWalls.value);
  };
  if (checkboxFloor.checked === true) {
    totalPrice = totalPrice * parseFloat(checkboxFloor.value);
  };

  const formatter = new Intl.NumberFormat('ru'); // FORMATTER
  
  finalPrice.innerText = formatter.format(totalPrice);
}
calculate();










