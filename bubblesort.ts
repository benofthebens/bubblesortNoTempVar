let arr:number[] = [1, 4, 10, 6, 5, 7];
console.log(bubbleSort(arr));

function bubbleSort(list:number[]):number[] {
    for(let i:number = 0; i < list.length - 1; ++i){

        let swapped:boolean = false;

        for(let j:number = 0; j < list.length - 1 - i; ++j){

            if (list[j] > list[j + 1]) {
                // swapped variables using Xor
                list[j + 1] = list[j + 1] ^ list[j];
                list[j] = list[j + 1] ^ list[j];
                list[j + 1] = list[j + 1] ^ list[j];
                swapped = true; // Update swapped to true when a swap occurs
            }

        }
        if(!swapped) break; // If no swaps were made, the list is sorted
    }
    return list;
}
