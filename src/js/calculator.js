$(document).ready(function () {
  // Variables
  var inputVal = [""];
  var totalValue;

  // Operators validation
  var operator1 = ["%", "/", "*", "+", "-"];
  var operator2 = ["."];
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Main function updates all
  function getValue(value) {

    // Disable duplicate '.' operator
    if(operator2.includes(inputVal[inputVal.length-1] === true && value === ".")) {
      console.log("Duplicated '.' ");
    }

    // Cannot start with an operator
    else if(inputVal.length === 1 && operator1.includes(value) === false) {
      inputVal.push(value);
    }

    // Check if last input was an operator ++ -- **
    else if(operator1.includes(inputVal[inputVal.length-1]) === false) {
      inputVal.push(value);
    }
    else if(nums.includes(Number(value))) {
      inputVal.push(value);
    }
    update(); // Updates function after checking validity of one of the above
  }

  // This function will update the display everytime we input a new key
  function update() {
    totalValue = inputVal.join("");
    $("#steps").html(totalValue);
    console.log(inputVal);
  }

  function getTotal() {
    totalValue = inputVal.join("");
    $("#steps").html(eval(totalValue)); // Simply evaluates the string
  }

  $("a").on("click", function() { // Make buttons do stuff

    if(this.id==="delAll") {
      inputVal = [""];
      update(); // Delete all inputs and update to most recent
    }
    else if(this.id==="delOne") {
      inputVal.pop();
      update();
    }
    else if(this.id==="total") {
      getTotal();
    }
    else {
      if(inputVal[inputVal.length-1].indexOf("%", "/", "*", "+", "-", ".") === -1){
        getValue(this.id);
      }
      else {
        getValue(this.id);
      }
    }
  });

});
