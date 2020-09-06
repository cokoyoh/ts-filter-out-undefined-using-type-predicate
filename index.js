/**
 * Filter all of the undefineds out of the array.
 * You can define a defined function of type predicate to use with filter
 **/
var maybeNumbers = [1, 2, undefined, 3, 4];
var defined = function (maybeNumber) {
    return maybeNumber !== undefined;
};
var numbers = maybeNumbers.filter(defined);
console.log(numbers);
