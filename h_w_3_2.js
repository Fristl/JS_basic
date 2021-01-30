const basket = [
    ['good_1', 1, 1],
    ['good_2', 2, 2],
    ['good_3', 3, 3],
    ['good_4', 4, 4],
    ['good_5', 5, 5],
    ['good_6', 6, 6],
];

function countBasketPrice(arr) {
    return arr.reduce(function (preSum, item, index, arr) {
        return preSum + item[1] * item[2]
    }, 0)
}

console.log(countBasketPrice(basket));
