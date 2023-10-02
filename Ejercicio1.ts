// Recursive function that bubble sorts an array. If outputIteration is set to 0, it'll output in console how many iterations it took to sort the array
function BubbleSortRec(input:Array<number>, outputIteration?:number):Array<number> {
    let output: Array<number> = [...input]
    let changes = 0;
    let itLength = output.length - 1;
    for(let i = 0; i < itLength; i++) {
        if(output[i] > output[i+1]) {
            let temp = output[i];
            output[i] = output[i+1];
            output[i+1] = temp;
            changes++;
        }
    }
    if(changes === 0) {
        if(typeof outputIteration !== "undefined") {
            console.log("Exited at iteration " + outputIteration + "/" + itLength);
        }
        return output;
    } else {
        if(typeof outputIteration === "undefined") {
            return BubbleSortRec(output);
        } else {
            return BubbleSortRec(output, outputIteration+1);
        }
    }
}



const randomArray: number[] = [7, 4, 2, 9, 6, 3, 5, 1, 10, 8];
const nearSortedArray: number[] = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10];
const worstArray: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const bestArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(randomArray);
const orderedArray1 = BubbleSortRec(randomArray, 0);
console.log(orderedArray1);
console.log("----------");
console.log(nearSortedArray);
const orderedArray2 = BubbleSortRec(nearSortedArray);
console.log(orderedArray2);
console.log("----------");
console.log(worstArray);
const orderedArray3 = BubbleSortRec(worstArray, 0);
console.log(orderedArray3);
console.log("----------");
console.log(bestArray);
const orderedArray4 = BubbleSortRec(bestArray, 0);
console.log(orderedArray4);
