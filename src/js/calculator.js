

$(document).ready(function () {
  // Variables
  var input = [""];
  var totalValue;

  // Operators validation
  var operator1 = ["%", "/", "*", "+", "-"];
  var operator2 = ["."];
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Main function updates all
  function getValue(value) {


  }
  // This function will update the display everytime we input a new key
  function update() {
    totalValue = input.join("");
    $("#steps").html(totalString);

  }
  function getTotal() {
    totalValue = input.join("");
    $("#steps").html(eval(totalValue)); // Simply evaluates the string
  }
  $("a").on("click", function() { // Make buttons do stuff

    if(this.id==="delAll") {
      input=[""];
      update(); // Delete all inputs and update to most recent
    }
    else if(this.id==="delOne") {
      input.pop();
      update();
    }
    else if(this.id==="total") {
      getTotal();
    }
  });

});
