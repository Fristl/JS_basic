// #1

function fahrenheitConversion(Tc) {
    let Tf = (9 / 5) * Tc + 32;
    return Tf;
}

let TcInput = prompt("Введите температуру в градусах Цельсия");
alert("Температура в градусах Фарингейта: " + fahrenheitConversion(TcInput));

// #3
let name;
let admin;
name = "Василий"
admin = name;
alert(admin);

// #4
let text = 1000 + "108";
alert(text);
/* Так как оператор '+', то в приоритете идёт конкатинация строк,
поэтому 1000 будет приведена к строке и склеена с 108 */

// #5
// Почитал, разобрался)
