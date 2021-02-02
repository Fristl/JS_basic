/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

let number = Math.floor(Math.random() * 999);
console.log(number);


function numInObj (num) {
    if (num > 999) return '{}' + ' Введено число превышеющее 999!';
    let hundreds = Math.floor(num / 100)
    let dozens = Math.floor(num % 100 / 10)
    let units = Math.floor(num % 100 % 10)

    let numObj = {
        'единицы' : units,
        'десятки' : dozens,
        'сотни' : hundreds,
    }
    return numObj
}

console.log(numInObj(number))
