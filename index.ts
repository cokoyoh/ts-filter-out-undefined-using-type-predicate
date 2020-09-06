/**
 * Filter all of the undefineds out of the array. 
 * You can define a defined function of type predicate to use with filter
 **/

const maybeNumbers: (number | undefined)[] = [1, 2, undefined, 3, 4];

const defined = (maybeNumber: number | undefined): maybeNumber is number => {
    return maybeNumber !== undefined;
}; 

const numbers: number[] = maybeNumbers.filter(defined);

console.log(numbers);