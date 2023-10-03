// Function that checks if a given string is a letter
function isLetter(input: string):boolean{
    return /^[a-z]$/i.test(input);
}

// Function that checks if a given string is a number
function isNumber(input: string):boolean{
    return !isNaN(Number(input));
}

// Function that checks if a given array has three consecutive numbers
function threeConsecutiveNumbers(input: Array<string>):boolean{
    const numPresent: boolean = input.some(elem => isNumber(elem));
    if(numPresent === false && input.length < 3) {
        return false;
    } else {
        for(let i = 0; i < input.length - 2; i++) {
            if(isNumber(input[i]) && isNumber(input[i+1]) && isNumber(input[i+2])) {
                return true;
            }
        }
    }
    return false;
}

// Function that gives a score to the password from -2 to 4. If outputConditions is set to true, the function will print all the conditions met into console
function AssessPasswordSecurity(input:string, outputConditions?:boolean):number {
    const inputArray: string[] = [];
    let output: number = 0;

    for(let i = 0; i < input.length; i++) {
        inputArray.push(input[i]);
    };

    const numberPresent: boolean = inputArray.some(elem => isNumber(elem));
    const letterPresent: boolean = inputArray.some(elem => isLetter(elem));
    // Condition 1: Number and letter present
    if(numberPresent && letterPresent) { outputConditions && console.log("Positive Condition 1 met"); output++; };
    // Condition 2: Special character (neither number nor letter) present
    if(inputArray.some(elem => !isNumber(elem) && !isLetter(elem))) { outputConditions && console.log("Positive Condition 2 met"); output++; };
    // Condition 3: Three consecutive numbers present
    if(threeConsecutiveNumbers(inputArray)) { outputConditions && console.log("Negative Condition 3 met"); output--; };
    // Conditions 4 and 5: Less than 10 characters and more than 20 characters
    if(inputArray.length < 10) { outputConditions && console.log("Negative Condition 4 met"); output--; } else if(inputArray.length > 20) { outputConditions && console.log("Positive Condition 5 met"); output = output + 2; };
    return output;
}

const password: string = "qwertyuiop_16asdfghjkl123zxcvbnm";
const passwordEvaluation: number = AssessPasswordSecurity(password, true);
console.log(passwordEvaluation);
