// if, else, else if

var age = prompt("Please provide your age");

if (Number(age) < 18) {
  alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age) === 18) {
  alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (Number(age) > 18) {
  alert("Powering On. Enjoy the ride!");
}

// 1. Make the above code have a function called checkDriverAge() using "Function Declaration".
//    Whenever you call this function, you will get prompted for age.
function checkDriverAge() {
  var age = prompt("Please provide your age");
  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  }
}

// 2. Create another function that does the same thing,
//    called checkDriverAge2() using "Function Expression".
var checkDriverAge2() = function() {
  var age = prompt("Please provide your age");
  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  }
}

// Instead of using prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age.
// So, if you enter checkDriverAge(55);
// it returns "Powering On. Enjoy the ride!"
function checkDriverAge(age) {
  if (Number(age) < 18) {
    return "Sorry, you are too young to drive this car. Powering off";
  } else if (Number(age) === 18) {
    return "Congratulations on your first year of driving. Enjoy the ride!";
  } else if (Number(age) > 18) {
    return "Powering On. Enjoy the ride!";
  }
}
