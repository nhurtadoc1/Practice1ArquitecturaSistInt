// Function that bubble sorts an array. If outputIteration is set to true, it'll output in console how many iterations it took to sort the array
function BubbleSort(input:Array<number>, outputIteration?:boolean):Array<number> {
    let output: Array<number> = [...input]
    let itLength = output.length - 1;
    for(let i = 0; i < output.length - 1; i++) {
        let changes = 0;
        for(let j = 0; j < output.length - 1; j++) {
            if(output[j] > output[j+1]) {
                let temp = output[j];
                output[j] = output[j+1];
                output[j+1] = temp;
                changes++;
            }
        }
        if(changes === 0) {
            if(outputIteration === true) {
                console.log("Exited at iteration " + i + "/" + itLength);
            }
            return output;
        }
    }
    if(outputIteration === true) {
        console.log("Exited at iteration " + itLength + "/" + itLength);
    }
    return output;
}

const randomArray: number[] = [7, 4, 2, 9, 6, 3, 5, 1, 10, 8];
const nearSortedArray: number[] = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10];
const worstArray: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(randomArray);
const orderedArray1 = BubbleSort(randomArray, true);
console.log(orderedArray1);
console.log("----------");
console.log(nearSortedArray);
const orderedArray2 = BubbleSort(nearSortedArray, false);
console.log(orderedArray2);
console.log("----------");
console.log(worstArray);
const orderedArray3 = BubbleSort(worstArray);
console.log(orderedArray3);
console.log("----------");
console.log(randomArray);