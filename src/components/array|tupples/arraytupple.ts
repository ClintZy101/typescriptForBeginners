// array can have a combination of types 
export const nameAge: (string | number)[] = ['Osinachi', 10011, 12345, "Victor"];
console.log(nameAge);

// tuples are strict in order and according to type
export const primaryColors: [string, string, string] = ['#ff0000', '#00ff00', '#0000ff'];
// console.log(primaryColors);

// export const primaryColors2: [string, string, string] = ['#00ff00', '#0000ff'];
// throws an error because all strings have not been provided