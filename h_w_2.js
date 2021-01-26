//   #1
function ex1() {
    var a = 1, b = 1, c, d;
    c = ++a; console.log(c);           // 2 -> a = 1, сначала срабатывает префиксный инкремент -> a = a + 1, после новое значение a присваивается в c
    d = b++; console.log(d);           // 1 -> b = 1, сначала присваивается нзначение b в d, после срабатывает постфиксный инкремент -> b = b + 1
    c = (2+ ++a); console.log(c);      // 5 -> a = 2, сначала срабатывает префиксный инкремент -> a = a + 1, после происходит сложение и присваивание в c
    d = (2+ b++); console.log(d);      // 4 -> b = 2, сначала происходит сложение и присваивание в d, после срабатывает постфиксный инкремент -> b = b + 1
    console.log(a);                    // 3 -> сработало два префиксных инкремента
    console.log(b);                    // 3 -> сработало два постфиксных инкремента  
}

ex1();



//   #2
function ex2() {
    var a = 2;
    var x = 1 + (a *= 2);
    console.log('x равен: ' + x);
    // а умножается на 2, после сложение с 1 -> 4 + 1 = 5
}

ex2();



function genSign() {
    let sign = Math.pow(-1, Math.floor(Math.random() * 2));
    return sign;
}

function genNum() {
    return Math.floor(Math.random() * 15);
}



//  #3
function ex3() {
    let a = genNum();
    let b = genNum();
    a *= genSign();
    b *= genSign();

    if (a > 0 && b > 0) {
        return console.log(`Разность ${a} и ${b} равна: ` + (a - b));
    } else if (a < 0 && b < 0) {
        return console.log(`Произведение ${a} и ${b} равно: ` + a * b);
    } else {
        return console.log(`Сумма ${a} и ${b} равна: ` + (a + b));
    }
}

ex3();



//   #4
function ex4() {
    let a = genNum();
    console.log(a);
    let num = -1;
    let strOut = '';

    switch (--a) {
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num++ + ' ';
        case num++:
            strOut += num + ' ';
    }

    console.log(strOut);
}

ex4();



// #5-6
function ex5_6() {

    function genIndArr(array) {
        return Math.floor(Math.random() * array.length);
    }

    let arr = ['sum', '+', 'plus', 'substraction', '-', 'minus', 'multiplication', '*', 'division', '/', ];


    function sum_(a, b){
        return `Сумма ${a} и ${b} равна: `+ (a + b);
    }

    function subtraction(a, b) {
        return `Разность ${a} и ${b} равна: ` + (a - b);
    }

    function multiplication(a, b) {
        return `Произведение ${a} и ${b} равно: ` + (a * b);
    }

    function division(a, b) {
        if (b != 0) {
            return `Частное ${a} и ${b} равно: ` + (a / b);
        } else {
            return 'АТАТА! На ноль делить нельзя!';
        }
    }

    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case 'sum':
                return sum_(arg1, arg2);
            case '+':
                return sum_(arg1, arg2);
            case 'plus':
                return sum_(arg1, arg2);

            case 'substraction':
                return subtraction(arg1, arg2);
            case '-':
                return subtraction(arg1, arg2);
            case 'minus':
                return subtraction(arg1, arg2);

            case 'multiplication':
                return multiplication(arg1, arg2);
            case '*':
                return multiplication(arg1, arg2);

            case 'division':
                return division(arg1, arg2);
            case '/':
                return division(arg1, arg2);
        }
    }

    console.log(mathOperation(genNum(), genNum(), arr[genIndArr(arr)])); 
}

ex5_6()



//   #7

// let a;
// a = null;
// let b;
// b = 0;

// a == b
// false
// a === b
// false
// a > b
// false
// a < b
// false

// null - специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».
// Поэтому невозможно сравнить число 0 с ничем.



//   #8
function ex8() {

    function power(val, pow) {
        if (pow == 0) {
            return 1;
        } else if(pow == 1) {
            return val;
        } else if(pow > 1) {
            return val * power(val, --pow);
        } else if(pow == -1) {
            return 1 / val;
        } else if(pow < -1) {
            return 1 / (val / power(val, ++pow));
        }
    }

    console.log(power(genNum(), genNum() * genSign()));
}

ex8();
