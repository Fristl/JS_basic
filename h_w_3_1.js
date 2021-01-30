let num = 2;
// 0 и 1 не являются простыми числами, поэтому начинаем сразу с 2

while (num <= 100) {
    let i = 2;
    let j = 0;
    while (true) {
        if (i * i <= num && j !== 1) {
            if (num % i === 0) {
                j = 1;
            }
            i++;
        } else {
            if (j !== 1) {
                console.log(num);
            }
            break;
        }
    }
    num++;
}
