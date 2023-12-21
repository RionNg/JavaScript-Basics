// Type Coercion

1 == '1'; // true
1 == '2'; // false
1 === '1'; // false
1 == 1; // true
1 === 1; // true

-0 === +0; // true
Object.is(-0, +0); // false
NaN === NaN; // false
Object.is(NaN, NaN); // true

// - Type coercion in JavaScript refers to the process of automatically converting one
//    data type to another during certain operations or comparisons.
// - JavaScript is a dynamically-typed language, meaning that variables are not bound
//    to a specific type, and their types can change at runtime.
// - Type coercion occurs when values of different types are involved in an operation or
//    comparison, and the JavaScript engine automatically converts one or both of the 
//    values to a common type.


// 1. Implicit Type Coercion (Type Coercion):
//     - This occurs automatically when values of different types are used in an operation.

// 2. Explicit Type Coercion (Type Casting):
//     - This occurs when a developer explicitly converts a value from one type to another
//        using functions or operators.

// == (negated: !=)
// - When using two equals signs for JavaScript equality testing, some funky conversions take place.
// - It can lead to unexpected results due to type coercion.
// - To avoid potential issues and make your code more explicit, prefer to use the strict
//    equality operator (`===`), which checks both value and type without performing type coercion.

// === (negated: !==)
// - When using three equals signs for JavaScript equality testing, everything is `as is`.
//    Nothing gets converted before being evaluated.
// - It performs a strict equality comparison.
// - Using the `===` operator is generally recommended over `==` because it avoids unexpected
//    type coercion and helps prevent subtle bugs in your code.
// - Strict equality promotes code clarity and reduces the likelihood for unintended conversions.
// - In most cases, it's considered a good practice to use `===` for equality comparisons in JavaScript.

// `Object.is()`
// - Used for making strict equality comparisons between two values.
// - It is similar to the strict equality (`===`), but with a few key differences.
// - It compares both the values and their types, just like `===`, but it has distinct behavior for
//    special cases like `NaN` and `-0` vs. `+0`.
// - Can be beneficial in scenarios where you want to make strict comparisons and handle special cases
//    like `NaN` and `-0` differently than regular strict equality comparisons.
// - However, for most general cases, the strict equality operator (`===`) is commonly used and is sufficient.