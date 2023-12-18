// ternary

// condition ? expression1 : expression2;
// if condition is true = expression1
// else if condition is false = expression2

// 1. Change this function into a ternary and assign it to variable called experiencePoints.
function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 2;
  }
}

var experiencePoints = winBattle() ? 10 : 1;
